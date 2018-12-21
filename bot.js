const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("525479146743398402")
setInterval(function() {
channel.send(`براااااااااااااااااااااااااااااااااااااا`);
}, 3000)
})
client.login(process.env.BOT_TOKEN);
