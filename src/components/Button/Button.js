import React from 'react';
import './Button.css';

const Button = ({text, className='', className2='', onClick}) => {
    return (
        <div className='box__btn cta flex__row--center1'>
            <button className={`cta__btn ${className}`} onClick={onClick}>
                <p className={`cta__text ${className2}`}>{text}</p>
            </button>
        </div>
    )
}
export default Button;
