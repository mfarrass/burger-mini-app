// // INI ADALAH DOM NYA
// CONTOH SETTING DEFAULT LAYOUT NAVBAR

// import React from 'react'

// import DefaultLayout from '../Components/Burger/Layouts/DefaultLayout'


// const Home = () => {

//   return (
//     // defaultlayout bisa dibikin navbar, yang dibuat di DefaultLayout.js
//     <DefaultLayout>
//     <div>Welcome to Burger Maker</div>
//     <div>It is Delicious</div>
//     </DefaultLayout>
//   )
// }

// export default Home


// ------------------------------------------------------------------------------------- //
// MEMBUAT SETTING OPSI NAVIGASI
// INI ADALAH DOM NYA

import React from 'react'

import style from './home.module.css'
import Layout from '../Components/Burger/Layouts/Layout'



// home_container = property didalam css home.module.css

const Home = () => {

  return (
    <>
    <Layout>
        <div className={style.home_container}>
          <h1>Welcome to Burger Maker</h1></div>
          </Layout>
          </>
  )
}

export default Home