import React from 'react';
import './Delivery.css';
import deliveryPhoto from '../../assets/delivery-photo.svg';


function Delivery() {
  return (
    <section className='delivery'>
        <div className='delivery__container flex__row--center1'>
            <div className='delivery__photo'>
                <img src={deliveryPhoto} alt=''/>
            </div>
            <div className='delivery__list flex__col--start1'>
                <ul className='delivery__items flex__col--start1'>
                    <div className='delivery__box'>
                        <span className='delivery__icon'></span>
                        <li className='delivery__item'>
                            <p className='delivery__text'>Paczka w Weekend</p>
                        </li>
                        <p className='delivery__label'><span className='delivery__name delivery__label--inpost'>InPost</span></p>
                    </div>
                    <div className='delivery__box'>
                        <span className='delivery__icon'></span>
                        <li className='delivery__item'>
                            <p className='delivery__text'>Doręczenie przesyłki w sobotę</p>
                        </li>
                        <span className='delivery__label'><span className='delivery__name delivery__label--dhl'>DHL</span><span className='delivery__name delivery__label--inpost'>InPost</span><span className='delivery__name delivery__label--dpd'>DPD</span></span>
                    </div>
                    <div className='delivery__box'>
                        <span className='delivery__icon'></span>
                        <li className='delivery__item'>
                            <p className='delivery__text'>Doręczenie do danej godziny</p>
                        </li>
                        <p className='delivery__label'><span className='delivery__name delivery__label--dpd'>DPD</span></p>
                    </div>
                    <div className='delivery__box'>
                        <span className='delivery__icon'></span>
                        <li className='delivery__item'>
                            <p className='delivery__text'>Doręczenie na drugi dzień</p>
                        </li>
                        <p className='delivery__label'><span className='delivery__name delivery__label--dpd'>DPD</span></p>
                    </div>
                    <div className='delivery__box'>
                        <span className='delivery__icon'></span>
                        <li className='delivery__item'>
                            <p className='delivery__text'>Doręczenie we wskazany dzień</p>
                        </li>
                        <p className='delivery__label'><span className='delivery__name delivery__label--pocztex'>Pocztex</span></p>
                    </div>
                    <div className='delivery__box'>
                        <span className='delivery__icon'></span>
                        <li className='delivery__item'>
                            <p className='delivery__text'>Przesyłka ekspresowa</p>
                        </li>
                        <p className='delivery__label'><span className='delivery__name delivery__label--deligoo'>DeliGoo</span><span className='delivery__name delivery__label--xpressdelivery'>Xpress Delivery</span></p>
                    </div>
                </ul>
            </div>
            </div>
    </section>
  );
}

export default Delivery;
