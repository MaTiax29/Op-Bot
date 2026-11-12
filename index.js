require("http").createServer((req, res) => res.end("OK.")).listen(process.env.PORT)
 
require('dotenv').config()
///////////////////////EMPIEZA/TU/BOT//////////////////////////////
const Discord = require('discord.js');
const client = new Discord.Client();
client.config = require('./config.js'); 
client.comandos = new Discord.Collection();

let { readdirSync } = require('fs');

for(const subcarpet of readdirSync('./comandos/')) {

    for(const file of readdirSync(`./comandos/${subcarpet}`)){

        if(file.endsWith(".js")) {

            let fileName = file.substring(0, file.length - 3);

            let fileContents = require(`./comandos/${subcarpet}/${file}`);

            client.comandos.set(fileName, fileContents);

        }
    }
}

for(const file of readdirSync('./eventos/')) {

    let fileName = file.substring(0, file.length - 3); 

    let fileContents = require(`./eventos/${file}`);

    client.on(fileName, fileContents.bind(null, client));
    
}

client.login(process.env.token).then(() => {
    console.log(`Estoy listo, soy ${client.user.tag}`)
}).catch((err) => {
    console.log('Error al iniciar sesion: ' + err)
})