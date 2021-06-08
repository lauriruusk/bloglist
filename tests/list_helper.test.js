const listHelper = require('../utils/list_helper')

const listWithManyBlogs = [
    {
        _id: '4yg35y545744y5te',
        title: 'Test blog please ignore',
        author: 'John Doe',
        url: 'http://www.example.com',
        likes: 4,
        __v: 0
    },
    {
        _id: '24t5u57u344676uhgerdh',
        title: 'This blog does not exist',
        author: 'Mr Fantastic',
        url: 'http://www.imaginaryurl.com',
        likes: 7,
        __v: 0
    },
    {
        _id: 't398hio59h23657j543',
        title: 'Last of test blogs',
        author: 'Aku Ankka',
        url: 'http://www.validurl.com',
        likes: 12,
        __v: 0
    }
]

test('dummy returns one', () => {
    const blogs = []

    const result = listHelper.dummy(blogs)
    expect(result).toBe(1)
})

describe('total likes', () => {
    const emptyBlog = []
    const listWithOneBllog = [
        {
            _id: '5a422aa71b54a676234d17f8',
            title: 'Go To Statement Considered Harmful',
            author: 'Edsger W. Dijkstra',
            url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
            likes: 5,
            __v: 0
        }
    ]

    test('of empty list is zero', () => {
        const result = listHelper.totalLikes(emptyBlog)
    })

    test('when list has only one blog equals the likes of that', () =>{
        const result = listHelper.totalLikes(listWithOneBllog)
        expect(result).toBe(5)
    } )

    test('of a bigger list is calculated right', () => {
        const result = listHelper.totalLikes(listWithManyBlogs)
        expect(result).toBe(23)
    })
})

describe('favorite blog', () => {
    test('is clearly', () => {
        const result = listHelper.favoriteBlog(listWithManyBlogs)
        expect(result).toEqual(listWithManyBlogs[2])
    })
})