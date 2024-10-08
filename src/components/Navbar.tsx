
/*
 *
 *
 *
 *
 */

function closeNav() {
    document.getElementById("navbar")!.style.width = "0";
    document.getElementById("main")!.style.marginLeft = "0";
}

function Navbar() {
    return (
        <ul id='navbar' className='sidenav'>
            <li className="closeNavButton"><a href="javascript:void(0)" onClick={closeNav}>&times;</a></li>
            <li className="navbar-link"><a href="/">Home</a></li>
            <li className="navbar-link"><a href="#about">About</a></li>
            <li className="navbar-link"><a href="#work">Work</a></li>
            <li className="navbar-link"><a href="#projects">Projects</a></li>
        </ul>
    )
}

export default Navbar;
