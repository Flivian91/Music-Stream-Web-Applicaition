import logo from "../assets/music.png";
function Logo() {
  return (
    <div className="p-1 flex items-center gap-2">
      <img className="w-12" src={logo} alt="" />
      <div className="flex select-none flex-col gap-0 items-center">
        <span className="text-lg font-mono text-yellow-900 font-extrabold">
          Mziki
        </span>
        <span className="text-lg font-mono text-yellow-900 font-extrabold -mt-2">
          Moto
        </span>
      </div>
    </div>
  );
}

export default Logo;
