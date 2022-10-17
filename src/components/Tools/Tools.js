import React from 'react';
import './Tools.css';
import ToolsCard from '../ToolsCard/ToolsCard';

import toolsPhoto1 from '../../assets/tools-photo1.svg';
import toolsPhoto2 from '../../assets/tools-photo2.svg';
import toolsPhoto3 from '../../assets/tools-photo3.svg';
import toolsPhoto4 from '../../assets/tools-photo4.svg';
import toolsPhoto5 from '../../assets/tools-photo5.svg';

const Tools = () => {
    return (
        <section className='tools'>
            <div className='tools__container tools'>
                <ToolsCard photo={toolsPhoto1} text='Śledzenie przesyłek'/>
                <ToolsCard photo={toolsPhoto2} text='Książka adresowa'/>
                <ToolsCard photo={toolsPhoto3} text='Szablony przesyłek'/>
            </div>
            <div className='tools__container tools'>
                <ToolsCard photo={toolsPhoto4} text='Inne dane na etykiecie'/>
                <ToolsCard photo={toolsPhoto5} text='Zamówienie paczki bez zlecania podjazdu kuriera'/>
            </div>
         </section>
    )
}

export default Tools;