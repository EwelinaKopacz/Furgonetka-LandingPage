import React from 'react';

const Button = ({text, className='', onClick}) => {
    return (
        <div className='btn btn__container'>
            <button className={className} onClick={onClick}>
                <p className='btn__text'>{text}</p>
            </button>
        </div>
    )
}
export default Button;
