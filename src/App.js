// App = bagian komponen
// opening dan closing tag disini diambil dari import <burger></burger>
// atau dengan single tag <burger/>
// routes = disini adalah jrx

// -------------------------------------------------------------------------------- //

// Folder Component disini mirip seperti Partials Challange-03
// Folder Burger disini mirip seperti User C 2q1hallange-03
// import dari folder component

import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import BurgerMaker from './Pages/BurgerMaker';

function App() {
  return (
    // Routes disini adalah jsx = representasi html dalam sebuah javascript
    // file javascript harus pakai {}
    // h1 dan Link contoh layout default ketika berpindah halaman

    <>
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/burger-maker" element={<BurgerMaker />} /> 
    </Routes>
    </>
  );
}
 
export default App;




