import React from 'react';
import offerIconArray from '../../db/offerIcons';
import OfferCard from '../OfferCard/OfferCard';
import Title from '../Title/Title';

const Offer= () => {
    const renderOfferCard =(array)=>{
        return array.map(item => <OfferCard item={item} key={item.id}/>)
    }
    return (
        <section className='offer'>
            <div className='offer__wrapper'>
                <div className='offer__container'>
                    <div className='offer__title'><Title header={<>Szeroki wybór <span className='header__h2--italic'>przesyłek krajowych</span></>}/></div>
                    <div className='offer__cards card'>
                        {renderOfferCard(offerIconArray)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Offer;