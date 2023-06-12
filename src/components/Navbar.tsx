function Navbar() {
    return (
        <>
            <nav id='main-nav' className='navbar'>
                <ul role='list' className='navbar-nav'>
                    <li className='nav-item'> <a className='nav-link' href="#">Aidan Farber</a> </li>
                    <li className='nav-item'> <a className='nav-link' href="#about">About</a> </li>
                    <li className='nav-item'> <a className='nav-link' href='#projects'>Projects</a> </li>
                    <li className='nav-item'> <a className='nav-link' href='#Contact'>Contact</a> </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
