const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },  
  answers: {
    type: Array,
    required: false
  }
})

module.exports = mongoose.model('User', userSchema)