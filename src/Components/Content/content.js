import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import style from './content.module.css'
import ContentHeader from './contentHeader'
import MatchesAll from './matchesAll'
import MatchesToday from './matchesToday'
import MatchesTomorrow from './matchesTomorrow'



const Content = ({ matches, today, tomorrow, leagues, getMatches }) => {
    if (!matches || !leagues) {
        return <h2 className={style.loading}>Загрузка...</h2>
    }
    const matchesToday = matches.filter(m => {
        return today === m.time.slice(0, 10)
    })
    const matchesTomorrow = matches.filter(m => {
        return tomorrow === m.time.slice(0, 10)
    })

    const setFilterLeagues = (period) => {
        const leaguesFiltered = []
        const result = []
        for (let i = 0; i < period.length; i++) {
            if (!result.includes(period[i].league_id)) {
                result.push(period[i].league_id)
                leaguesFiltered.push(period[i])
            }
        }
        return leaguesFiltered
    }

    const leaguesFilteredToday = setFilterLeagues(matchesToday)
    const leaguesFilteredTomorrow = setFilterLeagues(matchesTomorrow)
    const leaguesFilteredAll = setFilterLeagues(matches)


    return (
        <div  >
            <BrowserRouter >
                <ContentHeader matches={matches}
                    matchesToday={matchesToday}
                    matchesTomorrow={matchesTomorrow}
                    getMatches={getMatches} />

                <Route path="/todaymatches" component={() => {
                           return <MatchesToday
                            leaguesFiltered={leaguesFilteredToday}
                            leagues={leagues}
                            matches={matchesToday} />
                       }}
                       >
                </Route>

                <Route path="/tomorrowmatches" render={() => {
                    return <MatchesTomorrow
                        leaguesFiltered={leaguesFilteredTomorrow}
                        leagues={leagues}
                        matches={matchesTomorrow} />
                }} >
                </Route>

                <Route path="/allmatches" render={() => {
                    return <MatchesAll
                        leaguesFiltered={leaguesFilteredAll}
                        leagues={leagues}
                        matches={matches} />
                }} >
                </Route>
            </BrowserRouter>
        </div>
    )
}

export default Content