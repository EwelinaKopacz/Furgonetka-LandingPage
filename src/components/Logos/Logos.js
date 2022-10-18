import React from 'react';
import './Logos.css';
import { couriesRow1Array, couriesRow2Array } from '../../db/couriersLogos';


const Logos = () => {
    const renderArray = (array)=>{
        return array.map(item => <img key={item.id} src={item.logo} alt={item.alt}/>)
    }
    return (
        <section className='logos'>
            <div className='logos__container flex__row--center2 '>
                <div className='logos__boxes flex__col--center2'>
                    <div className='logos__box flex__row--center2 '>
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