/* eslint-disable react/prop-types */
import Logo from "./Logo";
import Profile from "./Profile";
import Searchbar from "./Searchbar";

function Navbar({handleSearch}) {
  return (
    <div className="flex justify-between px-4 items-center">
      <Logo />
      <Searchbar onSearch={handleSearch} />
      <Profile />
    </div>
  );
}

export default Navbar;
