/* eslint-disable react/prop-types */
import { AiOutlinePause } from "react-icons/ai";
import { IoPlayOutline } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { CiHeart } from "react-icons/ci";

function MusicItem({
  song,
  currentSong,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
}) {
  const { audio_url: trackUrl } = song;
  const [duration, setDuration] = useState("0:00"); // State to store the duration
  const audioRef = useRef(null);

  useEffect(() => {
    // Create a new audio object to get the duration
    const audio = new Audio(trackUrl);
    audio.addEventListener("loadedmetadata", () => {
      // Convert duration from seconds to minutes:seconds format
      const minutes = Math.floor(audio.duration / 60);
      const seconds = Math.floor(audio.duration % 60)
        .toString()
        .padStart(2, "0");
      setDuration(`${minutes}:${seconds}`);
    });

    // Cleanup the audio object
    return () => {
      audio.removeEventListener("loadedmetadata", () => {});
    };
  }, [trackUrl]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause(); // Pause previous audio
    }
    if (currentSong && currentSong.id === song.id) {
      audioRef.current = new Audio(trackUrl);
      if (isPlaying) {
        audioRef.current.play();
      }
    }
    // Cleanup audio on component unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [currentSong, isPlaying, song.id, trackUrl]);

  const togglePlayPause = () => {
    if (currentSong && currentSong.id === song.id) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    } else {
      setCurrentSong(song);
      setIsPlaying(true);
    }
  };

  return (
    <div className="grid font-mono text-base grid-cols-[0.3fr_1.3fr_0.5fr_0.5fr_0.3fr_0.6fr] gap-3 border-b border-yellow-700 py-2">
      <button
        onClick={togglePlayPause}
        className="w-7 h-7 flex items-center justify-center rounded-full border border-yellow-800"
      >
        {currentSong && currentSong.id === song.id && isPlaying ? (
          <AiOutlinePause />
        ) : (
          <IoPlayOutline />
        )}
      </button>
      <span className="truncate">{song.title}</span>
      <span className="text-yellow-800">{song.artist_name}</span>
      <span className="text-yellow-800">{song.genre}</span>
      <span className="text-yellow-800">{duration}</span>{" "}
      {/* Displaying the duration */}
      <div className="flex items-center gap-5 justify-center">
        <button title="Like">
          <CiHeart fontSize={23} />
        </button>
        <button title="Add to Playlist">
          <MdOutlinePlaylistAdd fontSize={23} />
        </button>
      </div>
    </div>
  );
}

export default MusicItem;
