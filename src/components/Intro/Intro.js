import React from 'react';
import './Intro.css';

const Intro = (props) => {
    const {header, text} = props;
    return (
        <section className='intro'>
            <div className='intro__container'>
                <div className='intro__description'>
                    {/* <h2 className='intro__header'><span className='intro__special'>{special}</span> {header}</h2> */}
                    <h2 className='intro__header'>{header}</h2>
                    <p className='intro__text'>{text}</p>
                </div>
            </div>

        </section>
    )
}

export default Intro;