import { AiOutlineArrowDown } from "react-icons/ai";

function Filter() {
  return (
    <div>
      <button className="flex items-center gap-2 shadow px-3 py-1 rounded-full">
        <span className="text-sm font-mono">Sort</span>
        <AiOutlineArrowDown fontSize={14} />
      </button>
    </div>
  );
}

export default Filter;
