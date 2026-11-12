module.exports = async (client) => {

    client.invites = {};

    for(guild of client.guilds.cache.array()) {

        client.invites[guild.id] = await guild.fetchInvites();
        
    }

    client.user.setPresence({
        status: "dnd",
        activity: {
            name: 'a Op Bot 🙄',
            type: "WATCHING"
        }
    })

}