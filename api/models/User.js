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
  },
  mockResult: {
    type: Object,
    required: false
  }
})

module.exports = mongoose.model('User', userSchema)