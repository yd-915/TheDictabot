
const config = require('config');
const Discord = require('discord.js');
const client = new Discord.Client();
import express = require('express');
import axios from 'axios';
const app: any = express();
const checker = require("noswearing");
const arrayofJokes = ['NO SWEARING ALLOWED', 'YOU THINK YOU RUN THIS SERVER?!', 'Ill words are forbidden in this server', 'Illegal words have been typed and have been deleted.', 'CEASE YOUR PROFANITIES THIS INSTANT NETIZEN!', 'It seems that you are seeking the ban hammer.'];
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('up and running!'));
app.get('/', (req, res) => {
    res.send('up and running!')
    //it is really necessary to keep a server running, if you are thinking of hosting a discord bot on services like herkoku...
    //To keep the bot live at all times, you need to ping the server once every 5 mins.
})

client.login(config.get('discord'));
