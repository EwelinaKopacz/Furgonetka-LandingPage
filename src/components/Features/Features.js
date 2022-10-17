import React from 'react';
import './Features.css';
import Intro from '../Intro/Intro';
import Tools from "../Tools/Tools";
import Delivery from '../Delivery/Delivery';


const Features = () => {
    return (
        <article className='features'>
            <Intro
                header='Narzędzia do wysyłki'
                text='Na platformie Furgonetka.pl nie tylko nadasz tanie przesyłki kurierskie, ale także skorzystasz z bezpłatnych narzędzi,
                które pozwolą Ci pożegnać czasochłonne czynności. Wysyłkę ułatwią Ci m.in.:'
                className="intro__container--margin80"
            />
            <Tools/>
            <Intro
                header='Dogodny czas dostawy'
                text='Jeśli zależy Ci na czasie, możesz przyspieszyć transport zleconej paczki. Z Furgonetką nadasz najszybsze przesyłki krajowe.
                Wystarczy, że dobierzesz odpowiednią usługę dodatkową w zależności od przewoźnika:'
                className="intro__container--margin80"
            />
            <Delivery/>
        </article>
    )
}

export default Features;