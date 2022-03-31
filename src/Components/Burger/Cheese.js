// yang akan ditampilkan kehalaman browser  
// MENGGUNAKAN CSS MODULE
// untuk layout css akan diambil dari burger.module.css 
// .Bun adalah satu property yang diambil

import React from 'react'
import style from './burger.module.css'

const Chesse = () => {
  return ( //berbagai komponen html bisa dituliskan disini, konsepnya mirip seperti partials
    <div className={style.cheese}></div> 
  )
}

export default Chesse