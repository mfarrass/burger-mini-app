import React from 'react'


// cara
import { Link } from 'react-router-dom'
import style from './layout.module.css'

const Navigation = () => {
    return (
        //   membuat style navigation global dan scope
        <div className={style.navigation}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="d-flex justify-content-center align-items-center">
                            <div class="px-2"><Link to="/" className={style.navigation_item}>Home</Link></div>
                            <div class="px-2"><Link to="/burger-maker" className={style.navigation_item}>Burger Maker</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation