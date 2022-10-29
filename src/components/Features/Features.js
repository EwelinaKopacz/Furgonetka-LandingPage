import React from 'react';
import Intro from '../Intro/Intro';
import Tools from "../Tools/Tools";
import Delivery from '../Delivery/Delivery';


const Features = () => {
    return (
        <section className='features'>
            <Intro
                header={<>Narzędzia <span className='header__h2--italic'>do wysyłki</span></>}
                text='Na platformie Furgonetka.pl nie tylko nadasz tanie przesyłki kurierskie, ale także skorzystasz z bezpłatnych narzędzi,
                które pozwolą Ci pożegnać czasochłonne czynności. Wysyłkę ułatwią Ci m.in.:'
                className="intro__wrapper--spacer80"
                className2="intro--color"
            />
            <Tools/>
            <Intro
                header={<><span className='header__h2--italic'>Dogodny</span> czas dostawy</>}
                text='Jeśli zależy Ci na czasie, możesz przyspieszyć transport zleconej paczki. Z Furgonetką nadasz najszybsze przesyłki krajowe.
                Wystarczy, że dobierzesz odpowiednią usługę dodatkową w zależności od przewoźnika:'
                className="intro__wrapper--spacer80"
                className2="intro--color"
            />
            <Delivery/>
        </section>
    )
}

export default Features;