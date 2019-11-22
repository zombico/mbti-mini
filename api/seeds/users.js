// Require our User model so we can create new users
const User = require('../models/User')

// Create an array to store our fake users
const users = []

const koichi = new User({  
  email: 'koichi@speedwagon.io',  
  answers: [1,1,1,1,1,1,1,1,1,1]
})
users.push(koichi)

const fulgren = new User({  
  email: 'mrdude@gmail.com',
  answers: [6,6,6,6,6,6,6,6,6,6]
})
users.push(fulgren)



module.exports = users