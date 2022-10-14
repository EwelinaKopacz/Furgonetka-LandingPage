import React from 'react';
import './Button.css';

const Button = ({text}) => {
    return (
        <button className='cta__btn'>{text}</button>
    )
}

export default Button;
  