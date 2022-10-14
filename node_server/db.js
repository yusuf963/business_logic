const mongoose = require('mongoose')
require('dotenv').config();

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.DBURI, () => {
      console.log('connection to DB is established')
    })
  } catch (error) {
    console.log({ error: error })
  }
}

module.exports = connectToDB