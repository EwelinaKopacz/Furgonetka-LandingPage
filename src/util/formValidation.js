const formValidation = (state) => {
    let errors = {};

    if(!state.phone){
        errors.phone = "Numer telefonu jest wymagany"
    } else if(!/^[0-9]{9,15}$/.test(state.phone)){
            errors.phone = "Numer telefonu zawiera błędy"
    }

    if(!state.firstName){
        errors.firstName = "Imię jest wymagane, min. 2 znaki"
    } else if(!/^[a-zA-Z]{2,30}/.test(state.firstName)){
        errors.firstName = "Imię jzawiera błędy"
    }

    if(!state.lastName){
        errors.lastName = "Nazwisko jest wymagane, min. 2 znaki"
    } else if(!/^[a-zA-Z]{2,30}/.test(state.lastName)){
        errors.lastName = "Nazwisko zawiera błędy"
    }

    if(!state.email){
        errors.email = "Adres Email jest wymagany"
    } else if(!/\S+@\S+.\S+/.test(state.email)){
        errors.email = "Adres Email zawiera błędy"
    }

    return errors;

};

export default formValidation;