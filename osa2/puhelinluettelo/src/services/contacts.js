import axios from 'axios';

const baseUrl = 'http://localhost:3001/contacts';

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newContact => {
    const request = axios.post(baseUrl, newContact)
    return request.then(response => response.data)
}

const drop = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

const update = (id, changedContact) => {
    const request = axios.put(`${baseUrl}/${id}`, changedContact)
    return request.then(response => response.data)
}

export default {
    getAll,
    create,
    drop,
    update
}