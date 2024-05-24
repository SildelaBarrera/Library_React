import Logo from "./Logo";
import Menu from "./Menu";

function Header () {


  return (
    <header className="px-4 bg-teal-400 flex items-center justify-between">
      <Logo />

      <Menu />
    </header>
  );
}

export default Header;