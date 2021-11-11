module.exports = {
name: 'lastmessage',
description: 'Revoi ton derrnier message',
execute(message) {
        
            message.channel.messages.fetch({limit:2}).then(msg => {
            let lastMessage = msg.last()
            message.channel.send(lastMessage.content)           
         });
        }
    };