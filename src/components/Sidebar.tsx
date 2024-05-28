import Menu from "./Menu"

type SidebarProps = {isOpenSidebar: boolean}

function Sidebar ({isOpenSidebar}: SidebarProps) {

    return (
      <>
        <div className ="md:hidden fixed  ">
          <Menu isOpenSidebar = {isOpenSidebar} />
          </div>
      </>
    )
    
  }
  
  export default Sidebar;