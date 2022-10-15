import React from 'react';
import './Button.css';

const Button = ({text}) => {
    return (
        <div className='box__btn cta'>
            <button className='cta__btn'>
                <p className='cta__text'>{text}</p>
            </button>
        </div>
    )
}

export default Button;
  