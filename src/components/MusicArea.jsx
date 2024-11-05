/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import MusicItem from "./MusicItem";

function MusicArea({
  songs,
  currentSong,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
}) {
  return (
    <div className="flex flex-col gap-2 h-full">
      {songs.map((song) => (
        <MusicItem
          song={song}
          key={song.id}
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      ))}
    </div>
  );
}

export default MusicArea;
