import React from 'react';
import Title from '../Title/Title';

const Intro = (props) => {
    const {header, text, className='', className2=''} = props;
    return (
        <section className={`intro ${className2}`}>
            <div className={`intro__wrapper ${className}`}>
                <div className='intro__description'>
                    <Title header={header}/>
                    <p className='intro__text'>{text}</p>
                </div>
            </div>
        </section>
    )
}

export default Intro;