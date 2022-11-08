import React from 'react';
import Button from "../Button/Button";

const Message = ({show, onClick}) => {

  return (
    <>
      {show && (
        <div className='message__container'>
          <p className='message__info'>Wiadomość została wysłana!</p>
          <Button text='ok' className='btn--success' onClick={onClick}/>
        </div>
      )}
    </>
  );
}

export default Message;