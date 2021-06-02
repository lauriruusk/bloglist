require('dotenv').config()

let PORT = 3003
let MONGODB_URI = 'mongodb+srv://fullstack:2021fullstack@trainercluster.sgmzt.mongodb.net/bloglist?retryWrites=true&w=majority'

module.exports =  {
    MONGODB_URI, PORT
}