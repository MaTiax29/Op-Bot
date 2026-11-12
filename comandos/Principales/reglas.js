const Discord = require('discord.js');
                                       
module.exports = {
    name: 'reglas',
    alias: ['r'],
    run: async (client, message, args) => {

        let embed = new Discord.MessageEmbed()
        .setTitle('<a:8847_rules:811805518183530566> | Reglas del Servidor')
        .setDescription('**Si incumplen las reglas seran sancionados**\n\n1.- Respeto mutuo\n\n2.-Todos los comandos de los bots se tiene que usar en <#783719865051381802>\n\n3.-Si encuentran un bug en el servidor o en el bot tienen que reportar no pueden aprovecharse del bug\n\n4.-No pueden mandar ningun tipo de contenido personal o información privada\n\n5.-No pueden pasar invitaciones externas en ningun canal\n\n6.-No pueden pasar invitaciones externas en ningun canal\n\n7.-Esta totalmente prohibido suplantar la identidad de otra persona\n\n8.-No pueden mencionar al staff sin una razon valida\n\n9-.No pueden mandar ningun tipo de contenido NSFW\n\n10.-No pueden usar muchas mayúsculas y tampoco pueden repetir el mismo caracter mas de 4 veces')
        .setFooter(message.guild.name + ' | Reglas', message.guild.iconURL({ dynamic:true }))
        .setImage('https://cdn.discordapp.com/attachments/772841220237426749/812080147707461662/158_sin_titulo_20200810213055.png')
        .setColor('RANDOM')

        let channe = client.channels.cache.get('777890297065242631')

        channe.send(embed)

    }
}