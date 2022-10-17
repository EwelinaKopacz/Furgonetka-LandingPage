import React from 'react';
// import { useState } from 'react';
import './Message.css';

const Message = () => {

  return (
    <div className='message__container'>
        <p className='message__info'>
            Wiadomość została wysłana!
        </p>
        <button type='submit'>OK</button>
    </div>
  );
}

export default Message;
