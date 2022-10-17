import React from 'react';
import './App.css';
import NavBar from "../NavBar/NavBar";
import Hero from "../Hero/Hero";
import Intro from "../Intro/Intro";
import Offer from '../Offer/Offer';
import Features from '../Features/Features';
import Brands from '../Brands/Brands';
import Advert from '../Advert/Adver';
import Form from "../Form/Form";


function App() {
  return (
    <div className='wrapper'>
      <NavBar/>
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
    </div>
  );
}

export default App;
