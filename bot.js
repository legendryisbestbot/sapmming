const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', async() => {
var server = "493975561383706624"; // ايدي السررفر
var channel = "499699751411908608";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam , Magic Spam')
    },305);
})



// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
