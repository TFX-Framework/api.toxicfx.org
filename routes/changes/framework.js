const { Router } = require("express");
const route = Router();

route.get('/', async (req, res, client) => {

  res.render('changes/framework');
});

module.exports = route;
