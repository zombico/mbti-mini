const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// proxy the server
app.use('/', express.static(
  path.join(__dirname, '../build'))
)

app.use('/seeresult', require('./routes/users').router);


module.exports = app;