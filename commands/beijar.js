const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://media.tenor.com/images/86cf2396ee6061a6fa0611e985dcd65e/tenor.gif',
 
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('🚨 | Você tem que mencionar alguém!');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Beijinho')
        .setColor('')
        .setDescription(`${message.author} acaba de beijar ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Beijo')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}
