const Discord = require('discord.js');

module.exports = {
	name: 'devlog',
	description: 'fait une annonce en embed pour le devlog!',
    cooldown: 0,
	execute(message) {
        let annonce = this.name.length + 1
        let msg = message.content.slice(annonce)
        let role = message.member.hasPermission("ADMINISTRATOR") 
        if(!role) {
                message.reply("Tu n'a pas la permission de faire ca !!");
                return message.delete()
        }
        if(role){
            if (!msg.length) {
                message.channel.send("vous devez mettre un phrase !");
                return message.delete()
            } else if(msg.length) {
                const embed = new Discord.MessageEmbed()
                .setColor(16119285)
                .setDescription(msg)
                .setFooter(message.member.displayName, message.author.displayAvatarURL())
                .setTimestamp(Date.now())
                message.channel.send(embed);
                return message.delete()
            }
        }
	},
};