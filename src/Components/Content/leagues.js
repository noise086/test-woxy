import React from 'react'
import style from './content.module.css'
import flag from '../../img/flag.svg'
import Match from './match'



const Leagues = ({ leagueName, countryName, leaguesFiltered, matches, leagueId }) => {

    return (
        <div  >

            <div className={style.matchesBlockTitle}>
                <img src={flag} alt='flag' />
                <span className={style.title} >{countryName}: {leagueName}</span>
            </div>
            {   matches.map(match => {
                    if (match.league_id === leagueId) {
                        return <Match key={match.id} match={match} />
                    }
                    return null
                })
                
            }

        </div>
    )
}

export default Leagues