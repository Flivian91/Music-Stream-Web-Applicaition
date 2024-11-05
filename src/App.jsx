import { useEffect, useState } from "react";
import CurrentMusic from "./components/CurrentMusic";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { supabase } from "./supabaseClient";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentSong, setCurrentSong] = useState(null); // New state for current song
  const [isPlaying, setIsPlaying] = useState(false); // New state for play status
  const [filteredItems, setFilteredItems] = useState([]);

  async function loadSongs() {
    try {
      setIsLoading(true);
      const { data, error } = await supabase.from("songs").select("*");
      if (error) {
        console.log(error.message);
      }
      setSongs(data || []);
      setFilteredItems(data || [])
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadSongs();
  }, []);
  // Search funcitonality

  const handleSearch = (query) => {
    if (query.length < 2) {
      setFilteredItems(songs);
    } else {
      const filtered = songs.filter((item) =>
        item.title.toLowerCase().includes(query)
      );
      setFilteredItems(filtered);
    }
  };

  return (
    <div className="flex flex-col gap-5 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-700 min-h-screen ">
      <Navbar handleSearch={handleSearch} />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Home
          songs={filteredItems}
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      )}

      {currentSong && (
        <CurrentMusic
          song={currentSong}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      )}
    </div>
  );
}

export default App;
