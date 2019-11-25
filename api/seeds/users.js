// Require our User model so we can create new users
const User = require('../models/User')

// Create an array to store our fake users
const users = []

const u1 = new User({  
  email: 'koichi@speedwagon.io',  
  answers: [1,1,1,1,1,1,1,1,1,1],
  mockResult: {
    ie: 'E',
    sn: 'S',
    tf: 'T',
    jp: 'P'
  }
})
users.push(u1)

const u2 = new User({  
  email: 'joestar@gmail.com',
  answers: [6,6,6,6,6,6,6,6,6,6],
  mockResult: {
    ie: 'I',
    sn: 'S',
    tf: 'F',
    jp: 'J'
  }
})
users.push(u2)

const u3 = new User({  
  email: 'giornogiovanna@gmail.com',
  answers: [7,6,3,2,4,3,1,1,7,8],
  mockResult: {
    ie: 'I',
    sn: 'N',
    tf: 'T',
    jp: 'J'
  }
})
users.push(u3)


module.exports = users