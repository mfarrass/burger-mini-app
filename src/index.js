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

// susunannya dari index masuk ke app, ke app route nya default, ngerendernya ke home, masuk ke home, merender home menggunakan komponen layout berbentuk opening-closing. pada halaman layout mempunyai navigation yang dirender, kemudian ada MainContent yang mempunyai komponen yg isinya props childern yang isinya <Layout> </Layout>, pada Bagian MainContent di filenya S