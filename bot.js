const Discord = require('discord.js'),
    bot = new Discord.Client({sisableEveryone: true})
    console.log("muuuuuuuuute,");
bot.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("509745217285652513");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`/me ** , # Welcome To __Magic__ Server , :mg: :leaves: **
`), 4000)        
}
});

client.login(process.env.BOT_TOKEN); 
