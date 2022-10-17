import React from 'react';
import './Form.css';
import Intro from '../Intro/Intro';
import ContactForm from '../ContactForm/ContactForm';

function Form() {
  return (
    <section className='form'>
      <div className='form__wrapper'>
        <div className='form__container'>
          <Intro
            header={<>Zapytaj o <span className="intro__header--italic">ofertę indywidualną</span></>}
            text='Nadajesz dużo przesyłek kurierskich krajowych? Napisz do nas, a oddzwonimy, żeby porozmawiać o indywidualnej ofercie.'
          />
          <ContactForm/>
        </div>
      </div>
    </section>
  );
}

export default Form;
