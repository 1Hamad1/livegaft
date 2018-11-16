const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "+";
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Cyhper Bot Script By : Gaft`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : Gaft ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`iLoveLegend <3 `,"http://twitch.tv/1legaft")
client.user.setStatus("dnd")
});



client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
