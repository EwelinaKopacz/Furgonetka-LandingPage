/* eslint-disable no-useless-escape */
import React from 'react';
import Button from '../Button/Button';
import Message from '../Message/Message';
import './ContactForm.css';

const initState = {
        phone:'',
        firstName:'',
        lastName:'',
        email:'',
        message:'',
        phoneError:'',
        firstNameError:'',
        lastNameError:'',
        emailError:'',
        isValid:false,
}

class ContactForm extends React.Component {
    state = initState;

    inputHandler = e =>{
        const targetName = e.target.name
        const targetValue = e.target.value
        this.setState({
            [targetName]:targetValue
        });
    }

    submitHandler = e => {
        e.preventDefault();
        const isValid = this.checkValid();
        if(isValid){
            this.cleanInputs();
        }
        return false
    }

    checkValid = () =>{
        let phoneError = '';
        let firstNameError = '';
        let lastNameError = '';
        let emailError = '';

        if(!this.checkPhone()){
            phoneError = 'Błędny numer telefonu, min 9 max 15 znaków'
        }
        if(!this.checkFirstName()){
            firstNameError = 'Imię musi składać się min. z 2 znaków'
        }
        if(!this.checkLastName()){
            lastNameError = 'Nazwisko musi składać się min. z 2 znaków'
        }

        if(!this.checkEmail() || !this.state.email){
            emailError = 'Podaj poprawny adres E-mail'
        }

        if(phoneError || firstNameError || lastNameError || emailError ){
            this.setState({phoneError, firstNameError,lastNameError,emailError})
            return false
        }
        this.setState({isValid:true})
    }

    checkPhone = ()=>{
        const{phone} = this.state;
        const regExp = /^[0-9]{9,15}$/;
        if(phone.match(regExp)){
            return true;
        }
        return false;
    }

    checkName = (name) => {
        const regExp = /^[a-zA-Z]{2,30}/;
        if(name.match(regExp)) {
            return true
        }
        return false
    }

    checkFirstName = () => {
        const{firstName} = this.state;
        return this.checkName(firstName);
    }

    checkLastName = () => {
        const{lastName} = this.state;
        return this.checkName(lastName);
    }

    checkEmail = () => {
        const{email} = this.state;
        const regExp = /^[-\w\.]+@([-\w]+\.)+[a-z]+$/i;
        if(email.match(regExp)){
            return true
        }
        return false
    }

    cleanInputs = () => {
        this.setState(initState)
    }

    render(){
        const {phone,firstName,lastName,email,message, phoneError, firstNameError,lastNameError,emailError, isValid} = this.state;
        return (
            <form className='form__main input' noValidate onSubmit={this.submitHandler}>
                {isValid ? <Message/> : null}
                <div className='input__wrapper'>
                    <div className='input__box'>
                        <label className='input__label' htmlFor='phone'>Twój numer telefonu: </label>
                        <input className='input__field' type='tel' id='phone' name='phone' value={phone} onChange={this.inputHandler}/>
                        <span className='input__error'>{phoneError}</span>
                    </div>
                    <div className='input__box'>
                        <label className='input__label' htmlFor='firstName'>Twoje imię: </label>
                        <input className='input__field' type='text' id='firstName' name='firstName' value={firstName} onChange={this.inputHandler}/>
                        <span className='input__error'>{firstNameError}</span>
                    </div>
                    <div className='input__box'>
                        <label className='input__label' htmlFor='lastName'>Twoje nazwisko / Nazwa firmy: </label>
                        <input className='input__field' type='text' id='lastName' name='lastName' value={lastName} onChange={this.inputHandler}/>
                        <span className='input__error'>{lastNameError}</span>
                    </div>
                    <div className='input__box'>
                        <label className='input__label' htmlFor='email'>Adres email: </label>
                        <input className='input__field' type='email' id='email' name='email' value={email} onChange={this.inputHandler}/>
                        <span className='input__error'>{emailError}</span>
                    </div>
                    <div className='input__box'>
                        <label className='input__label' htmlFor='message'>Wiadomość (opcjonalnie): </label>
                        <textarea className='input__field' id='message'name='message' value={message} onChange={this.inputHandler}/>
                    </div>
                </div>
                <Button
                    text='wyślij swój kontakt'
                    className='cta__btn--secondary'
                    className2='cta__text--secondary'
                />
            </form>
        );
    }
}

export default ContactForm;