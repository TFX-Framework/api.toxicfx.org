const { readdirSync } = require("fs")
const { join } = require("path")
const filePath2 = join(__dirname, "..", "events");
const eventFiles2 = readdirSync(filePath2);
const timers = require("timers");


module.exports = async (client) => {

let activities = [
    {
      name: 'https://toxicfx.org',
      options: {
        type: 'STREAMING',
        url: "https://www.twitch.tv/monstercat"
      }
    },
    {
      name: 'Website: Online',
      options: {
        type: 'STREAMING',
        url: "https://www.twitch.tv/monstercat"
      }
    },
    {
      name: 'Docs: Online',
      options: {
        type: 'STREAMING',
        url: "https://www.twitch.tv/monstercat"
      }
    },
    {
      name: 'Status Bot: Online',
      options: {
        type: 'STREAMING',
        url: "https://www.twitch.tv/monstercat"
      }
    }
  ];
  let i = 0;


   console.log(`Signed in as ${client.user.username} & Loaded [${eventFiles2.length}] event(s)`);
   timers.setInterval(() => {
    i = i == activities.length ? 0 : i;
   client.user.setActivity(activities[i].name, activities[i].options);
    i++;
  }, 30000);
}
