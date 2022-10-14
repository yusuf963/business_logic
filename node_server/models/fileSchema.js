const mongoose = require('mongoose')
const filmSchema = mongoose.Schema({
  film_type: {
    type: String
  },
  film_name: {
    type: String
  },
  film_year: {
    type: String
  },
  film_link: {
    type: String
  }
})

module.exports = mongoose.model('movies', filmSchema)