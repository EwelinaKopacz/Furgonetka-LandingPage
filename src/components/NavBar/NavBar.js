import React from 'react';
import NavBarLogo from "../NavBarLogo/NavBarLogo";
import logo from '../../assets/furgonetka-logo.svg'

const NavBar = () => {
    return(
        <nav className='nav'>
            <div className='nav__wrapper'>
                <div className='nav__container'>
                    <NavBarLogo logo={logo} alt='furgonetka-logo'/>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;