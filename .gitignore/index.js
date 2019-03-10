// Package
const Discord = require('discord.js');
const economy = require('discord-eco');

// Définhir le client du serveur
const bot = new Discord.Client();

bot.on('message', message => {

    // Variables
    let prefix = ".";
    let msg = message.content.toUpperCase();

        if (message.content.toUpperCase() === `${prefix}PING`) {
            message.channel.send(`Pong !`);
        }

        if (message.content === prefix + 'balance') {

            economy.fetchBalance(message.author.id).then((i) => {
                const embed = new Discord.RichEmbed()
                    .setDescription(`**${message.guild.name} Banque**`)
                    .setColor(0xD4AF37)
                    .addField('Propriétaire',message.author.username,true)
                    .addField('Balance',i.money,true)

                message.channel.send({embed})
            })
        }
});

bot.login(process.env.TOKEN);