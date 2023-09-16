import React from 'react';
// import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { CookiesProvider } from 'react-cookie';
// import { store } from './stores';
import App from './App.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';


import { createRoot } from 'react-dom/client';



const root = createRoot(document.getElementById('app'));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

