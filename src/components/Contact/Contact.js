import React from 'react';
import Title from '../Title/Title';
import ContactForm from '../ContactForm/ContactForm';

function Contact() {
  return (
    <section className='contact'>
      <div className='contact__wrapper'>
        <div className='contact__container'>
            <div  className='contact__description'>
              <Title header={<>Zapytaj o <span className="header__h2--italic">ofertę indywidualną</span></>}/>
              <p className='contact__text'>Nadajesz dużo przesyłek kurierskich krajowych? Napisz do nas, a oddzwonimy, żeby porozmawiać o indywidualnej ofercie.</p>
            </div>
            <ContactForm/>
        </div>
      </div>
    </section>
  );
}

export default Contact;
