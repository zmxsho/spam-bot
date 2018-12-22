const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "1"
console.log("Scrpit By Dream");

client.on('message', message => {
if (message.content.startsWith(prefix + "say")) {
var args = message.content.split(" ")
args = args.join(" ").slice(args[0].length);

if (!args) return;

message.channel.send(args);
};
})
client.on("ready", () => {
let channel =     client.channels.get("525804669746806788")
setInterval(function() {
channel.send(`Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project Project`);
}, 2500)
})
client.login(process.env.BOT_TOKEN);
