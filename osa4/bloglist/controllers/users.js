const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.get('/', async (request, response) => {
    const users = await User.find({})
    response.json(users.map(user => user.toJSON()))
})

usersRouter.post('/', async (request, response, next) => {
    const body = request.body
    if (body.password === undefined) {
        return response.status(400).json({error: 'username and/or password missing!'})
    }

    if (body.password.length < 3) {
        return response.status(400).json({error: 'chosen password is too short!'})
    }

    try {
        const saltRounds = 10
        const passwordHashed = await bcrypt.hash(body.password, saltRounds)

        const user = new User({
            username: body.username,
            name: body.name,
            passwordHashed
        })

        const savedUser = await user.save()
        response.json(savedUser)
    } catch (exception) {
        next(exception)
    }
})

module.exports = usersRouter
