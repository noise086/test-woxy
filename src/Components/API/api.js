import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://u0362146.plsk.regruhosting.ru'
})

export const API = {
    getMatches () {
        return instance.get('/match')
            .then(response => response.data)
    },
    
    getLeagues() {
        return instance.get('/league')
            .then(response => {
                return response.data
            })
    },
    
    getCountries () {
        return instance.get('/country')
            .then(response => {
                return response.data
            })
    }
}
