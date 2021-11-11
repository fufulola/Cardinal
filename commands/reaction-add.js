module.exports = {
	name: 'reaction-add',
	description: 'pour ajouter un reaction!',
	cooldown: 5,
	execute(message, args, commandName, prefix) {
        if (args.length < 3) return message.channel.send(`Mauvaise usage de la commande, bonne usage: ${prefix + commandName} [CHANNEL] [EMOJI] [RÔLE] [EMOJI] [RÔLE]`);
        if (message.channel.type !== 'text') return message.channel.send(`Cette comande n'est disponible que dans un serveur discord.`);
        let channel = message.mentions.channels.first();
        if (channel === undefined) return message.channel.send(`Mauvaise usage de la commande, bonne usage: ${prefix + commandName} [CHANNEL] [EMOJI] [RÔLE] [EMOJI] [RÔLE]`);
        let role = message.mentions.roles.first();
        if (role === undefined) return message.channel.send(`Mauvaise usage de la commande, bonne usage: ${prefix + commandName} [CHANNEL] [EMOJI] [RÔLE] [EMOJI] [RÔLE]`);
        console.log(message)
    },
};