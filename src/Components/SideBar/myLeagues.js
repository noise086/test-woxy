import React, { useState } from 'react'
import style from './sideBar.module.css'
import League from './league'


const MyLeagues = ({country}) => {

    const [open, setOpen] = useState(false)

    return (
        <div  >
            <div className={style.blockItem} >
                <div>{country.league}</div>
                {open 
                    ? <span className={style.span} onClick={() => setOpen(false)} >&#9650;</span> 
                    : <span className={style.span} onClick={() => setOpen(true)} >&#9660;</span> }
            </div>
        
            <div className={open ? style.leaguesList : style.leaguesList + " " + style.displayNone}>
            {
                country.items.map(item => {
                    // if (open) {
                    //     return <League key={item.id} league={item.item} />
                    // }
                    // return null
                    return <League key={item.id} league={item.item} />
                })
            }
            </div>
        </div>
    )
}

export default MyLeagues