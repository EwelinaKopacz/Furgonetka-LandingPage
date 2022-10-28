import React from 'react';
import { couriesRow1Array, couriesRow2Array } from '../../db/couriersLogos';

const Logos = () => {
    const renderArray = (array)=>{
        return array.map(item => <img key={item.id} src={item.logo} alt={item.alt}/>)
    }
    return (
        <section className='logos'>
            <div className='logos__container'>
                <div className='logos__boxes'>
                    <div className='logos__box'>
                        {renderArray(couriesRow1Array)}
                    </div>
                    <div className='logos__box'>
                        {renderArray(couriesRow2Array)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Logos;