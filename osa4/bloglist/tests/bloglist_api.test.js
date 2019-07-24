const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blog')

const initialBlogs = [
    {
        title: "React patterns",
        author: "Michael Chan",
        url: "https://reactpatterns.com/",
        likes: 7,
    },
    {
        title: "Go To Statement Considered Harmful",
        author: "Edsger W. Dijkstra",
        url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
        likes: 5,
    },
    {
        title: "First class tests",
        author: "Robert C. Martin",
        url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
        likes: 10,
    },
]

beforeEach(async () => {
    await Blog.deleteMany({})

    let blogObject = new Blog(initialBlogs[0])
    await blogObject.save()

    blogObject = new Blog(initialBlogs[1])
    await blogObject.save()

    blogObject = new Blog(initialBlogs[2])
    await blogObject.save()
})

test('Right amount of blogs are returned as json', async () => {
    const response = await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)

    expect(response.body.length).toBe(3)
})

test('The identifier for a blog should be named "id"', async () => {
    await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)
    
    const response = await api.get('/api/blogs')
    response.body.forEach(blog => {
        expect(blog.id).toBeDefined()
    });
}) 

test('A valid blog can be added', async () => {
    const newBlog = {
        title: "Automating My Todo with GitHub and Twilio",
        author: "Alice Goldfuss",
        url: "https://blog.alicegoldfuss.com/automating-my-todo/",
        likes: 42
    }

    await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(201)
        .expect('Content-Type', /application\/json/)
    
    const response = await api.get('/api/blogs')
    const urls = response.body.map(blog => blog.url)
    expect(response.body.length).toBe(initialBlogs.length + 1)
    expect(urls).toContain(newBlog.url)
})

test('A blog with no likes gets a value of 0 for that', async () => {
    const newBlog = {
        title: "Automating My Todo with GitHub and Twilio",
        author: "Alice Goldfuss",
        url: "https://blog.alicegoldfuss.com/automating-my-todo/",
    }

    const response = await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(201)
        .expect('Content-Type', /application\/json/)
    
    expect(response.body.likes).toBe(0)
})

test('A blog with no title and url is responded with a status code of 400 (Bad Request)', async () => {
    const newBlog = {
        author: "Alice Goldfuss",
        likes: 1
    }

    await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(400)

    const response = await api.get('/api/blogs')
    expect(response.body.length).toBe(initialBlogs.length)
})

test('A blog is deleted if the id is valid', async () => {
    let response = await api.get('/api/blogs')
    const blogsInDb = response.body

    const blogToDelete = blogsInDb[0]

    await api
        .delete(`/api/blogs/${blogToDelete.id}`)
        .expect(204)
    
    response = await api.get('/api/blogs') 
    const blogsAtEnd = response.body
    
    expect(blogsAtEnd.length).toBe(initialBlogs.length - 1)

    const urls = blogsAtEnd.map(blog => blog.url)

    expect(urls).not.toContain(blogToDelete.url)
})

test('A blog is updated if the id is valid', async () => {
    let getResponse = await api.get('/api/blogs')
    const blogsInDb = getResponse.body

    const blogToUpdate = blogsInDb[0]
    const updatedBlog = {
        likes: 69
    }

    const putResponse = await api
        .put(`/api/blogs/${blogToUpdate.id}`)
        .send(updatedBlog)
        .expect(200)
    
    expect(putResponse.body.likes).toBe(updatedBlog.likes)
})

afterAll(() => {
    mongoose.connection.close()
})
