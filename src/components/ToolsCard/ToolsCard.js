import React from 'react';
import './ToolsCard.css';

const ToolsCard = ({item}) => {
    const {photo, text} = item;
    return (
        <div className='tools__card flex__col--center2'>
            <div className='tools__photo'>
                <img src={photo} alt=''/>
            </div>
            <div className='tools__description flex__col--center1'>
                <p className='tools__text'>{text}</p>
            </div>
        </div>
    )
}

export default ToolsCard;