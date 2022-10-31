import React from 'react';

const Button = ({text, className=''}) => {
    return (
        <div className='btn btn__container'>
            <button className={className}>
                <p className='btn__text'>{text}</p>
            </button>
        </div>
    )
}
export default Button;
