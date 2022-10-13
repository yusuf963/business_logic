const mongoose = require('mongoose')
require('dotenv').config();
console.log(process.env.DBURI)


const connectToDB = () => {
  try {
    mongoose.connect(process.env.DBURI, () => {
      console.log('connection to DB is established')
    })
  } catch (error) {
    console.log({ error: error })
  }
}

module.exports = connectToDB