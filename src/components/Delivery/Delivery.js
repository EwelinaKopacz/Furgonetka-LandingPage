import React from 'react';
import './Delivery.css';
import deliveryPhoto from '../../assets/delivery-photo.svg';


function Delivery() {
  return (
    <section className='delivery'>
        <div className='delivery__container'>
            <div className='delivery__photo'>
                <img src={deliveryPhoto} alt='kobieta z otwartą przesyłką'/>
            </div>
            <div className='delivery__list'>
                <ul className='delivery__items flex__col--start1'>
                    <div className='delivery__box'>
                        <span className='delivery__icon'></span>
                        <li className='delivery__item'>
                            <p className='delivery__text'>Paczka w Weekend</p>
                        </li>

                        <div className='delivery__label'>
                            <span className='delivery__name delivery__name--inpost'>InPost</span>
                        </div>

                    </div>
                    <div className='delivery__box'>
                        <span className='delivery__icon'></span>
                        <li className='delivery__item'>
                            <p className='delivery__text'>Doręczenie przesyłki w sobotę</p>
                        </li>
                        <div className='delivery__label'>
                            <span className='delivery__name delivery__name--dhl'>DHL</span>
                            <span className='delivery__name delivery__name--inpost'>InPost</span>
                            <span className='delivery__name delivery__name--dpd'>DPD</span>
                        </div>
                    </div>
                    <div className='delivery__box'>
                        <span className='delivery__icon'></span>
                        <li className='delivery__item'>
                            <p className='delivery__text'>Doręczenie do danej godziny</p>
                        </li>
                        <div className='delivery__label'>
                            <span className='delivery__name delivery__name--dpd'>DPD</span>
                        </div>
                    </div>
                    <div className='delivery__box'>
                        <span className='delivery__icon'></span>
                        <li className='delivery__item'>
                            <p className='delivery__text'>Doręczenie na drugi dzień</p>
                        </li>
                        <div className='delivery__label'>
                            <span className='delivery__name delivery__name--dpd'>DPD</span>
                        </div>
                    </div>
                    <div className='delivery__box'>
                        <span className='delivery__icon'></span>
                        <li className='delivery__item'>
                            <p className='delivery__text'>Doręczenie we wskazany dzień</p>
                        </li>
                        <div className='delivery__label'>
                            <span className='delivery__name delivery__name--pocztex'>Pocztex</span>
                        </div>
                    </div>
                    <div className='delivery__box'>
                        <span className='delivery__icon'></span>
                        <li className='delivery__item'>
                            <p className='delivery__text'>Przesyłka ekspresowa</p>
                        </li>
                        <div className='delivery__label'>
                            <span className='delivery__name delivery__name--deligoo'>DeliGoo</span>
                            <span className='delivery__name delivery__name--xpressdelivery'>Xpress Delivery</span>
                        </div>
                    </div>
                </ul>
            </div>
            </div>
    </section>
  );
}

export default Delivery;
