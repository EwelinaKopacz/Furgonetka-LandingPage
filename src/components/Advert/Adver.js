import React from 'react';
import './Advert.css';
import CTAPhoto from "../../assets/cta-photo.svg";
import Button from '../Button/Button';

function Advert() {
  return (
    <section className='advert'>
        <div className='advert__container'>
            <div className='advert__left'>
                <img className='advert__photo' src={CTAPhoto} alt='kobieta pracujaca przy komputerze'></img>
            </div>

            <div className='advert__right'>
                <div className='advert__description'>
                    <h2 className='advert__header'>Furgonetka – tu znajdziesz najtańsze przesyłki krajowe</h2>
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
