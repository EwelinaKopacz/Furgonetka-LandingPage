import React from 'react';
import deliveryPhoto from '../../assets/delivery-photo.svg';

const Delivery = () => {
  return (
    <section className='delivery'>
        <div className='delivery__wrapper'>
            <div className='delivery__container'>
                <div className='delivery__photo'>
                    <img src={deliveryPhoto} alt='kobieta z otwartą przesyłką'/>
                </div>
                <div className='delivery__list'>
                    <ul className='delivery__items'>
                        <li className='delivery__box'>
                            <span className='delivery__icon'></span>
                            <div className='delivery__item'>
                                <p className='delivery__text'>Paczka w Weekend</p>
                            </div>

                            <div className='delivery__label'>
                                <span className='delivery__name delivery__name--inpost'>InPost</span>
                            </div>

                        </li>
                        <li className='delivery__box'>
                            <span className='delivery__icon'></span>
                            <div className='delivery__item'>
                                <p className='delivery__text'>Doręczenie przesyłki w sobotę</p>
                            </div>
                            <div className='delivery__label'>
                                <span className='delivery__name delivery__name--dhl'>DHL</span>
                                <span className='delivery__name delivery__name--inpost'>InPost</span>
                                <span className='delivery__name delivery__name--dpd'>DPD</span>
                            </div>
                        </li>
                        <li className='delivery__box'>
                            <span className='delivery__icon'></span>
                            <div className='delivery__item'>
                                <p className='delivery__text'>Doręczenie do danej godziny</p>
                            </div>
                            <div className='delivery__label'>
                                <span className='delivery__name delivery__name--dpd'>DPD</span>
                            </div>
                        </li>
                        <li className='delivery__box'>
                            <span className='delivery__icon'></span>
                            <div className='delivery__item'>
                                <p className='delivery__text'>Doręczenie na drugi dzień</p>
                            </div>
                            <div className='delivery__label'>
                                <span className='delivery__name delivery__name--dpd'>DPD</span>
                            </div>
                        </li>
                        <li className='delivery__box'>
                            <span className='delivery__icon'></span>
                            <div className='delivery__item'>
                                <p className='delivery__text'>Doręczenie we wskazany dzień</p>
                            </div>
                            <div className='delivery__label'>
                                <span className='delivery__name delivery__name--pocztex'>Pocztex</span>
                            </div>
                        </li>
                        <li className='delivery__box'>
                            <span className='delivery__icon'></span>
                            <div className='delivery__item'>
                                <p className='delivery__text'>Przesyłka ekspresowa</p>
                            </div>
                            <div className='delivery__label'>
                                <span className='delivery__name delivery__name--deligoo'>DeliGoo</span>
                                <span className='delivery__name delivery__name--xpressdelivery'>Xpress Delivery</span>
                            </div>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
    </section>
  );
}

export default Delivery;
