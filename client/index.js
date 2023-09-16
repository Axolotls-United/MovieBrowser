import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { store } from './stores.js';
import App from './App.jsx';
// import { CookiesProvider } from 'react-cookie';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'tailwindcss/tailwind.css';



const root = createRoot(document.getElementById('app'));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

