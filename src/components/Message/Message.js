import React from 'react';
// import { useState } from 'react';
import Button from "../Button/Button";
import './Message.css';

const Message = () => {

  return (
    <div className='message__container flex__col--center2'>
        <p className='message__info'>
            Wiadomość została wysłana!
        </p>
        <Button
          text='ok'
          className='cta__btn--secondary'
          className2='cta__text--secondary'
        />
    </div>
  );
}

export default Message;
