import React from 'react';
import { useState } from 'react';
import Button from "../Button/Button";
import './Message.css';

const Message = ({show}) => {
  const [showModal, setShowModal] = useState(show);
  console.log(showModal)

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <div className={showModal ? 'message__container flex__col--center2' : 'message__container--inactive'}>
        <p className='message__info'>
            Wiadomość została wysłana!
        </p>
        <Button
          text='ok'
          className='cta__btn--secondary'
          className2='cta__text--secondary'
          onClick={closeModal}
        />
    </div>
  );
}

export default Message;
