import React from 'react';
import './App.css';
import NavBar from "../NavBar/NavBar";
import Hero from "../Hero/Hero";
import Intro from "../Intro/Intro";


function App() {
  return (
    <div className='wrapper'>
      <NavBar/>
      <Hero/>
      <Intro/>
    </div>
  );
}

export default App;
