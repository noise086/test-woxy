import React from 'react'
import style from './content.module.css'
import Leagues from './leagues'



const Matches = ({ leaguesFiltered, leagues, matches }) => {


    return (
        <div className={style.contentMatches} >
            <div>
                <div className={style.matchesBlock} >
                    {
                        leaguesFiltered.map(match => {
                            let leagueName;
                            let countryName;
                            let leagueId;
                            leagues.forEach((league) => {
                                for (let i = 0; i < league.items.length; i++) {
                                    if (match.league_id === league.items[i].id) {
                                        leagueName = league.items[i].item
                                        countryName = league.league
                                        leagueId = match.league_id
                                    }
                                }
                            })
                            return <Leagues
                                key={match.id}
                                leagueId={leagueId}
                                leagueName={leagueName}
                                countryName={countryName}
                                matches={matches}
                                leagues={leagues}
                            />
                        })
                    }

                </div>

            </div>
        </div>
    )
}

export default Matches