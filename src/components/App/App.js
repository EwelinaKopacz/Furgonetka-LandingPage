import React from 'react';
import './App.css';
import NavBar from "../NavBar/NavBar";
import Hero from "../Hero/Hero";
import Intro from "../Intro/Intro";
import Offer from '../Offer/Offer';
import Features from '../Features/Features';


function App() {
  return (
    <div className='wrapper'>
      <NavBar/>
      <Hero/>
      <Intro header='Wybierz tanie i szybkie przesyłki krajowe' text='Wyceniaj i wysyłaj tanie paczki krajowe bez podpisywania umowy i określania minimum logistycznego. U nas płacisz tylko za nadane przesyłki. Nie pobieramy abonamentu za prowadzenie konta czy korzystanie z dostępnych narzędzi.'/>
      <Offer/>
      <Features/>
    </div>
  );
}

export default App;
