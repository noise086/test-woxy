import React from 'react'
import Country from './country'
import MyLeagues from './myLeagues'
import style from './sideBar.module.css'



const SideBar = ({getLeagues, leagues, countries}) => {
    if (!countries || !leagues) {
        return null
    }
    return (
        <div className={style.sidebar} >
            <div className={style.sidebarBlock} >
                <div >
                    <div className={style.blockTitle} >Мои лиги</div>
                    <div><hr /></div>
                </div>
                {
                    leagues.map(league => {
                            return <MyLeagues key={league.id} country={league} />
                        })
                }    
            </div>

            <div className={style.sidebarBlock} >
                <div className={style.blockTitle} >Страны</div>
                <hr />
                {
                    countries.map(c => {
                        return <Country key={c.id} country={c.country} />
                    })
                }
                
            </div>
        </div>
    )
}

export default SideBar