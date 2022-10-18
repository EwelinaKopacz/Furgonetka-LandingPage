import React from 'react';
import './NavBar.css';
import NavBarLogo from "../NavBarLogo/NavBarLogo";
import logo from '../../assets/furgonetka-logo.svg'

const NavBar = () => {
    return(
        <nav className='nav '>
            <div className='nav__container flex__row--start2'>
                <NavBarLogo logo={logo} alt='furgonetka-logo'/>
            </div>
        </nav>
    )
}

export default NavBar;