
const { Router } = require("express");
const route = Router();

const not_found = require('./404');
const int_error = require('./500');

route.use('/404', not_found);
route.use('/500', int_error);

route.get('/', (req, res) => {

  res.status('200').send(JSON.stringify({ 
    message: 'Welcome to the Official API for ToxicFX',
    status: '200',
    error: false
  }));
});


module.exports = route;
