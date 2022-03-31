// yang akan ditampilkan kehalaman browser  

import React, { useState } from 'react'

import Bun from './Bun' // ./ = satu folder
import Patty from './Patty' // ./ = satu folder
import Lettuce from './Lettuce' // ./ = satu folder
import Cheese from './Cheese' // ./ = satu folder
import Tomato from './Tomato' // ./ = satu folder



const Burger = () => {

  const [ingredients,setIngredients] = useState([])

  // nenbandingkan 2 memori dengan sprate operator
  const addIngredientsHandler = (ingredients) => {
    setIngredients( prevState => {

      // [...] sprate operator = cara mencopy array/object
      // ingredients = isi array yang lama
      // , ...prevState = ditambah array yang baru
      const newIngredients = [ingredients,...prevState]
      console.log(newIngredients);
      
      // menambahkan data baru
      return newIngredients

    })
  }
 

//berbagai komponen html bisa dituliskan disini, konsepnya mirip seperti partials
  return ( 

    <>
        <Bun type="top" />
        {ingredients.map( (item, index) => {
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
        {/* button = sebagai triger tanpa event listener */}
        <button onClick={() => addIngredientsHandler('patty')} >Add Patty</button>
        <button onClick={() => addIngredientsHandler('lettuce')} >Add Lettuce</button>
        <button onClick={() => addIngredientsHandler('bun')} >Add Bun</button>
        <button onClick={() => addIngredientsHandler('cheese')} >Add Cheese</button>
        <button onClick={() => addIngredientsHandler('tomato')} >Add Tomato</button>
    </>
  
  )
}

export default Burger