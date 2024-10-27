import { useEffect, useState } from "react";
import CurrentMusic from "./components/CurrentMusic";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { supabase } from "./supabaseClient";

function App() {
  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  async function loadSongs() {
    try {
      setIsLoading(true);
      const { data, error } = await supabase.from("songs").select("*");
      if (error) {
        console.log(error.message);
      }
      setSongs(data || []);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(function () {
    loadSongs();
  }, []);

  return (
    <div className="flex flex-col gap-5 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-700 min-h-screen mb-10">
      <Navbar />
      <Home songs={songs} />
      <CurrentMusic />
    </div>
  );
}

export default App;
