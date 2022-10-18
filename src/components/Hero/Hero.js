import React from 'react';
import './Hero.css';
import Button from '../Button/Button';

const Hero = () => {
  return (
    <section className='hero'>
        <div className='hero__left box flex__col--center1'>
            <div className='box__container flex__col--start1'>
                <div className='box__description flex__col--start1'>
                    <div className='box__head flex__col--start1'>
                        <span className='head__text'>FURGONETKA</span>
                        <h1 className='head__h1'>Przesyłki krajowe <span className='head__special'>z Furgonetką</span></h1>
                        <span className='head__img'></span>
                    </div>
                    <div className='box__info'>
                        <p className='box__text'>Nadawaj przesyłki krajowe o różnych gabarytach ze sprawdzonymi przewoźnikami – z dostawą pod drzwi, do punktów odbioru i automatów paczkowych. </p>
                    </div>
                 </div>
                <Button
                    text='nadaj przesyłkę'
                    className='cta__btn--primary'
                    className2='cta__text--primary'
                    />
            </div>
        </div>
        <div className='hero__right box'></div>

    </section>
  );
}

export default Hero;
