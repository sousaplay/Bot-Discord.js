const Discord = require("discord.js");
module.exports = {
  name: "kick",

  run: async(client, message, args) => {
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`**🚨 | ${message.author} Você não tem permissão para utilizar este comando!**`)

        const usu = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        let reason = args.slice(1).join(" ");
        if (!reason) reason = "Sem motivo";


const embed = new Discord.MessageEmbed()
        .setTitle(`**🚨 Você foi expulso!**`)
        .setThumbnail(message.guild.iconURL({dynamic : true}))
        .setDescription(`**:bookmark_tabs:  Servidor: \`${message.guild.name}\`
🪓 Motivo: ${reason}**`)
        .setColor("")
        .setTimestamp()
        .setFooter(message.guild.name, message.guild.iconURL({dynamic : true}));



        if (!args[0]) return message.channel.send(`**🚨 | ${message.author} Você precisa mencionar alguém para expulsar!**`);

        if(!usu) return message.channel.send(`**🚨 | ${message.author} Você precisa mencionar alguém válido!**`);


        const ferinha = new Discord.MessageEmbed()
        .setTitle(`**🚨 Expulsão!**`)
        .setThumbnail(usu.user.displayAvatarURL())
        .setDescription(`**🪓 Expulso: ${usu.user} (\`${usu.user.id}\`)
 🪓 Motivo: \`${reason}\`
🪓 Por: ${message.author} (\`${message.author.id}\`) **`)
        .setColor("")
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL());

        await usu.send(embed);
        await usu.kick({
            reason: reason
        });
        
        
        message.channel.send(ferinha);
    }
}


 
