const Discord = require("discord.js");
module.exports = {
  name: "ban",

  run: async(client, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`**🚨 | ${message.author} Você não tem permissão para utilizar este comando!**`)

        const usu = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        let reason = args.slice(1).join(" ");
        if (!reason) reason = "Sem motivo";


const embed = new Discord.MessageEmbed()
        .setTitle(`**🚨 Você foi banido!**`)
        .setThumbnail(message.guild.iconURL({dynamic : true}))
        .setDescription(`**:bookmark_tabs: Servidor: \`${message.guild.name}\`
🪓 Motivo: ${reason} **`)
        .setColor("")
        .setTimestamp()
        .setFooter(message.guild.name, message.guild.iconURL({dynamic : true}));



        if (!args[0]) return message.channel.send(`**🚨 | ${message.author} Você precisa mencionar alguém para banir!**`);

        if(!usu) return message.channel.send(`**🚨 | ${message.author} Você precisa mencionar alguém válido!**`);


        const ferinha = new Discord.MessageEmbed()
        .setTitle(`**🚨 Banimento!**`)
        .setThumbnail(usu.user.displayAvatarURL())
        .setDescription(`**🪓 Banido: ${usu.user} (\`${usu.user.id}\`)
🪓 Motivo: \`${reason}\`
🪓 Por: ${message.author} (\`${message.author.id}\`) **`)
        .setColor("")
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL());

        await usu.send(embed);
        await usu.ban({
            reason: reason
        });
        
        
        message.channel.send(ferinha);
    }
}


 
