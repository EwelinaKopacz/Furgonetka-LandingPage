import React from 'react';
import './Offer.css';
import offerIconArray from '../../db/offerIcons';
import OfferCard from '../OfferCard/OfferCard';

const Offer= () => {
    const renderOfferCard =(array)=>{
        return array.map(item => <OfferCard item={item} key={item.id}/>)
    }
    return (
        <section className='offer'>
            <div className='offer__container'>
                <h2 className='offer__header'>Szeroki wybór <span className='offer__header--italic'>przesyłek krajowych</span></h2>
                <div className='offer__cards card'>
                    {renderOfferCard(offerIconArray)}
                </div>
            </div>
        </section>
    )
}

export default Offer;