
const { Router } = require("express");
const route = Router();

route.get('/', (req, res) => {

  res.status('200').send(JSON.stringify({ 
    message: 'Welcome to the Official API for the DisPurge Discord Bot',
    status: '200',
    error: false
  }));
});

route.get('/', (req, res) => {
  res.redirect('')
});


module.exports = route;
