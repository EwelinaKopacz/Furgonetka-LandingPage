import React from 'react';
import Intro from '../Intro/Intro';
import Logos from '../Logos/Logos';
import './Brands.css';

const Brands = () => {
    return (
        <section className='brands flex__col--center2'>
            <Intro
                header={<>Przesyłki krajowe <span className="header__h2--italic">– DHL, FedEx, DPD, InPost i inni</span></>}
                text='Za pośrednictwem Furgonetki nadasz przesyłki krajowe z DHL, FedEx, DPD, InPost, UPS, GLS, Pocztex,
                ORLEN Paczka, Ambro Express, DeliGoo, Xpress Delivery i PallEx. Porównuj oferty najtańszych kurierów krajowych i wybierz usługę, którą potrzebujesz.'
                className=''
                className2='intro--bg'
            />
            <Logos/>
        </section>
    )
}

export default Brands;