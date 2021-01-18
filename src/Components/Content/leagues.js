import React from 'react'
import style from './content.module.css'
import flag from '../../img/flag.svg'



const Leagues = ({leagueName}) => {

    return (
        <div  >

            <div className={style.matchesBlockTitle}>
                <img src={flag} alt='flag' />
                <span className={style.title} >{leagueName}</span>
            </div>

        </div>
    )
}

export default Leagues