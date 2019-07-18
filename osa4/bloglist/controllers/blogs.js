const blogRouter = require('express').Router()
const Blog = require('../models/blog')

blogRouter.get('/', async (request, response) => {
    try {
        const blogs = await Blog.find({})
        response.status(200).json(blogs.map(blog => blog.toJSON()))
        
    } catch(exception) {
        console.log('An error occured:', exception)
        response.status(404).end()
    }
})

blogRouter.post('/', async (request, response) => {
    const blog = new Blog(request.body)

    try {
        const savedBlog = await blog.save()
        response.status(201).json(savedBlog.toJSON())

    } catch(exception) {
        console.log('An error occured:', exception)
        response.status(400).end()
    }
})

module.exports = blogRouter