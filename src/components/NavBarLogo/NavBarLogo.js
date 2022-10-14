import React from 'react';
import './NavBarLogo.css';

const NavBarLogo = (props) => {
    const {logo, alt} = props;
    return(
        <div className='nav__logo'>
            <img src={logo} alt={alt}/>
        </div>
    )

}

export default NavBarLogo;