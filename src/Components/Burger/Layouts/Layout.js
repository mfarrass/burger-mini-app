// CONTOH MEMBUAT DEFAULT LAYOUT NAVBAR
// nama file semula DefaultLayout 
// import React from 'react'

// // membuat props children
// // halaman ini bisa di isi navbar
// const DefaultLayout = (props) => {
//   return (
//     <div>
//     <h1>Default Layout Page</h1>
//     {props.children}
//     </div>
//   )
// }

// export default DefaultLayout

// ------------------------------------------------------------------------------------- //
// MEMBUAT OPSI NAVIGASI

import React from 'react'
import Navigation from './Navigation'
import MainContent from './MainContent'

const DefaultLayout = (props) => {
  return (
    <>
      <Navigation />
      <MainContent>
        {props.children}
      </MainContent>
   </>
  )
}

export default DefaultLayout
