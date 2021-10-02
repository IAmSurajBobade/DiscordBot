require('dotenv').config();

const config = require('./resources/config.json');
const discordClient = require('./resources/discordClient.js');

discordClient.client.on("ready", function () {
    console.log("Bot is logged in!");
});

discordClient.client.login(process.env.DISCORD_BOT_TOKEN);
