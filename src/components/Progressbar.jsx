/* eslint-disable react/prop-types */
function Progressbar({progress}) {
  return (
    <div className="flex-grow border border-gray-700/10 overflow-hidden rounded-full">
      <div style={{ width: `${progress}%` }} className=" h-2  bg-purple-700"></div>
    </div>
  );
}

export default Progressbar;
