const Discord = require('discord.js'),
    bot = new Discord.Client({sisableEveryone: true})
    console.log("muuuuuuuuute,");
bot.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("522420703581175838");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**, # Welcome To __Magic__ Server** ,:leaves:`), 4000)        
}
});
bot.login(process.env.BOT_TOKEN)
