const blogsRouter = require('express').Router()
const { request } = require('express')
const Blog = require('../models/blog')

blogsRouter.get('/', (request, response) => {
    Blog
      .find({})
      .then(blogs => {
        response.json(blogs)
      })
})
  
blogsRouter.post('/', (request, response) => {
    const body = new Blog(request.body)

    const blog = new Blog ({
      title: body.title,
      author: body.author,
      url: body.url,
      likes: body.likes,
    })

    blog
        .save()
        .then(result => {
        response.json(result.toJSON())
        })
        .catch(error => next(error))
})

module.exports = blogsRouter