import React from 'react';
import './NavBar.css';
import NavBarLogo from "../NavBarLogo/NavBarLogo";
import logo from '../../assets/furgonetka-logo.svg'

const NavBar = () => {
    return(
        <nav className='nav'>
            <NavBarLogo logo={logo} alt='furgonetka-logo'/>
        </nav>
    )

}

export default NavBar;