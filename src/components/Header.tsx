import Logo from "./Logo";
import Menu from "./Menu";
import Sidebar from "./Sidebar";
import { RxHamburgerMenu } from "react-icons/rx"; 
import {useState} from "react";


function Header () {

  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  return (
    <header className="px-4 bg-blue-100 text-blue-400 flex items-center justify-between font-serif">
      <Logo />
      
      <div className = "hidden md:block">
        <Menu />
      </div>
      
      <button className="md:hidden relative z-50" onClick ={() => setIsOpenSidebar (!isOpenSidebar)}>
          <RxHamburgerMenu size={30} className="text-blue-400 hover:text-sky-700"/>
      </button>

      {isOpenSidebar && <Sidebar isOpenSidebar = {isOpenSidebar}/>}

    </header>
  );
}

export default Header;