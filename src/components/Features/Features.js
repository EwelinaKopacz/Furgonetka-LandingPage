import React from 'react';
import './Features.css';
import Intro from '../Intro/Intro';
import ToolsCard from '../ToolsCard/ToolsCard';
import Delivery from '../Delivery/Delivery';

import toolsPhoto1 from '../../assets/tools-photo1.svg';
import toolsPhoto2 from '../../assets/tools-photo2.svg';
import toolsPhoto3 from '../../assets/tools-photo3.svg';
import toolsPhoto4 from '../../assets/tools-photo4.svg';
import toolsPhoto5 from '../../assets/tools-photo5.svg';


const Features = () => {
    return (
        <>
            <Intro
                header='Narzędzia do wysyłki'
                text='Na platformie Furgonetka.pl nie tylko nadasz tanie przesyłki kurierskie, ale także skorzystasz z bezpłatnych narzędzi,
                które pozwolą Ci pożegnać czasochłonne czynności. Wysyłkę ułatwią Ci m.in.:'
            />
            <section className='features'>
                <div className='features__container tools'>
                    <ToolsCard photo={toolsPhoto1} text='Śledzenie przesyłek'/>
                    <ToolsCard photo={toolsPhoto2} text='Książka adresowa'/>
                    <ToolsCard photo={toolsPhoto3} text='Szablony przesyłek'/>
                </div>
                <div className='features__container tools'>
                    <ToolsCard photo={toolsPhoto4} text='Inne dane na etykiecie'/>
                    <ToolsCard photo={toolsPhoto5} text='Zamówienie paczki bez zlecania podjazdu kuriera'/>
                </div>

            </section>
            <Intro
                header='Dogodny czas dostawy'
                text='Jeśli zależy Ci na czasie, możesz przyspieszyć transport zleconej paczki. Z Furgonetką nadasz najszybsze przesyłki krajowe.
                Wystarczy, że dobierzesz odpowiednią usługę dodatkową w zależności od przewoźnika:'
            />
            <Delivery/>
        </>
    )
}

export default Features;