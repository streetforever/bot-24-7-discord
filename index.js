const Discord = require("discord.js");
const client = new Discord.Client();
require('dotenv').config();


const keepAlive = require('./server');
const Monitor = require('ping-monitor');

keepAlive();
const monitor = new Monitor({
  website: 'https://Otro.antoniovizcoito.repl.co',
  title: 'Principal',
  interval: 15 // minutes
});

monitor.on('up', (res) => console.log(`${res.website} está encedido.`));
monitor.on('down', (res) => console.log(`${res.website} se ha caído - ${res.statusMessage}`));
monitor.on('stop', (website) => console.log(`${website} se ha parado.`));
monitor.on('error', (error) => console.log(error));

client.login(process.env.TOKEN);