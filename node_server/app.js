const express = require('express')
const bodyParser = require('body-parser')
const app = express()
require('dotenv').config();

const connectToDB = require('./db')
const filmsRoute = require('./view/films')

// app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use('/api', filmsRoute)
app.get('/', (req, res) => {
  res.send('welcome to my website')
})
connectToDB()
const port = process.env.PORT || 5001
app.listen(port, () => {
  console.log('server is up and running🚀🚀')
})