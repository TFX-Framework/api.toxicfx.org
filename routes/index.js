const { Router } = require("express");
const route = Router();

const not_found = require('./404');
const int_error = require('./500');

const loading_default = require('./loading/default');
const loading_awrp = require('./loading/awrp');
const loading_tfx_test = require('./loading/toxicfx1');

const changes_landing = require('./changes/landing');
const changes_framework = require('./changes/framework');

const api_endpoint = require('./api/v1/index');
const api_status_bot = require('./api/v1/projects/status');

route.use('/404', not_found);
route.use('/500', int_error);

route.use('/loading/default', loading_default);
route.use('/loading/awrp', loading_awrp);
route.use('/loading/toxicfx-testing', loading_tfx_test);

route.use('/changes/landing', changes_landing);
route.use('/changes/framework', changes_framework);

route.use('/api/v1', api_endpoint);
route.use('/api/v1/projects/toxicfx-status', api_status_bot);

route.get('/', async (req, res, client) => {

  res.render('index');
});

route.get('/discord', async (req, res, client) => {

    res.redirect('https://discord.gg/segkMagV');
  });

route.get('/github', async (req, res, client) => {

    res.redirect('https://github.com/TFX-Framework');
  });

route.get('/git', async (req, res, client) => {

    res.redirect('https://github.com/TFX-Framework');
  });

route.get('/twitter', async (req, res, client) => {

    res.redirect('https://twitter.com/ToxicFX_FiveM');
  });

route.get('/docs', async (req, res, client) => {

    res.redirect('https://help.toxicfx.org');
});

route.use(function (req, res, next) {
    res.status(404).redirect('/404');
  });

 route.use(function (error, req, res, next) {
    res.status(500).redirect('/500');
    console.log(error)
  });


module.exports = route;
