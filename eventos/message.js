module.exports = async (client, message) => {

    if(!message.content.startsWith(client.config.prefix)) return; 
    if(message.author.bot) return

    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g); 
    const command = args.shift().toLowerCase()

    let cmd = client.comandos.get(command) || client.comandos.find(cmd => cmd.alias.includes(command))

    if(cmd){

        if (message.author.id !== '358425870249230337') return message.channel.send('Solo mis creadores pueden usar mis comandos')

    }

    if(!cmd) return;

    cmd.run(client, message, args);
    
}