import React from 'react'
import searchIcon from '../../img/searchIcon.svg'
import style from './header.module.css'



const Header = () => {
    return (
        <div className={style.header} >
            <div className={style.linksWrapper} >
                <div className={style.headerLink} >
                    РАСПИСАНИЕ МАТЧЕЙ
                </div>
                <div className={style.headerLink} >
                    Все
                </div>
                <div className={style.headerLink + " " + style.blue} >
                    Live
                </div>
                <div className={style.headerLink + " " + style.blue} >
                    Результаты
                </div>
                <div className={style.headerLink + " " + style.blue} >
                    Расписание
                </div>
                <div className={style.headerLink + " " + style.blue} >
                    Прогнозы
                </div>
            </div>
            <div className={style.searchWrapper} >
                <img src={searchIcon} alt='search' />
                <button className={style.loginBtn} >Войти</button>
            </div>
        </div>
    )
}

export default Header