import React from 'react';
import Header from '../../layout/Header/Header';
import Main from '../../layout/Main/Main';
import '../../less/main.less';

function App() {
  return (
    <section className='wrapper'>
      <Header/>
      <Main/>
    </section>
  );
}

export default App;
