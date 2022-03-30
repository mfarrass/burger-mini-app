// ini adalah Entry Pointnya

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';


ReactDOM.render(
  // Bagian Rendering file App
  <React.StrictMode>
    <BrowserRouter>
    <App /> 
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root') // mencari dari dari folder public index.html
);
