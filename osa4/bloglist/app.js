const config = require('./utils/config')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const blogRouter = require('./controllers/blogs')
const mongoose = require('mongoose')

mongoose.set('useFindAndModify', false);

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true })
    .then(() => {
        console.log('Connected to Mongo Database')
    })
    .catch((error) => {
        console.log('Error occured when connecting to Mongo Database:', error.message)
    })

app.use(cors())
app.use(bodyParser.json())
app.use('/api/blogs', blogRouter)

module.exports = app