const express = require('express')
const router = express.Router()

const Film = require('../models/fileSchema')

router.get('/', async (req, res) => {
  try {
    const films = await Film.find()
    res.send(films)
  } catch (err) {
    res.send({ message: err })
  }
})

router.get('/:filmId', async (req, res) => {
  try {
    const filmById = await Film.findById(req.params.filmId)
    res.send(filmById)
  } catch (err) {
    res.send({ message: err })
  }
})

module.exports = router