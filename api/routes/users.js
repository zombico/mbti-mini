const express = require('express');
const router = express.Router();
const User = require('../models/User')


router.get('/', async (req, res, next) => {
  try {    
    const docs = await User.find()    

    res.status(200).send({
      data: docs
    })
  } catch(e) {    
    next(e)
  }
})

 
router.post('/signup', async (req, res, next) => {
  const { email } = req.body
  const user = new User({ email })

  try {
    const doc = await user.save()
      res.status(200).send({
        data: [doc]
      })
  } catch(e) {
    console.log(e)
    next(e)
  }
})

exports.router = router;