import React from 'react';
import ToolsCard from '../ToolsCard/ToolsCard';
import { toolsIconArray1, toolsIconArray2 } from '../../db/toolsIcons';

const Tools = () => {
    const renderToolsCard =(array)=>{
        return array.map(item => <ToolsCard item={item} key={item.id}/>)
    }
    return (
        <section className='tools'>
            <div className='tools__wrapper'>
                <div className='tools__container'>
                    {renderToolsCard(toolsIconArray1)}
                </div>
                <div className='tools__container'>
                    {renderToolsCard(toolsIconArray2)}
                </div>
            </div>
         </section>
    )
}

export default Tools;