/* eslint-disable react/prop-types */
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { CiRepeat, CiVolumeHigh } from "react-icons/ci";
import music from "../assets/music.png";
import MusicPlayer from "./MusicPlayer";
import { useEffect, useRef, useState } from "react";
import Progressbar from "./Progressbar";
import { convertToTime } from "../utils/convertToTime";

function CurrentMusic({ song, isPlaying, setIsPlaying }) {
  const [progress, setProgress] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [isRepeating, setIsRepeating] = useState(false);

  const audioRef = useRef(new Audio());

  useEffect(() => {
    if (song) {
      if (audioRef.current.src !== song.audio_url) {
        audioRef.current.src = song.audio_url;
        audioRef.current.volume = volume;
        audioRef.current.loop = isRepeating;

        if (isPlaying) {
          audioRef.current.play();
        }
      }

      const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
        const currentProgress =
          (audioRef.current.currentTime / audioRef.current.duration) * 100;
        setProgress(currentProgress);
      };

      audioRef.current.addEventListener("timeupdate", handleTimeUpdate);

      audioRef.current.onloadedmetadata = () => {
        setTotalTime(audioRef.current.duration);
      };

      return () => {
        audioRef.current.pause();
        audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, [song, isRepeating, volume, isPlaying]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.loop = isRepeating;

    const handleEnd = () => {
      if (isRepeating) {
        audioRef.current.currentTime = 0; // Reset to start if repeating
        audioRef.current.play(); // Play again
      }
    };

    audioRef.current.addEventListener("ended", handleEnd);

    return () => {
      audioRef.current.removeEventListener("ended", handleEnd);
    };
  }, [isRepeating]);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying((prev) => !prev); // Toggle the play/pause state
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const toggleRepeat = () => {
    setIsRepeating((prev) => !prev); // Toggle the repeat state
  };

  return (
    <div className="w-full fixed bottom-0 bg-yellow-400 py-1 px-2">
      <div className="w-full items-center font-mono gap-5 flex mb-3">
        <span>{convertToTime(currentTime)}</span>
        <Progressbar progress={progress} />
        <span>{convertToTime(totalTime)}</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <img className="w-12 h-12" src={music} alt="" />
          <div className="flex flex-col">
            <span className="font-mono font-bold">
              {song ? song.title : "No Song Playing"}
            </span>
            <span className="font-mono text-yellow-700">
              {song ? song.artist_name : "Unknown Artist"}
            </span>
          </div>
        </div>
        <MusicPlayer togglePlayPause={togglePlayPause} isPlaying={isPlaying} />
        <div className="flex items-center gap-3">
          <button
            onClick={toggleRepeat}
            className={`text-2xl p-1 rounded ${
              isRepeating
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            title="Repeat"
          >
            <CiRepeat fontSize={23} />
          </button>
          <div className="flex items-center">
            <button className="text-2xl" title="Volume">
              <CiVolumeHigh fontSize={23} />
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="slider w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          <button
            className="text-2xl hover:bg-yellow-300 p-1 rounded transition-all duration-200"
            title="Add to Playlist"
          >
            <MdOutlinePlaylistAdd fontSize={23} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CurrentMusic;
