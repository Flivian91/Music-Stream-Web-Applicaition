/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import MusicItem from "./MusicItem";

function MusicArea({ songs }) {
  const [isPlaying, setIsplaying] = useState(true);


  return (
    <div className="flex flex-col gap-2 h-full">
      {songs.map((song) => (
        <MusicItem song={song} key={song.id} isPlaying={isPlaying} />
      ))}
    </div>
  );
}

export default MusicArea;
