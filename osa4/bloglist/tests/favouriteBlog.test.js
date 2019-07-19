const favouriteBlog = require('../utils/list_helper').favouriteBlog

const listWithZeroBlogs = []

const listWithOneBlogWithLikes = [
    {
        _id: "5a422a851b54a676234d17f7",
        title: "React patterns",
        author: "Michael Chan",
        url: "https://reactpatterns.com/",
        likes: 5,
        __v: 0
    }
]

const listWithBlogsWithNoLikes = [
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
        author: "Robert C. Martin",
        url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
        likes: 0,
        __v: 0
    },
  ]

const listWithBlogsWithLikes = [
    {
        _id: "5a422a851b54a676234d17f7",
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
    {
        _id: "5a422bc61b54a676234d17fc",
        title: "Type wars",
        author: "Robert C. Martin",
        url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
        likes: 10,
        __v: 0
    }  
]

const listWithBlogsWithEqualLikes = [
    {
        _id: "5a422a851b54a676234d17f7",
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
        likes: 12,
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
]

describe('Favourite blog', () => {
    test('When list is empty equals to 0', () => {
      const result = favouriteBlog(listWithZeroBlogs)
      console.log(result)
      expect(result).toBe(0)
    })

    test('When list includes only blogs with 0 likes equals to 0', () => {
      const result = favouriteBlog(listWithBlogsWithNoLikes)
      console.log(result)
      expect(result).toBe(0)
  })

    test('When list has one blog with likes equals to that', () => {
      const result = favouriteBlog(listWithOneBlogWithLikes)
      console.log(result)
      expect(result)
        .toEqual({
          title: "React patterns",
          author: "Michael Chan",
          likes: 5
        })
  })

    test('When list has one favourite equals to that', () => {
      const result = favouriteBlog(listWithBlogsWithLikes)
      console.log(result)
      expect(result)
        .toEqual({
          title: "TDD harms architecture",
          author: "Robert C. Martin",
          likes: 16
       })
  })

  test('When list has more than one favourite blog equals to one of them', () => {
    const result = favouriteBlog(listWithBlogsWithEqualLikes)
    console.log(result)
    expect(result)
      .toEqual({
        title: "Go To Statement Considered Harmful",
        author: "Edsger W. Dijkstra",
        likes: 12
     })
})
})