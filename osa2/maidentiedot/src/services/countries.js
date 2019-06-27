import axios from 'axios'
const baseUrl = 'https://restcountries.eu/rest/v2/all'

const getAll = () => {
    const httpRequest = axios.get(baseUrl)
    return httpRequest.then(response => response.data)
}

export default {
    getAll
}