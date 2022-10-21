const mongoose = require('mongoose')

const TestSchema = mongoose.Schema({
    user:{
        type: String,
        required: true
    },
    date_created:{
        type: Date,
        default: Date.now 
    }
})

 module.exports = mongoose.model('test_cols', TestSchema)