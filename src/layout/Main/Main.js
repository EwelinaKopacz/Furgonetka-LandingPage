import React from 'react';
import Hero from "../../components/Hero/Hero";
import Intro from "../../components/Intro/Intro";
import Offer from '../../components/Offer/Offer';
import Features from '../../components/Features/Features';
import Brands from '../../components/Brands/Brands';
import Advert from '../../components/Advert/Adver';
import Form from "../../components/Form/Form";

const Main=()=> {
    return (
        <>
            <Hero/>
            <Intro
                header={<><span className='intro__header--italic'>Wybierz tanie i szybkie</span> przesyłki krajowe</>}
                text='Wyceniaj i wysyłaj tanie paczki krajowe bez podpisywania umowy i określania minimum logistycznego. U nas płacisz tylko za nadane przesyłki.
                Nie pobieramy abonamentu za prowadzenie konta czy korzystanie z dostępnych narzędzi.'
                className="intro__container--margin48"
            />
            <Offer/>
            <Features/>
            <Brands/>
            <Advert/>
            <Form/>
      </>
    )
}
export default Main;
