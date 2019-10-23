const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true);
require('dotenv').config()
const mongoURI = "mongodb+srv://fidato:uftrxkb6YIqpEiTO@cluster0-tvc7c.mongodb.net/test"

// const mongoURI = process.env.MONGOURI
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })

module.exports = mongoose 