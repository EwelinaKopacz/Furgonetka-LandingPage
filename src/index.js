import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import "./css/styles.css";

const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

