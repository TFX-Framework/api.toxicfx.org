
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

route.get('/inv', (req, res) => {
  res.redirect('res.redirect(301, 'https://discord.com/api/oauth2/authorize?client_id=835997853263462461&permissions=2617638135&scope=bot')
});

route.get('/invite', (req, res) => {
  res.redirect('res.redirect(301, 'https://discord.com/api/oauth2/authorize?client_id=835997853263462461&permissions=2617638135&scope=bot')
});

route.get('/git', (req, res) => {
  res.redirect('res.redirect(301, 'https://github.com/TheRealToxicDev/DisPurge')
});

route.get('/github', (req, res) => {
  res.redirect('res.redirect(301, 'https://github.com/TheRealToxicDev/DisPurge')
});

route.get('/discord', (req, res) => {
  res.redirect('res.redirect(301, 'https://discord.gg/tSDjeTyzUj')
});

route.get('/support', (req, res) => {
  res.redirect('res.redirect(301, 'https://discord.gg/tSDjeTyzUj')
});


module.exports = route;
