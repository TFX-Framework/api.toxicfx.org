require("module-alias/register");

const colors = require('colors');
const Bot = require('./client/index');
const Website = require('./structures/website');
const { PORT, DISCORD_TOKEN } = process.env;


(async () => {

    let client = await Bot.init(DISCORD_TOKEN);

    console.log(colors.yellow(`Logged in as `) + colors.underline.green(client.user.tag));

    await new Website(client).listen(PORT || 8080);

    console.log(colors.yellow(`Running on port `) + colors.underline.green(PORT || 8080));
})()
