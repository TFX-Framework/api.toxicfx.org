const { Router } = require("express");
const route = Router();

route.get('/', async (req, res, client) => {

  res.render('loading/demo/index');
});

module.exports = route;
