import React from 'react'
import style from './content.module.css'
import notFavorite from '../../img/notFavorite.svg'
import favorite from '../../img/favorite.svg'



const Match = ({ match }) => {

    return (
        <div  >

            <div className={style.matchesBlockEvent} >
                <div className={style.time}>{match.time.slice(11, 16)}</div>
                <div className={style.event} >
                    <div className={style.teams}>{match.name}</div>
                    <div className={style.score} >{match.score}</div>
                    <span className={style.favorite}>
                        {match.favorite === 0 
                        ? <img src={notFavorite} alt='favorite' /> 
                        : <img src={favorite} alt='favorite' />}
                    </span>
                </div>
                <div className={style.stateMatch} >{match.status}</div>
                <div className={style.details} ><a href={match.link} >Подробнее</a></div>
            </div>


        </div>
    )
}

export default Match