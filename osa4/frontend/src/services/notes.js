import axios from 'axios';
// heroku server build folder
// const baseUrl = '/api/notes'
// development server
const baseUrl = 'https://fullstack-open-example.herokuapp.com/api/notes'

const getAll = () => {
    const request = axios.get(baseUrl)
    const nonExisting = {
        id: 1000,
        content: 'this note is not saved to the server',
        date: 'not gonna write this',
        important: true
    }
    return request.then(response => response.data.concat(nonExisting))
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

// jos nimetty samoin, voidaan kirjoittaa vain yhden kerran
export default {
    getAll,
    create,
    update
}