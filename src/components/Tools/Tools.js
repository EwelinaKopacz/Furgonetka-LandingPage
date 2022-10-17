import React from 'react';
import './Tools.css';
import ToolsCard from '../ToolsCard/ToolsCard';
import { toolsIconArray1, toolsIconArray2 } from '../../db/toolsIcons';

const Tools = () => {
    const renderToolsCard =(array)=>{
        return array.map(item => <ToolsCard item={item} key={item.id}/>)
    }
    return (
        <section className='tools'>
            <div className='tools__container tools'>
                {renderToolsCard(toolsIconArray1)}
            </div>
            <div className='tools__container tools'>
                {renderToolsCard(toolsIconArray2)}
            </div>
         </section>
    )
}

export default Tools;