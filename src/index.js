import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from 'routes.js';
import './index.css';
{/*import App from './App';*/}
{/*import reportWebVitals from './reportWebVitals';*/}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRoutes />
    {/*<App />*/} {/* Componente do React */}
    {/* <h1>
      Olá Mundo
    </h1> */}
  </React.StrictMode>
);

//reportWebVitals();
