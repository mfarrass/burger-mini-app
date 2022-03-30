// yang akan ditampilkan kehalaman browser  

import React from 'react'

import Bun from './Bun' // ./ = satu folder
import Patty from './Patty' // ./ = satu folder
import Lettuce from './Lettuce' // ./ = satu folder
import Cheese from './Cheese' // ./ = satu folder
import Tomato from './Tomato' // ./ = satu folder



const Burger = () => {
//berbagai komponen html bisa dituliskan disini, konsepnya mirip seperti partials
  return ( 
    // Pemangilan import disini harus dibungkus (<></> = React Fragment) agar tidak error, karna pemanggilan hanya boleh 1.
    // Berikut komponen komponen dari halaman burger dari file masing2.
    
    <>
        <Bun />
        <Patty />
        <Lettuce />
        <Cheese />
        <Tomato />
        <Bun />
    </>
  
  )
}

export default Burger