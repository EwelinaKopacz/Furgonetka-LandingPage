import React from 'react';
import './Button.css';

const Button = ({text, className='', className2=''}) => {
    return (
        <div className='box__btn cta'>
            <button className={`cta__btn ${className}`}>
                <p className={`cta__text ${className2}`}>{text}</p>
            </button>
        </div>
    )
}
export default Button;
