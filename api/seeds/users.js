// Require our User model so we can create new users
const User = require('../models/User')

// Create an array to store our fake users
const users = []

const koichi = new User({  
  email: 'koichi@speedwagon.io',  
})
users.push(koichi)

const fulgren = new User({  
  email: 'mrdude@gmail.com',  
})
users.push(fulgren)



module.exports = users