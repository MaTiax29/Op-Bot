const Discord = require('discord.js');
                                       
module.exports = {
    name: 'emit',
    run: async (client, message, args) => {

        client.emit('guildMemberAdd', message.member)
    }
}