const express = require('express')
const app = express()
require('dotenv').config();

const connectToDB = require('./db')
const filmsRoute = require('./view/films')
app.use('/films', filmsRoute)

connectToDB()
app.get('/', (req, res) => {
  res.send('welcome to my website')
})
const port = process.env.PORT || 5001
app.listen(port, () => {
  console.log('server is up and running🚀🚀')
})