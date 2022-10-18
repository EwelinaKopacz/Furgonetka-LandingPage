import React from 'react';
import './Title.css';

const Title= ({header, className=''}) => {
    return(
        <>
            <h2 className={`header__h2 ${className}`}>{header}</h2>
        </>
    )
}

export default Title;