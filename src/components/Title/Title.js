import React from 'react';

const Title= ({header, className=''}) => {
    return(
        <header>
            <h2 className={`header__h2 ${className}`}>{header}</h2>
        </header>
    )
}

export default Title;