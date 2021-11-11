const Discord = require('discord.js');

module.exports = {
	name: 'annonce',
	description: 'fait une annonce en embed!',
    cooldown: 5,
	execute(message) {
        let annonce = this.name.length + 1
        let msg = message.content.slice(annonce)
        let role = message.member.roles.cache.find(role => role.id === "758368046557167669")
        if(role){
            if (!msg.length) {
                return message.channel.send("vous devez mettre un phrase !");
            } else if(msg.length) {
                const embed = new Discord.MessageEmbed()
                .setTitle("**FLASH INFO**")
                .setColor(65423)
                .setDescription(msg)
                .setFooter(message.member.displayName, message.author.displayAvatarURL())
                .setTimestamp(Date.now())
                message.channel.send(embed);
                return message.delete()
            }
        }
	},
};