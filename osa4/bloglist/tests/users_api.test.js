const mongoose = require('mongoose')
const supertest = require('supertest')
const User = require('../models/user')
const helper = require('../utils/test_helper')
const app = require('../app')
const api = supertest(app)

describe('When there is one user in DB initially', () => {
    beforeEach(async () => {
        await User.deleteMany({})
        const user = new User({username: 'root', password: 'falcon123'})
        await user.save()
    })

    test('Right amount of users are returned as json', async () => {
        const response = await api
            .get('/api/users')
            .expect(200)
            .expect('Content-Type', /application\/json/)
    
        const usersInDb = await helper.usersInDb()
        expect(response.body.length).toBe(usersInDb.length)
    })

    test('Creation of a new user succeeds with valid data', async () => {
        const usersAtStart = await helper.usersInDb()

        const newUser = {
            username: 'anniluo',
            name: 'anni luo',
            password: 'idontcareabc123'
        }

        await api
            .post('/api/users')
            .send(newUser)
            .expect(200)
            .expect('Content-Type', /application\/json/)
        
        const usersAtEnd = await helper.usersInDb()
        expect(usersAtEnd.length).toBe(usersAtStart.length + 1)

        const usernames = usersAtEnd.map(user => user.username)
        expect(usernames).toContain(newUser.username)
    })

    test('Responds with a proper statuscode if password is less than 3 characters', async () => {
        const usersAtStart = await helper.usersInDb()

        const newUser = {
            username: 'anniluo',
            name: 'anni luo',
            password: '12'
        }

        const result = await api
            .post('/api/users')
            .send(newUser)
            .expect(400)
            .expect('Content-Type', /application\/json/)
        
        expect(result.body.error).toContain('chosen password is too short!')

        const usersAtEnd = await helper.usersInDb()
        expect(usersAtEnd.length).toBe(usersAtStart.length)
    })

    test('Responds with a proper statuscode if username is less than 3 characters', async () => {
        const usersAtStart = await helper.usersInDb()

        const newUser = {
            username: 'an',
            name: 'anni luo',
            password: '1234567'
        }

        const result = await api
            .post('/api/users')
            .send(newUser)
            .expect(400)
            .expect('Content-Type', /application\/json/)
        
        expect(result.body.error).toContain('`username` (`an`) is shorter than the minimum allowed length (3)')

        const usersAtEnd = await helper.usersInDb()
        expect(usersAtEnd.length).toBe(usersAtStart.length)
    })

    test('Responds with a proper statuscode if password and/or username is missing', async () => {
        const usersAtStart = await helper.usersInDb()

        const newUser = {
            name: 'anni luo',
        }

        const result = await api
            .post('/api/users')
            .send(newUser)
            .expect(400)
            .expect('Content-Type', /application\/json/)
        
        expect(result.body.error).toContain('username and/or password missing!')

        const usersAtEnd = await helper.usersInDb()
        expect(usersAtEnd.length).toBe(usersAtStart.length)
    })

    test('Responds with a proper statuscode if username is already in use', async () => {
        const usersAtStart = await helper.usersInDb()

        const newUser = {
            username: 'root',
            name: 'juuri',
            password: 'microcarpa'
        }

        const result = await api
            .post('/api/users')
            .send(newUser)
            .expect(400)
            .expect('Content-Type', /application\/json/)
        
        expect(result.body.error).toContain('`username` to be unique')
        
        const usersAtEnd = await helper.usersInDb()
        expect(usersAtEnd.length).toBe(usersAtStart.length)
    })
})

afterAll(() => {
    mongoose.connection.close()
})