import React from 'react';
import './ToolsCard.css';

const ToolsCard = (props) => {
    const {photo, text} = props;
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