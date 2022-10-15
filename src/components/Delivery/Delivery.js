import React from 'react';
import './Delivery.css';
import deliveryPhoto from '../../assets/delivery-photo.svg';


function Delivery() {
  return (
    <section className='delivery'>
        <div className='delivery__container'>
            <div className='delivery__photo'>
                <img src={deliveryPhoto} alt=''/>
            </div>
            <div className='delivery__list'>
                <ul className='delivery__items'>
                    <div className='delivery__box'>
                        <span className='delivery__icon'></span>
                        <li className='delivery__item'>
                            <p className='delivery__text'>Paczka w Weekend</p>
                        </li>
                    </div>
                    <div className='delivery__box'>
                        <span className='delivery__icon'></span>
                        <li className='delivery__item'>
                            <p className='delivery__text'>Doręczenie przesyłki w sobotę</p>
                        </li>
                    </div>
                    <div className='delivery__box'>
                        <span className='delivery__icon'></span>
                        <li className='delivery__item'>
                            <p className='delivery__text'>Doręczenie do danej godziny</p>
                        </li>
                    </div>
                    <div className='delivery__box'>
                        <span className='delivery__icon'></span>
                        <li className='delivery__item'>
                            <p className='delivery__text'>Doręczenie na drugi dzień</p>
                        </li>
                    </div>
                    <div className='delivery__box'>
                        <span className='delivery__icon'></span>
                        <li className='delivery__item'>
                            <p className='delivery__text'>Doręczenie we wskazany dzień</p>
                        </li>
                    </div>
                    <div className='delivery__box'>
                        <span className='delivery__icon'></span>
                        <li className='delivery__item'>
                            <p className='delivery__text'>Przesyłka ekspresowa</p>
                        </li>
                    </div>
                </ul>
            </div>
            </div>
    </section>
  );
}

export default Delivery;
