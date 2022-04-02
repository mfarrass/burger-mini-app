import React from 'react'

import AddButton from './AddButton.js' 
import style from './controller.module.css'
import MapItem from './MapItem.js'

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
        {/* Loop untuk membuat list 'ingredient' sesuai dengan urutan pada array */}
        {props.ingredients.map( (item, index) => {
            return (
                <>
                {/* Me-render Mapitem untuk setiap item dari 'ingredients */}
                <MapItem
                label={item}
                key={index}
                removeHandler={() => props.removeIngredientsHandler(index)}
                upHandler={() => props.moveUpIngredientsHandler(index)}
                downHandler={() => props.moveDownIngredientsHandler(index)}
                firstItem={ index === 0 }
                lastItem={index === props.ingredients.length - 1} />

                </>

            )
        } )}
    </div>
</>
    )
}

export default Controller