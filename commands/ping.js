module.exports = {
name: 'ping',
description: 'Donne la latence entre le message envoyé et le message reçu',
cooldown: 5,
execute(message) {
		
			message.channel.send(`🏓 Pinging....`).then(msg_edit => msg_edit.edit(`🏓 Pong!\nLatency is ${Math.floor(msg_edit.createdTimestamp - message.createdTimestamp)}ms`));
			}
		};