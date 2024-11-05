/* eslint-disable react/prop-types */
import MusicArea from "./MusicArea"
import MusicHeader from "./MusicHeader"

function MusicGrid({ songs, currentSong, setCurrentSong, isPlaying, setIsPlaying }) {
  return (
    <div className="flex flex-col gap-2">
      <MusicHeader/>
      <MusicArea songs={songs}
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}/>
    </div>
  )
}

export default MusicGrid