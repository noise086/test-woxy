import React, { useEffect, useState } from 'react'
import searchIcon from '../../img/searchIcon.svg'
import style from './header.module.css'
import hamburger from '../../img/hamburger.svg'
import close from '../../img/close.svg'



const Header = () => {

    const [menuActive, setMenuActive] = useState(false)

    return (
        <div className={style.header} >

                <div className={style.hamburger}>
                    <img src={hamburger} alt='menu' onClick={() => setMenuActive(true)} />
                </div>

                <div className={menuActive ? style.menu + " " + style.menuActive : style.menu}>

                    <div className={style.mobileMenu}>
                        <div className={style.menuHeader} >
                            <div className={style.headerLink}>Меню</div>
                            <img src={close} alt='close' onClick={() => setMenuActive(false)} />
                        </div>
                        <hr/>
                    </div>

                    <div className={style.matchesLink + " " + style.displayNone} >
                        РАСПИСАНИЕ МАТЧЕЙ
                    </div>
                    <div className={style.matchesLink + " " + style.displayNone} >
                        Все
                    </div>
                    <div className={style.headerLink} >
                        Live
                    </div>
                    <div className={style.headerLink} >
                        Результаты
                    </div>
                    <div className={style.headerLink} >
                        Расписание
                    </div>
                    <div className={style.headerLink + " " + style.blue} >
                        Прогнозы
                    </div>

                </div>
            <div className={style.searchWrapper} >
                <img className={style.search} src={searchIcon} alt='search' />
                <button className={style.loginBtn} >Войти</button>
            </div>
        </div>
    )
}

export default Header