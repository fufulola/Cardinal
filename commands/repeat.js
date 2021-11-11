module.exports =  {
    name: "repeat",
    description: "Demande au bot de répéter votre message",
    aliases: ['commands'],
    usage: '[command name]',
    cooldown: 5,
    execute(message, args) {
        //checking args
        if (!args.length) {
            return message.channel.send("Donner quelque chose à répéter");
        }
        
        const search = message.content.split(/\s+/g).slice(1).join(" ");
        message.channel.send(search);
        return message.delete() 
    }
}