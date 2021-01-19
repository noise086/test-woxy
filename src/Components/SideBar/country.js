import React from 'react'
import style from './sideBar.module.css'


const Country = ({ country }) => {

    return (
        <div  >
            <div className={style.blockItem} >
                <div>{country}</div>
            </div>

        </div>
    )
}

export default Country