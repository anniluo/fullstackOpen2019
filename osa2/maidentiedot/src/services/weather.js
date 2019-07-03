import axios from 'axios'
const apiKey = '3a2ddf83b5aa46178fe132756190107'
const currentWeatherBaseUrl = 'https://api.apixu.com/v1/current.json'

const getWeather = capital => {
    const httpRequest = axios.get(`${currentWeatherBaseUrl}?key=${apiKey}&q=${capital}`)
    return httpRequest.then(response => response.data)
}

export default {
    getWeather
}