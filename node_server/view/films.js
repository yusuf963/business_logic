const express = require('express')
const router = express.Router()

const Film = require('../models/fileSchema')
const AirBnb = require('../models/airbnbSchema')
const TestCon = require('../models/testSchema')

router.post('/',async(req, res)=>{
  console.log(req.body.user)
  const data = new TestCon({
    user: req.body.user
  })
  try {
    const dataToSave =  await data.save() 
    res.status(201).send(dataToSave)
  } catch (error) {
    res.status(404).send({error:error})
  }
})

router.get('/', async (req, res) => {
  try {
    const films = await Film.find()
    res.send(films)
  } catch (err) {
    res.send({ message: err })
  }
})
router.get('/n', async (req, res) => {
  try {
    const airBnb = await AirBnb.find()
    res.send(airBnb)
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