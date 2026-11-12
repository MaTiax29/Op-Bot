const Discord = require('discord.js');

module.exports = async (client, member) => {

    if(member.guild.id !== '777890296285495296') return;

    let guildInvites = client.invites[member.guild.id];

    client.invites[member.guild.id] = await member.guild.fetchInvites()

    let invite = client.invites[member.guild.id].find((inv) => inv.uses > (guildInvites.get(inv.code) || {}).uses);

    console.log(invite);

    if(invite) {

        let logsChannel = client.channels.cache.get("796425407762530344"); 

        logsChannel.send(`${member} fue invitado por ${invite.inviter} con la invitación https://discord.gg/${invite.code}`);

    }

    const embed = new Discord.MessageEmbed()
    .setAuthor(member.user.tag, member.user.displayAvatarURL({ dynamic:true }))
    .setTitle('Bienvenido a `' + member.guild.name + '`')
    .setDescription('Hola ' + `${member}` + '\n\n● Visita <#777890297065242631> para enterarte de las reglas\n\n● Puedes obtener los roles de pings en <#791886831720333373>\n\n● Mas informacion <#815403405824229407>')
    .setImage('https://cdn.discordapp.com/attachments/772841220237426749/815981233359290368/standard.gif')
    .setColor('#0x33CFFF')

    client.channels.cache.get('777890297065242627').send(embed)
    
}