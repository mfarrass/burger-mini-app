// yang akan ditampilkan kehalaman browser  
// MENGGUNAKAN CSS MODULE
// untuk layout css akan diambil dari burger.module.css 
// .Bun adalah satu property yang diambil
// link dokumentasi npm styled-components : https://www.npmjs.com/package/styled-components
// 

import React from 'react'
import style from './burger.module.css'

const Bun = (props) => {

  let bunClass;

  // switch case disini berfungsi sebagai pengecekan masing masing props typenya dan menghasilkan outuptnya masing masing sesuai dengan style pemaggilannya
  // memasukan data kedalam sebuah komponen, mengunakan pengkondisian class

  switch (props.type) {
    case 'top':
      bunClass = style.bun_top
      break
    case 'insert':
      bunClass = style.bun_insert
      break
    default:
      bunClass = ''
  }

  return ( // berbagai komponen html bisa dituliskan disini, konsepnya mirip seperti partials
    <div className={ `${style.bun} ${bunClass}` }></div> 
    // penamaan tag disini diambil dari variabel styled.button diatas
  )
}

export default Bun