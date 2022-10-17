import React from 'react';
import './Intro.css';

const Intro = (props) => {
    const {header, text, className='', className2=''} = props;
    return (
        <section className={`intro ${className2}`}>
            <div className={`intro__container ${className}`}>
                <div className='intro__description'>
                    <h2 className='intro__header'>{header}</h2>
                    <p className='intro__text'>{text}</p>
                </div>
            </div>
        </section>
    )
}

export default Intro;