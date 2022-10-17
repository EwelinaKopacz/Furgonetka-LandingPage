import React from 'react';
import './OfferCard.css';

const OfferCard= ({item}) => {
    const {header, text, photo} = item;
    return (
        <div className='card__container'>
            <div className='card__description'>
                <h3 className='card__header'>{header}</h3>
                <p className='card__text'>{text}</p>
            </div>
            <div className='card__photo'>
                <img src={photo} alt='' />
            </div>

        </div>
    )
}

export default OfferCard;