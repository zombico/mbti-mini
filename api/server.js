const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Router = express.Router
const router = Router()


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send("Hello, world!");
});

app.use('/healthcheck', require('./routes/index').router);


router.get('/banana/', async (req, res, next) => {
  try {
    res.send('hello banana')
  } catch(e) {
    next(e)
  }
})

module.exports = app;