const {Client , Collection} = require("discord.js")
const config = require("../config/config");

const client = new Client({
    disableMentions: 'everyone',
    disabledEvents: ["TYPING_START"]
});

client.config = config;

const events = require("./utils/event");
events.run(client)

module.exports.init = async (token) => {

    client.userBaseDirectory = __dirname;

     await client.login(config.token);

    return client;

}
