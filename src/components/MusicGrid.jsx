/* eslint-disable react/prop-types */
import MusicArea from "./MusicArea"
import MusicHeader from "./MusicHeader"

function MusicGrid({songs}) {
  return (
    <div className="flex flex-col gap-2">
      <MusicHeader/>
      <MusicArea songs={songs}/>
    </div>
  )
}

export default MusicGrid