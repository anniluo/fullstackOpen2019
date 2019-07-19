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
    const body = request.body

    if (body.title === undefined || body.url === undefined) {
        response.status(400).json({message: 'title and/or url missing!'})

    } else {
        const blog = new Blog({
            title: body.title,
            author: body.author,
            url: body.url,
            likes: body.likes === undefined ? 0 : body.likes 
        })
    
        try {
            const savedBlog = await blog.save()
            response.status(201).json(savedBlog.toJSON())
    
        } catch(exception) {
            console.log('An error occured:', exception)
            response.status(400).end()
        }
    }
})

blogRouter.delete('/:id', async (request, response) => {
    try {
        await Blog.findByIdAndRemove(request.params.id)
        response.status(204).end()
    } catch(exception) {
        console.log('error in deleting a blog', exception)
    }
})

module.exports = blogRouter