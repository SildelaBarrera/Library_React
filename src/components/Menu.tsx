import { NavLink } from "react-router-dom";


type MenuProps = { isOpenSidebar?: boolean};


function Menu (props: MenuProps) {

  const user = null;
  // const user = {name: "Silvia"}
  
  const {isOpenSidebar} = props;

  const commonClasses = 'flex gap-3 sm:gap-5 md:gap-7 xl:gap-10 text-xl';
  const sidebarClasses = isOpenSidebar ? 'flex flex-col fixed top-0 right-0 mt-60 mr-4 p-5 bg-blue-100': '';
  // const headerClasses = 'hidden md:flex';
  const classes = `${commonClasses} ${sidebarClasses}`;

    return (
      <>
        <nav className= {classes}>
            <NavLink className= {({isActive}) => isActive ? 'text-white underline' : "text-blue-400"} to="/" >HOME</NavLink>
            

            {user && <NavLink className="text-blue-400 p-10 hover:text-sky-700" to="/books">BOOKS</NavLink>}
            {user && <NavLink className="text-blue-400 p-10 hover:text-sky-700" to="/addbook">ADD BOOK</NavLink>}
            {user && <NavLink className="text-blue-400 p-10 hover:text-sky-700" to="/editbook">EDIT BOOK</NavLink>}
            {user && <NavLink className="text-blue-400 p-10 hover:text-sky-700" to="/profile">PROFILE</NavLink>}
            {!user && <NavLink className="text-blue-400 p-10 hover:text-sky-700" to="/login">LOG IN</NavLink>}
            {!user && <NavLink className="text-blue-400 p-10 hover:text-sky-700" to="/register">REGISTER</NavLink>}
        </nav>
     
      </>
    )
    
  }
  
  export default Menu;