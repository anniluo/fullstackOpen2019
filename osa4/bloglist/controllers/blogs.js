const blogRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const Blog = require('../models/blog')
const User = require('../models/user')

blogRouter.get('/', async (request, response) => {
    try {
        const blogs = await Blog.find({}).populate('user', {username: 1, name: 1})
        response.status(200).json(blogs.map(blog => blog.toJSON()))

    } catch(exception) {
        console.log('An error occured:', exception)
        response.status(404).end()
    }
})

blogRouter.post('/', async (request, response, next) => {
    const body = request.body

    try {
        const decodedToken = jwt.verify(request.token, process.env.SECRET)
        if (!decodedToken.id) {
            return response.status(401).json({error: 'missing or invalid token!'})
        }
    
        const user = await User.findById(decodedToken.id)

        if (body.title === undefined || body.url === undefined) {
            return response.status(400).json({message: 'title and/or url missing!'})
        }

        const blog = new Blog({
            title: body.title,
            author: body.author,
            url: body.url,
            likes: body.likes === undefined ? 0 : body.likes,
            user: user._id
        })

        const savedBlog = await blog.save()
        user.blogs = user.blogs.concat(savedBlog._id)
        await user.save()
        response.status(201).json(savedBlog.toJSON())

    } catch(exception) {
        next(exception)
    }
})

blogRouter.delete('/:id', async (request, response) => {
    try {
        await Blog.findByIdAndRemove(request.params.id)
        response.status(204).end()
    } catch(exception) {
        console.log('error in deleting a blog', exception)
        response.status(400).end()
    }
})

blogRouter.put('/:id', async (request, response) => {
    const body = request.body

    const blog = {
        likes: body.likes
    }

    try {
        const updatedBlog = await Blog
            .findByIdAndUpdate(request.params.id, blog, {new: true})
        response.status(200).json(updatedBlog.toJSON())
    } catch(exception) {
        console.log('error in updating a blog', exception)
        response.status(400).end()
    }
})

module.exports = blogRouter