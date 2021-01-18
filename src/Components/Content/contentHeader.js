import React from 'react'
import style from './content.module.css'
import calendar from '../../img/calendar.svg'






const ContentHeader = ({matches, matchesToday, matchesTomorrow}) => {

    // const matchesToday = matches.map((m) => {
    //     return console.log(m)
    // })

    return (
        <div  >
           <div className={style.contentHeader} >
                <div className={style.contentTabs} >
                    <div className={style.tab} >
                        <span >Сегодня</span>
                        <span className={style.tabNumber} >{matchesToday.length}</span>
                    </div>
                    <div className={style.tab} >
                        <span  >Завтра</span>
                        <span className={style.tabNumber} >{matchesTomorrow.length}</span>
                    </div>
                    <div className={style.tab} >
                        <span >Все матчи</span>
                        <span className={style.tabNumber} >{matches.length}</span>
                    </div>
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