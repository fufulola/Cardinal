const Discord = require('discord.js');
const kitsu = require('node-kitsu');
var aq = require('animequote');
const fetch = require("node-fetch")

module.exports =  {
    name: "chara",
    description: "Donne un descriptif de l'animé",
    aliases: ['commands'],
    usage: "[nom du charactère]",
    cooldown: 5,
    execute(message, args) {
        if (!args.length) {
            return message.channel.send("Vous devez mettre un nom de charactère d'animé !");
        }
        const search = message.content.split(/\s+/g).slice(1).join(" ");

        kitsu.findCharacter("yagami kou new game", 0).then(results => {
            console.log(results[0])
        });

        kitsu.searchAnime(search, 0).then(result => {
            const embed = new Discord.MessageEmbed()
            .setTitle(result[0].attributes.canonicalTitle)
            .setColor(4653311)
            .addField("**Titre en Anglais :**", result[0].attributes.titles.en, true)
            .addField("**Titre en Japonais :**", result[0].attributes.titles.en_jp, true)
            .addField("**Âge conseillé :**", result[0].attributes.ageRatingGuide)
            .addField("**Nombre d'épisode :**", result[0].attributes.episodeCount, true)
            .addField("**Date de début :**", result[0].attributes.startDate, true)
            .addField("**Date de fin :**", result[0].attributes.endDate, true)
            .addField("**Status :**", result[0].attributes.status, true)
            .addField("**Synopsis :**", result[0].attributes.synopsis.replace(/<[^>]*>/g, '').split('\n')[0])
            .setAuthor("Cordance.fr", "https://www.cordance.fr/images/top-head-center-logo.png", "https://www.cordance.fr/epicka")
            .setFooter("Psico", "https://media.discordapp.net/attachments/621645025557741568/849527147269193738/058a98fe53f807a1d7fa051e8db448e2.webp")
            .setTimestamp(Date.now())
            .setImage(result[0].attributes.coverImage.original)
            .setThumbnail(result[0].attributes.posterImage.original);
            return message.channel.send(embed);
        }).catch(err => {
            console.log(err)
            return message.channel.send(`Pas de résultat pour : **${search}** !`);
        });
    }
};