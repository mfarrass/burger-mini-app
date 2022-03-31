import React from 'react'

import AddButton from './AddButton.js' 
import style from './controller.module.css'

const Controller = (props) => {
    // wrap pake <></> fragment biar gak error ketika mempunyai dua style.ingredients
  return (
    <>
    <div className={style.ingredients_selector}>
        <h5>Add Ingredients</h5>
            <div>
                <AddButton label="Patty" clickHandler={() => props.addIngredientsHandler('patty')} />
                <AddButton label="Lettuce" clickHandler={() => props.addIngredientsHandler('lettuce')} />
                <AddButton label="Tomato" clickHandler={() => props.addIngredientsHandler('tomato')} />
                <AddButton label="Cheese" clickHandler={() => props.addIngredientsHandler('cheese')} />
                <AddButton label="Bun" clickHandler={() => props.addIngredientsHandler('bun')} />
            </div>
        </div>
    <div className={style.ingredients_map}>
        {props.ingredients.map( (item, index) =>{
            return (
                <div key= { index }>{item}</div>
            )
        } )}
    </div>
    </>
  )
}

export default Controller