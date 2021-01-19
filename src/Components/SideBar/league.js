import React from 'react'
import style from './sideBar.module.css'



const League = ({league}) => {
    return (
        <div className={style.league} >
            <div>{league}</div>
            <span >&#215;</span>
        </div>
    )
}

export default League