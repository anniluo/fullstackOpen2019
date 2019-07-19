const _ = require('lodash')

const dummy = blogs => {
    return 1
}

const totalLikes = blogs => {
    if (blogs.length === 0) {
        return 0
    }

    const likes = blogs.map(blog => blog.likes)
    return likes.reduce((total, currentValue) => total + currentValue)
}

const favouriteBlog = blogs => {
    const isEveryLikeZero = blogs.every(blog => blog.likes === 0)
    
    if (blogs.length === 0 || isEveryLikeZero ) {
        return 0
    }

    const likes = blogs.map(blog => blog.likes)
    const maxLikes = Math.max(...likes)
    const favouriteBlog = blogs.find(blog => blog.likes === maxLikes)
    
    return {
        title: favouriteBlog.title,
        author: favouriteBlog.author,
        likes: favouriteBlog.likes
    }
}

// 4.6*: apufunktioita ja yksikkötestejä, step4
const mostBlogs = blogs => {
    // returns the author with most blogs
    // and the number of the written blogs
    // if many, return one of them
    if (blogs.length === 0) {
        return 0
    }

    if (blogs.length === 1) {
        const mostBlogs = {
            author: blogs[0].author,
            blogs: 1
        }
        return mostBlogs
    }

    const authors = blogs.map(blog => blog.author)
    // filters to all the authors that have the most blogs
    const nonUnique = authors.filter(author => {
        return authors.indexOf(author) !== authors.lastIndexOf(author)
    })

    // filters to the first author with most blogs
    const mostBlogs = nonUnique.filter(mostBlog => {
        return mostBlog === nonUnique[0]
    })

    return {
        author: mostBlogs[0],
        blogs: mostBlogs.length
    }
}

// 4.7*: apufunktioita ja yksikkötestejä, step 5
const mostLikes = blogs => {
    // returns the author who has most likes 
    // and the sum of the likes
    // {author: "", likes: 10}
}

module.exports = {
    dummy,
    totalLikes,
    favouriteBlog,
    mostBlogs
}