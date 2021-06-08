const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    let totLikes = 0
    blogs.map(b => totLikes+=b.likes)

    return totLikes
}

const favoriteBlog = (blogs) => {
    let favBlog= blogs[0]
    blogs.map(b => {
        if(b.likes > favBlog.likes) {
            favBlog = b
        }
    })
    return favBlog
}

module.exports = {
    dummy, totalLikes, favoriteBlog
}