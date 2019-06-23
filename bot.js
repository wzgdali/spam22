const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("592300454202048522")
setInterval(function() {
channel.send(`no spam please``);
}, 30)
})

client.login(process.env.BOT_TOKEN);
