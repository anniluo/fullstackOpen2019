const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.get('/', async (request, response) => {
    const users = await User.find({})
    response.json(users.map(user => user.toJSON()))
})

usersRouter.post('/', async (request, response) => {
    try {
        const body = request.body

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
        response.json({error: `Error occured when trying to create a new user:${exception}`})
    }
})

module.exports = usersRouter
