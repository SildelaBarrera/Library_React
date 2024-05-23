import Logo from './Logo'
import Menu from './Menu'

function Header(){

    return (

    <header className = "inline-flex place-content-between h-22 w-full border-4 border-black border-dotted bg-white text-black " > 
        
            <Logo></Logo>
            <Menu />   

    </header>
    )

}

export default Header;