import React from 'react';

const ToolsCard = ({item}) => {
    const {photo, text, alt} = item;
    return (
        <div className='tools__card'>
            <div className='tools__photo'>
                <img src={photo} alt={alt}/>
            </div>
            <div className='tools__description'>
                <p className='tools__text'>{text}</p>
            </div>
        </div>
    )
}

export default ToolsCard;