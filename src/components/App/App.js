import React from 'react';
import './App.css';
import Header from '../../layout/Header/Header';
import Main from '../../layout/Main/Main';


function App() {
  return (
    <div className='wrapper flex__col--center1'>
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
