
const { Router } = require("express");
const route = Router();

route.get('/', (req, res) => {

  res.status('200').send(JSON.stringify({ 
    message: 'Welcome to the Official API for ToxicFX',
    status: '200',
    error: false
  }));
});


module.exports = route;
