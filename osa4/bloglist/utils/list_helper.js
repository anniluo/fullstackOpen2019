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

module.exports = {
    dummy,
    totalLikes
}