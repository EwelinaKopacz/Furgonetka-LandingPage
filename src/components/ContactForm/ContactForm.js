import React from 'react';
import Button from '../Button/Button';
import './ContactForm.css';

function ContactForm() {
  return (
    <form className='form__main input'>
        <div className='input__wrapper'>
            <div className='input__box'>
                <label className='input__label'>Twój numer telefonu: </label>
                <input className='input__field'/>
            </div>
            <div className='input__box'>
                <label className='input__label'>Twoje imię: </label>
                <input className='input__field'/>
            </div>
            <div className='input__box'>
                <label className='input__label'>Twoje nazwiko / Nazwa firmy: </label>
                <input className='input__field'/>
            </div>
            <div className='input__box'>
                <label className='input__label'>Adres email: </label>
                <input className='input__field'/>
            </div>
            <div className='input__box'>
                <label className='input__label'>Wiadomość (opcjonalnie): </label>
                <input className='input__field'/>
            </div>
        </div>
        <Button
            text='wylij swój kontakt'
            className='cta__btn--secondary'
            className2='cta__text--secondary'
        />
    </form>
  );
}

export default ContactForm;