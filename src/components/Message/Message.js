import React from 'react';
import Button from "../Button/Button";

const Message = () => {

  return (
    <div className='message__container'>
        <p className='message__info'>Wiadomość została wysłana!</p>
        <Button text='ok'className='btn--success'/>
    </div>
  );
}

export default Message;