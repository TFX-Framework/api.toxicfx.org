
const { Router } = require("express");
const route = Router();

const not_found = require('./404');
const int_error = require('./500');

/**
* After Watch RP Loading Screens
*/
const loading_afterwatch_main = require('./v1/loading/afterwatch/main');

/**
* ToxicFX Loading Screens
*/
const loading_toxicfx_testing = require('./v1/loading/toxicfx/testing');

route.use('/404', not_found);
route.use('/500', int_error);

route.use('/v1/loading/awrp', loading_afterwatch_main);
route.use('/v1/loading/toxicfx', loading_toxicfx_testing);

route.get('/', (req, res) => {

  res.status('200').send(JSON.stringify({ 
    message: 'Welcome to the Official API for ToxicFX',
    status: '200',
    error: false
  }));
});


module.exports = route;
