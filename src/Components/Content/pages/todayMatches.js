import React from 'react'
import style from './content.module.css'
import ContentHeader from './contentHeader'
import Leagues from './leagues'



const Content = ({ matches, today, tomorrow, leagues }) => {
    if (!matches) {
        return <div>Загрузка</div>
    }
    const matchesToday = matches.filter(m => {
        return today === m.time.slice(0, 10)
    })
    const matchesTomorrow = matches.filter(m => {
        return tomorrow === m.time.slice(0, 10)
    })

    const leaguesFiltered = []
    const result = []
    for (let i = 0; i < matches.length; i++) {
        if (!result.includes(matches[i].league_id)) {
            result.push(matches[i].league_id)
            leaguesFiltered.push(matches[i])
        }
    }

    return (
        <div  >
            <ContentHeader matches={matches}
                matchesToday={matchesToday}
                matchesTomorrow={matchesTomorrow} />
            <div className={style.contentMatches} >
                <div>
                    <div className={style.matchesBlock} >
                        {
                            leaguesFiltered.map(elem => {
                                let leagueName = '';
                                leagues.forEach(element => {
                                    element.items.forEach(item => {
                                        if (item.id === elem.id) {
                                            leagueName = item.item
                                        }
                                    });

                                });
                                return <Leagues key={elem.id} leagueName={leagueName} />
                            })
                        }
                        {/* <div className={style.matchesBlockEvent} >
                            <div className={style.time}>00:00</div>
                            <div className={style.event} >
                                <div className={style.teams}>Эвертон — Ливерпуль</div>
                                <div className={style.score} ></div>
                                <span className={style.favorite}><img src={notFavorite} alt='favorite' /></span>
                            </div>
                            <div className={style.stateMatch} >Перенесен</div>
                            <div className={style.details} >Подробнее</div>
                        </div> */}
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Content