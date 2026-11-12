const Discord = require('discord.js');
                                       
module.exports = {
    name: 'exec',
    run: async (client, message, args) => {

        if (!args[0]) return message.channel.send('pon algo')

        try {
            
            const date = Date.now();
            let res = require('child_process').execSync(args.join(' ')).toString();

            res = res.split('').reverse().slice(0, 1900).reverse().join('')

            message.channel.send(res, { code: 'js' }).catch(() => { })
            message.channel.send(`Time: ${Date.now() - date}`).catch(() => { })

        } catch (error) {

            message.channel.send(error, { code: 'js' }).catch(() => { });
            
        }
    }
}