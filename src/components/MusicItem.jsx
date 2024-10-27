/* eslint-disable react/prop-types */
import { AiOutlinePause } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { IoPlayOutline } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
function MusicItem({ song }) {
  const { isPlaying, setIsPlaying } = useState(false);
  const { audio_url: trackUrl } = song;

  const audioRef = useRef(null);

  useEffect(
    function () {
      if (audioRef.current) {
        audioRef.current.pause(); //Pause the previous audio when the track changes
      }
      audioRef.current = new Audio(trackUrl);
    },
    [trackUrl]
  );
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
  return (
    <div className="grid font-mono text-base grid-cols-[0.3fr_1.3fr_0.5fr_0.5fr_0.3fr_0.6fr] gap-3 border-b border-yellow-700 py-2">
      <button
        onClick={togglePlayPause}
        className="w-7 h-7 flex items-center justify-center rounded-full border border-yellow-800"
      >
        {isPlaying ? <IoPlayOutline /> : <AiOutlinePause />}
        {/* IoPlayOutline */}
      </button>
      <span className="truncate">{song.title}</span>
      <span className="text-yellow-800">{song.artist_name}</span>
      <span className="text-yellow-800">{song.genre}</span>
      <span className="text-yellow-800">54:12</span>
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
