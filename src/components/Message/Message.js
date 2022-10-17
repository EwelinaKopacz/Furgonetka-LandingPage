import React from 'react';
import './Message.css';
import Button from '../Button/Button';

const Message = () => {
  return (
    <div className='message__container'>
        <p className='message__info'>
            Wiadomość została wysłana!
        </p>
        <Button
          text="OK"
          className='cta__btn--msg'
          className2='cta__text--msg'
        />
    </div>
  );
}

export default Message;
