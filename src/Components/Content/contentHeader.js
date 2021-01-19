import React from 'react'
import style from './content.module.css'
import calendar from '../../img/calendar.svg'
import { NavLink } from 'react-router-dom'






const ContentHeader = ({matches, matchesToday, matchesTomorrow, getMatches}) => {

    // const matchesToday = matches.map((m) => {
    //     return console.log(m)
    // })

    return (
        <div  >
           <div className={style.contentHeader} >
                <div className={style.contentTabs} >
                        <NavLink to="/todaymatches" className={style.tab} onClick={getMatches} >
                            <span >Сегодня</span>
                            <span className={style.tabNumber} >{matchesToday.length}</span>
                        </NavLink>
                        <NavLink to="/tomorrowmatches" className={style.tab} onClick={getMatches} >
                            <span  >Завтра</span>
                            <span className={style.tabNumber} >{matchesTomorrow.length}</span>
                        </NavLink>
                        <NavLink to="allmatches" className={style.tab} onClick={getMatches} >
                            <span >Все матчи</span>
                            <span className={style.tabNumber} >{matches.length}</span>
                        </NavLink>
                </div>
                <div className={style.calendar} >
                    <img className={style.calendarImg} src={calendar} alt={calendar} />
                    <span>21.03 вт</span>
                </div>
            </div>

        </div>
    )
}

export default ContentHeader