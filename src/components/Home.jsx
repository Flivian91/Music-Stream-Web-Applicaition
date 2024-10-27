import Filter from "./Filter";
import MusicGrid from "./MusicGrid";

function Home({songs}) {
  return (
    <div className=" w-full flex-grow flex items-center justify-center py-4 ">
      <div className="shadow-md rounded w-4/5 h-full px-2 py-4 flex flex-col gap-5 ">
        <Filter />
        <MusicGrid songs = {songs}/>
       
      </div>
    </div>
  );
}

export default Home;
