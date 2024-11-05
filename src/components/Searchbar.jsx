/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
function Searchbar({onSearch}) {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault()
    const value = e.target.value.toLowerCase();
    setSearchInput(value);
    onSearch(value); // Pass the input value to the parent component
  };

  return (
    <form className="flex items-center gap-3 border border-yellow-300/40 rounded px-2 w-1/2">
      <input
        value={searchInput}
        onChange={handleChange}
        placeholder="Search music"
        className="border-none bg-transparent font-bold text-lg text-yellow-900 font-mono focus:border-none focus:ring-0 w-full focus:outline-none"
        type="text"
      />
      <button className="h-full" type="submit">
        <AiOutlineSearch fontSize={22} />
      </button>
    </form>
  );
}

export default Searchbar;
