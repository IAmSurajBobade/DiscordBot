require('dotenv').config();

const discordBot = require('./resources/discordClient.js');

discordBot.client.on('ready', () => {
  console.log(`Logged in as ${discordBot.client.user.tag}!`);
});

discordBot.client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

discordBot.client.login(process.env.DISCORD_BOT_TOKEN);
