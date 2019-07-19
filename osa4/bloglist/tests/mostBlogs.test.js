const mostBlogs = require('../utils/list_helper').mostBlogs

const listWithZeroBlogs = []

const listWithOneBlog = [
  {
    _id: "5a422a851b54a676234d17f7",
    title: "React patterns",
    author: "Michael Chan",
    url: "https://reactpatterns.com/",
    likes: 5,
    __v: 0
  }
]

const listWithOneMostBlogs = [
  {
    _id: "5a422a851b54a676234d17f7",
    title: "React patterns",
    author: "Michael Chan",
    url: "https://reactpatterns.com/",
    likes: 0,
    __v: 0
  },
  {
     _id: "5a422aa71b54a676234d17f8",
     title: "Go To Statement Considered Harmful",
     author: "Edsger W. Dijkstra",
     url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
     likes: 0,
     __v: 0
    },
    {
      _id: "5a422b891b54a676234d17fa",
      title: "First class tests",
      author: "Edsger W. Dijkstra",
      url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
      likes: 0,
      __v: 0
    },
]

const listWithEqualMostBlogs = [
  {
    _id: "5a422a851b54a676234d17f7",
    title: "React patterns",
    author: "Michael Chan",
    url: "https://reactpatterns.com/",
    likes: 7,
    __v: 0
  },
  {
    _id: "5a422a851b54a6764534d17f7",
    title: "React patterns",
    author: "Michael Chan",
    url: "https://reactpatterns.com/",
    likes: 7,
    __v: 0
  },
  {
    _id: "5a422aa71b54a676234d17f8",
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    likes: 5,
    __v: 0
  },
  {
    _id: "5a422b3a1b54a676234d17f9",
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
    likes: 12,
    __v: 0
  },
  {
    _id: "5a422b891b54a676234d17fa",
    title: "First class tests",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
    likes: 10,
    __v: 0
  },
  {
    _id: "5a422ba71b54a676234d17fb",
    title: "TDD harms architecture",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
    likes: 16,
    __v: 0
  }, 
]

describe('Most blogs', () => { 
  test('When list is empty the most blogs equals to 0', () => {
    expect(mostBlogs(listWithZeroBlogs)).toBe(0)
  })

  test('When list has only one blog most blogs equals to that', () => {
    expect(mostBlogs(listWithOneBlog))
      .toEqual({
        author: "Michael Chan",
        blogs: 1
    })
  })

  test('When list has one author with most blogs equals to that', () => {
    expect(mostBlogs(listWithOneMostBlogs))
      .toEqual({
        author: "Edsger W. Dijkstra",
        blogs: 2
    })
  })

  test('When list has more than one author with equal number of blogs equals to one of them', () => {
    expect(mostBlogs(listWithEqualMostBlogs))
      .toEqual({
        author: "Michael Chan",
        blogs: 2
      })
    })
})