import React from 'react';
import './App.css';
import NavBar from "../NavBar/NavBar";
import Hero from "../Hero/Hero";
import Intro from "../Intro/Intro";
import Offer from '../Offer/Offer';


function App() {
  return (
    <div className='wrapper'>
      <NavBar/>
      <Hero/>
      <Intro/>
      <Offer/>
    </div>
  );
}

export default App;
