import React from 'react';

const Inputs = (props) => {
    const {item, value, error, onChange} = props;
    const {name, type, label} = item;
    return (
        <>
            <div className='input__box'>
                <label className='input__label' htmlFor={name}>{label}: </label>
                <input className='input__field' type={type} id={name} name={name} value={value} onChange={onChange}/>
                <span className='input__error'>{error}</span>
            </div>
        </>
    );
};

export default Inputs;