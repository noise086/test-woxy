
import React, { Component } from 'react';
import style from './App.module.css';
import { API } from './Components/API/api';
import Content from './Components/Content/content';
import Header from './Components/header/header';
import SideBar from './Components/SideBar/sideBar';


export default class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			matches: null,
			leagues: null,
			countries: null,
			today: null,
			tomorrow: null
		}
	}

	getNowDate() {
		let date = new Date()
		let year = date.getFullYear()
		let month = date.getMonth()
		let day = date.getDate()
		let today = String(year + '-' + 0 + (month + 1) + '-' + day)
		let tomorrow = String(year + '-' + 0 + (month + 1) + '-' + (day + 1))
		this.setState({ today })
		this.setState({ tomorrow })

	}

	getMatches = () => {
		API.getMatches().then((response) => {
			this.setState(state => {
				return {
					...state,
					matches: response
				}
			})
		})
	}

	getLeagues = () => {
		API.getLeagues().then((response) => {
			this.setState(state => {
				return {
					...state,
					leagues: response
				}
			})
		})
	}

	getCountries = () => {
		API.getCountries().then((response) => {
			this.setState(state => {
				return {
					...state,
					countries: response
				}
	
			})
		})
	}
	

	componentDidMount() {
		this.getMatches()
		this.getLeagues()
		this.getCountries()
		this.getNowDate()
	}

	render() {
		
		return (
			
			<div className={style.container}>
					<Header />
					<SideBar 
						leagues={this.state.leagues}
						countries={this.state.countries}
						getLeagues={this.getLeagues}
						getCountries={this.getCountries} />
					<Content matches={this.state.matches}
						today={this.state.today}
						tomorrow={this.state.tomorrow}
						leagues={this.state.leagues}
						getMatches={this.getMatches} />
			</div>

		);
	}


}

