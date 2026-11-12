module.exports = async (client, guild) => {
    client.invites[guild.id] = await guild.fetchInvites();
}