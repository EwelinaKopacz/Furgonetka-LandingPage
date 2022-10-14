import React from 'react';
import './Hero.css';
import Button from '../Button/Button';

const Hero = () => {
  return (
    <section className='hero'>
        <div className='hero__left box'>
            <div className='box__container'>
                <div className='box__description'>
                    <div className='box__head'>
                        <span className='head__text'>FURGONETKA</span>
                        <h1 className='head__h1'>Przesyłki krajowe <span className='head__special'>z Furgonetką</span></h1>
                        <span className='head__img'></span>
                    </div>
                    <div className='box__info'>
                        <p className='box__text'>Nadawaj przesyłki krajowe o różnych gabarytach ze sprawdzonymi przewoźnikami – z dostawą pod drzwi, do punktów odbioru i automatów paczkowych. </p>
                    </div>
                 </div>
                <div className='box__btn cta'>
                    <Button text='nadaj przesyłkę'/>
                </div>
            </div>
        </div>
        <div className='hero__right box'></div>

    </section>
  );
}

export default Hero;
