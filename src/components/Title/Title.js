import React from 'react';
import './Title.css';

const Title= ({header}) => {
    return(
        <>
            <h2 className='header__h2'>{header}</h2>
        </>
    )
}

export default Title;