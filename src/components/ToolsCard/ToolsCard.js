import React from 'react';
import './ToolsCard.css';

const ToolsCard = ({item}) => {
    const {photo, text} = item;
    return (
        <div className='tools__card'>
            <div className='tools__photo'>
                <img src={photo} alt=''/>
            </div>
            <div className='tools__description'>
                <p className='tools__text'>{text}</p>
            </div>
        </div>
    )
}

export default ToolsCard;