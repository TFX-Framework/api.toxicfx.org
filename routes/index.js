
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
const loading_default_page = require('./v1/loading/default');
const loading_demo_page = require('./v1/loading/demo/index');

const skulls_page = require('./v1/loading/skulls/index');

const website_versions = require('./v1/versions/api');
const api_versions = require('./v1/versions/website');
const com_cad_versions = require('./v1/versions/community-cad');


/**
* Projects
*/
const grim_bot_project = require('./v1/projects/grimreaper/bot');

route.use('/404', not_found);
route.use('/500', int_error);

route.use('/api/v1/versions/website', website_versions);
route.use('/api/v1/versions/api', api_versions);
route.use('/v1/versions/community-cad', com_cad_versions);


route.use('/v1/loading/awrp', loading_afterwatch_main);
route.use('/v1/loading/toxicfx', loading_toxicfx_testing);
route.use('/v1/loading/default', loading_default_page);
route.use('/v1/loading/demo', loading_demo_page);

route.use('/v1/loading/skulls', skulls_page);

route.use('/v1/projects/reaper', grim_bot_project);

route.get('/', (req, res) => {

  res.status('200').send(JSON.stringify({ 
    message: 'Welcome to the Official API for ToxicFX',
    status: '200',
    error: false
  }));
});


module.exports = route;
