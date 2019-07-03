import axios from 'axios'
const countriesBaseUrl = 'https://restcountries.eu/rest/v2/all'

const getAll = () => {
    const httpRequest = axios.get(countriesBaseUrl)
    return httpRequest.then(response => response.data)
}

export default {
    getAll,
}