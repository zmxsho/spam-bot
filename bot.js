const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("525804669746806788")
setInterval(function() {
channel.send(`Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project`);
}, 2500)
})
client.login(process.env.BOT_TOKEN);
