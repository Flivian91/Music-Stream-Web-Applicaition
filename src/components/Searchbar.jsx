import { AiOutlineSearch } from "react-icons/ai";
function Searchbar() {
  return (
    <form className="flex items-center gap-3 border border-yellow-300/40 rounded px-2 w-1/2">
      <input
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
