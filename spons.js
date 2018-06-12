const Discord = require('discord.js');
const clientDiscord = new Discord.Client();
const mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "sadb",
});

var prefix = ("!");
var randnum = 0;

clientDiscord.on('ready', () =>{
    console.log('Bot Ready !');
});

clientDiscord.login(process.env.TOKEN);




clientDiscord.on('message', function(message) {


        
if (!message.content.startsWith(prefix)) return;
     var args = message.content.substring(prefix.length).split(" ");
     var author = message.author.tag;
     var msg = message.content.toUpperCase();

     if(message.content == "!Fortnite"){
        message.author.sendMessage("**Voici les commandes commandes :**\n_Respectez les majuscules._\n\n!Fortnite PVE\n!Fornite 15\n!Fortnite 25\n!Fortnite 30\n!Fortnite 50\n!Fortnite 100");
        message.delete(0);      
    };
    if(message.content == "!Compte"){
            message.author.sendMessage("**Voici les commandes commandes :**\n_Respectez les majuscules._\n\n!Spotify\n!Deezer\n!Netflix\n!MyCanal\n!Crunchyroll\n!Napster\n!MalwareBytes\n!WWE");
        message.delete(0);      
    };
    if(message.content == "!VPN"){
            message.author.sendMessage("**Voici les commandes commandes :**\n_Respectez les majuscules._\n\n!IpVanish\n!HideMyAss\n!ExpressVpn\n!NordVpn\n!VyprVpn\n!ZenMate");
        message.delete(0);      
    };
    if(message.content == "!Alts"){
            message.author.sendMessage("**Voici les commandes commandes :**\n_Respectez les majuscules._\n\n!Minecraft Premium\n!Uplay\n!Origin");
        message.delete(0);      
    };
    if(message.content == "!Steam"){
            message.author.sendMessage("**Voici les commandes commandes :**\n_Respectez les majuscules._\n\n!CleSteam\n!CreditSteam 50\n!CreditSteam 100\n!CreditSteam 200");
        message.delete(0);      
    };
    if(message.content == "!Carte"){
            message.author.sendMessage("**Voici les commandes commandes :**\n_Respectez les majuscules._\n\n!Carte Cadeau");
        message.delete(0);      
    };
});
