import React from 'react'
import style from './header.module.css'

const Header = () => {
    return (
        <div className='container'>
            <div className={`row ${style.header}`}>
                <div className='col'>
                    <h1>Hello, I'm <br />Fandi Prasetyo</h1>
                </div>
                <div className='col'>
                    <p>A Senior-year design student who trying to spes</p>
                </div>
            </div>

        </div>
    )
}

export default Header