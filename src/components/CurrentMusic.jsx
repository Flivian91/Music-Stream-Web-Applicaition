import { MdOutlinePlaylistAdd } from "react-icons/md";

import { CiRepeat } from "react-icons/ci";
import { CiVolumeHigh } from "react-icons/ci";
import music from "../assets/music.png";
import MusicPlayer from "./MusicPlayer";
import trackUrl from "../assets/wakadinali.m4a";
import { useEffect, useRef, useState } from "react";
import Progressbar from "./Progressbar";
import { convertToTime } from "../utils/convertToTime";
function CurrentMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [volume, setVolume] = useState(1); // Volume state initialized to 100%
  const [currentTime, setCurrentTime] = useState(0);
  const [isRepeating, setIsRepeating] = useState(false); // Repeat state

  const audioRef = useRef(null); // Reference for the audio object

  // Effect to handle when the track URL changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause(); // Pause previous audio when track changes
    }
    audioRef.current = new Audio(trackUrl); // Create new Audio object with the updated URL
    audioRef.current.volume = volume; // Set initial volume
    audioRef.current.loop = isRepeating; // Set the loop property based on the repeat state
    setIsPlaying(false); // Reset the state to not playing

    // Update the progress bar as the song plays
    audioRef.current.addEventListener("timeupdate", () => {
      const currentProgress =
        (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(currentProgress);
      setTotalTime(audioRef.current.duration / 100);
      setCurrentTime(audioRef.current.currentTime);
    });
    // Clear the effect
    return () => {
      audioRef.current.removeEventListener("timeupdate", () => {});
    };
  }, [trackUrl]);

  // Function to play/pause the song
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };
  // Handle volume change
  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume); // Update volume state
    audioRef.current.volume = newVolume; // Set volume on the audio object
  };
  // Handle repeat toggle
  const toggleRepeat = () => {
    setIsRepeating(!isRepeating); // Toggle repeat state
    audioRef.current.loop = !isRepeating; // Set loop property based on new repeat state
  };
  return (
    <div className="w-full fixed bottom-0 bg-yellow-400 py-1 px-2">
      <div className="w-full items-center font-mono gap-5 flex mb-3">
        <span>{convertToTime(currentTime)}</span>
        {/* Progress bar */}
        <Progressbar progress={progress} />
        <span>{convertToTime(totalTime)}</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <img className="w-12 h-12" src={music} alt="" />
          <div className=" flex flex-col">
            <span className="font-mono font-bold">Best Arbertone Mix 2024</span>
            <span className="font-mono text-yellow-700">Flivian</span>
          </div>
        </div>
        {/* Track Record */}
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
          {/* <button
            className="text-2xl hover:bg-yellow-300 p-1 rounded transition-all duration-200"
            title="Volume"
          >
            <CiVolumeHigh fontSize={23} />
          </button> */}
          <div className="flex items-center">
            <button className="text-2xl " title="Volume">
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
        {/*  */}
      </div>
    </div>
  );
}

export default CurrentMusic;
