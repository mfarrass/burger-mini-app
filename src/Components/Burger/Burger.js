// yang akan ditampilkan kehalaman browser  

import React  from 'react'

import Bun from './Bun' // ./ = satu folder
import Patty from './Patty' // ./ = satu folder
import Lettuce from './Lettuce' // ./ = satu folder
import Cheese from './Cheese' // ./ = satu folder
import Tomato from './Tomato' // ./ = satu folder

import style from './burger.module.css'



const Burger = (props) => {

  //berbagai komponen html bisa dituliskan disini, konsepnya mirip seperti partials
  return ( 

    <div className={style.burger}>
        <Bun type="top" />
        {props.ingredients.map( (item, index) => {
          switch (item) {
            case 'patty':
              return <Patty key={index} />
            case 'lettuce':
              return <Lettuce key={index} />
            case 'bun':
              return <Bun type="insert" key={index} />
            case 'cheese':
              return <Cheese key={index}/>
            case 'tomato':
              return <Tomato key={index}/>
              default:
                return null;
          }
          })}
        <Bun />
      
    </div>
  
  )
}

export default Burger