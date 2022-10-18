import React from 'react';
import './Offer.css';
import offerIconArray from '../../db/offerIcons';
import OfferCard from '../OfferCard/OfferCard';
import Title from '../Title/Title';

const Offer= () => {
    const renderOfferCard =(array)=>{
        return array.map(item => <OfferCard item={item} key={item.id}/>)
    }
    return (
        <section className='offer flex__col--center2'>
            <div className='offer__container'>
                <Title header={<>Szeroki wybór <span className='header__h2--italic'>przesyłek krajowych</span></>}/>
                <div className='offer__cards card'>
                    {renderOfferCard(offerIconArray)}
                </div>
            </div>
        </section>
    )
}

export default Offer;