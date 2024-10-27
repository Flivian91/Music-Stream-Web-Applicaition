import Logo from "./Logo";
import Profile from "./Profile";
import Searchbar from "./Searchbar";

function Navbar() {
  return (
    <div className="flex justify-between px-4 items-center">
      <Logo />
      <Searchbar />
      <Profile />
    </div>
  );
}

export default Navbar;
