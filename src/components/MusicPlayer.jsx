/* eslint-disable react/prop-types */
import { IoMdPause } from "react-icons/io";
import { IoPlayOutline } from "react-icons/io5";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";

function MusicPlayer({ togglePlayPause, isPlaying }) {

  return (
    <div className=" flex-grow flex items-center justify-center gap-5">
      <button className="text-2xl hover:bg-yellow-300 p-1 rounded transition-all duration-200">
        <MdSkipPrevious />
      </button>
      <button
        onClick={togglePlayPause}
        className="text-4xl hover:text-purple-600 transition-all duration-200 hover:rounded"
      >
        {isPlaying ?  <IoMdPause />:<IoPlayOutline />}
      </button>
      <button className="text-2xl hover:bg-yellow-300 p-1 rounded transition-all duration-200">
        <MdSkipNext />
      </button>
    </div>
  );
}

export default MusicPlayer;
