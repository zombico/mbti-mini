const mongoose = require('mongoose')

const User = require('../models/User')

const users = require('./users')
const { MONGODB_URI } = require('../constants');
const uri = MONGODB_URI;

const truncateDatabase = async () => {
  return Promise.all([User.deleteMany()])
}

const makeSeeds = async () => {
  
  await mongoose.connect(uri)
  
  await truncateDatabase()
  
  await Promise.all(users.map(user => user.save()))  
    
  mongoose.connection.close()
}

makeSeeds()