const express = require('express')
const app = express()
const mongoose = require('mongoose')
const filmRoute = require('./view/films') 
app.use('/films', filmsRoute)

app.get('/', (req, res) => {
  res.send('Homepage')
})
const URI = 'mongodb+srv://uni-lab2:uni-lab2@cluster0.0yf9duy.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(URI, () => {
  console.log('Your mongoDB connector is on...')
})

app.listen(3000, () => {
  console.log('Your server is up and running...')
})