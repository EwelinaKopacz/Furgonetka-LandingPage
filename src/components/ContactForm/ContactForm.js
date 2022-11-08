/* eslint-disable no-useless-escape */
import React from 'react';
import Inputs from "../Inputs/Inputs"
import Button from '../Button/Button';
import Message from '../Message/Message';
import inputsData from "../../db/inputsData.json";
import useForm from '../Hooks/useForm';

const ContactForm = ()=> {
    const {state, errors, handelChange, handleSubmit, showModal, handleModal} = useForm();

    return (
        <form className='form' noValidate onSubmit={handleSubmit}>
            {showModal ? <Message show={showModal} onClick={handleModal}/> : null}
            <div className='form__wrapper'>
                {inputsData.map(item =>
                    <Inputs
                        key={item.id}
                        item={item}
                        value={state[item.name]}
                        error={errors[item.name]}
                        onChange={handelChange}
                    />
                )}
                <div className='input__box'>
                    <label className='input__label' htmlFor='message'>Wiadomość (opcjonalnie): </label>
                    <textarea className='input__field' id='message'name='message' onChange={handelChange}/>
                </div>
            </div>
            <Button text='wyślij swój kontakt' className='btn--secondary' />
        </form>
    );
}

export default ContactForm;