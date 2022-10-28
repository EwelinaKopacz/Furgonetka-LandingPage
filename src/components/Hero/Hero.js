import React from 'react';
import Button from '../Button/Button';

const Hero = () => {
  return (
    <section className='hero'>
        <div className='hero__wrapper'>
            <div className='hero__left'>
                <div className='hero__container'>
                    <div className='hero__description'>
                        <div className='hero__head'>
                            <span className='hero__text'>FURGONETKA</span>
                            <h1 className='hero__h1'>Przesyłki krajowe <span className='hero__special'>z Furgonetką</span></h1>
                            <span className='hero__img'></span>
                        </div>
                        <div className='hero__info'>
                            <p className='hero__content'>Nadawaj przesyłki krajowe o różnych gabarytach ze sprawdzonymi przewoźnikami – z dostawą pod drzwi, do punktów odbioru i automatów paczkowych. </p>
                        </div>
                    </div>
                    <Button text='nadaj przesyłkę' className='btn--primary'/>
                </div>
            </div>
            <div className='hero__right'></div>
        </div>
    </section>
  );
}

export default Hero;
