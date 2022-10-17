import React from 'react';
import './Advert.css';
import CTAPhoto from "../../assets/cta-photo.svg";
import Button from '../Button/Button';
import Title from '../Title/Title';

function Advert() {
  return (
    <section className='advert'>
        <div className='advert__container'>
            <div className='advert__left'>
                <img className='advert__photo' src={CTAPhoto} alt='kobieta pracujaca przy komputerze'></img>
            </div>

            <div className='advert__right'>
                <div className='advert__description'>
                    <Title header={<>Furgonetka – tu znajdziesz <span className='header__h2--italic'>najtańsze przesyłki krajowe</span></>}/>
                    <p className='advert__text'>Skorzystaj z bezpłatnego formularza i zamów wysyłkę swojej paczki w niskiej cenie. </p>
                </div>
                <div className='advert__btn'>
                    <Button 
                        text='nadaj przesyłkę'
                        className='cta__btn--secondary'
                        className2='cta__text--secondary'
                    />
                </div>
            </div>

        </div>
    </section>
  );
}

export default Advert;
