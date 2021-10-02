const Discord = require('discord.js');
const intents = new Discord.intents(32767);

const client = new Discord.client({ intents });

module.exports = { client };