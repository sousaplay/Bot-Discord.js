const Discord = require("discord.js");
 
 
   exports.run = async (bot, message, args) => {
 
var list = [
'https://media.tenor.com/images/b6a5e629bf02c52979dc348bafc1c0c8/tenor.gif',
];
 
var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('🚨 | Você tem que mencionar alguém!');
}
 
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Tapa')
        .setColor('')
        .setDescription(`${message.author} acaba de dar um tapa em ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Tapa')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}
