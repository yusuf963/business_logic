const mongoose = require('mongoose')
require('dotenv').config();

const URI = 'mongodb+srv://uni-lab2:uni-lab2@cluster0.0yf9duy.mongodb.net/uni?retryWrites=true&w=majority'

const connectToDB = () => {
  try {
    mongoose.connect(URI, () => {
      console.log('connection to DB is established')
    })
  } catch (error) {
    console.log({ error: error })
  }
}

module.exports = connectToDB