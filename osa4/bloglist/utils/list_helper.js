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

// 4.5*: apufunktioita ja yksikkötestejä, step3
const favouriteBlog = blogs => {
    const isEveryLikeZero = blogs.every(blog => blog.likes === 0)
    
    if (blogs.length === 0 || isEveryLikeZero ) {
        return 0
    }

    let favouriteBlog = blogs[0]

    blogs.forEach(blog => {
        favouriteBlog = favouriteBlog.likes >= blog.likes
        ? favouriteBlog
        : blog
    });

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
    // {author: "", blogs: 6}
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