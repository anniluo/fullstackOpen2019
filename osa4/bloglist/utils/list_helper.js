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
    favouriteBlog
}