const Discord = require('discord.js');
const client = new Discord.Client();

voiceChannel.join()
  .then(connection => {

    if (connection.channel.id ==! "703276732236693617") return;

    const ifRolePlayer =  connection.member.roles.cache.find(role => role.id === "836604962582429746");
    const ifRoleModeration =  connection.member.roles.cache.find(role => role.id === "703595932150661141");

    if(!ifRolePlayer) return;
    if(ifRoleModeration) return;

    const channelSend = connection.guild.channels.resolve('836599346031886336');

    const embed = new MessageEmbed()
      .setTitle("=== Alerte besoin d'aide ===")
      .setColor(BA55D3)
      .setDescription("<@&550441903427158046> Quelqu'un a rejoint un channel de support..");
    
   channelSend.send(embed);

  });