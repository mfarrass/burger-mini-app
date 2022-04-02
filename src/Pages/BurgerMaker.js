import React, { useState } from 'react'
import Burger from '../Components/Burger/Burger' // naik satu folder
import Controller from '../Components/Burger/Controller'

import style from './burgerMaker.module.css'

const BurgerMaker = () => {

  // Menginisiasi state 'ingredients' & setter 'setIngredients'
  const [ingredients,setIngredients] = useState([])

  // Handler untuk menambahkan ingredients
  const addIngredientsHandler = (ingredient) => {
    // Menjalankan setter 'setIngredients' dengan callback function
    setIngredients( prevState => {
      // Menduplikasi state 'ingredients' lama dan menambahkan ingredient baru pada idnex 0
      const newState = [ingredient, ...prevState]
      // Me-return data untuk state 'ingredients'
      return newState
    })
  }

  // Handler untuk menambahkan ingredient
  const removeIngredientsHandler = (index) => {
    // Menjalankan setter 'setIngredients' dengan callback function
    setIngredients( prevState => {
      // Menduplikasi state 'ingredients' lama
      const newState = [...prevState]
      // Menghapus ingredients pada state 'ingredients' berdasarkan indexnya
      newState.splice( index, 1)
      // Me-retrun data baru untuk state 'ingredients
      return newState
    })
  }

  // Handler untuk menggeser ingredients ke atas 1 tingkat 
  const moveUpIngredientsHandler = (index) => {

    setIngredients( prevState => {
      // Menjalankan setter 'setingredients' dengan callback function
      const newState = [...prevState]
      // Menduplikasi state 'ingredients' lama
      const temp = newState[index-1]
      // Meng-assign ingredients yang akan digeser ke index setelah index saat ini
      newState[index-1] = newState[index]
      // Meng-assign variable 'temp' ke index saat ini
      newState[index] = temp
      // Mereturn state baru
      return newState
    })
  }


  // Handler untuk menggeser ingredients ke bawah 1 tingkat 
  const moveDownIngredientsHandler = (index) => {
    // Menjalankan setter 'setIngredients' dengan callback function
    setIngredients( prevState => {
      // Menduplikasi state 'ingredients' lama
      const newState = [...prevState]
      // Menduplikasi item pada index sebelum index ingredients yang akan digeser ke bawah dan disimpan di variabel 'temp'
      const temp = newState[index+1]
      // Meng-assign ingredient yang akan digeser ke index setelah index saat ini
      newState[index-1] = newState[index]
      // Meng-assign variabel 'temp' ke index saat ini
      newState[index] = temp
      // Mereturn state baru
      return newState
    })
  }



  // Render DOM
  return (
    <div className={style.burgermaker_container}>
        <div className={style.controller}>
            <Controller ingredients={ingredients} addIngredientsHandler={addIngredientsHandler} removeIngredientsHandler={removeIngredientsHandler} moveDownIngredientsHandler={moveDownIngredientsHandler} moveUpIngredientsHandler={moveUpIngredientsHandler} />
        </div>
        <div className={style.burger_display}>
           <Burger ingredients={ingredients} />
        </div>
    </div>

  )
}

export default BurgerMaker