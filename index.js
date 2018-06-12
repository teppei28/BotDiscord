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

clientDiscord.login('NDUxNzE1MTY1OTQwMDg4ODM0.DgARjw.TTe4AwHsf_594I7FUZOU7dNVu7I');




clientDiscord.on('message', function(message) {

if (!message.content.startsWith(prefix)) return;
     var args = message.content.substring(prefix.length).split(" ");
     var author = message.author.tag;
     var msg = message.content.toUpperCase();
     var sam = con.query(`INSERT INTO samy (info) VALUES ('1')`)

     if(message.content.startsWith("!Stat Samy")){
        let role = message.guild.roles.find('name', 'Administrateur');
        if(message.member.roles.has(role.id)){

        message.delete(0);
        clientDiscord.channels.get("452800019695927296").send("Vos stat a été envoyé sur vos message priver.");
        message.author.sendMessage('```Nom du partenaire: Samy\n\nLiens de la chaîne:\nhttps://www.youtube.com/ \n\nInvitation: \nhttps://discord.gg/7m3DMf \n\nCode de parrainage: Samy```');
    }};

     if(message.content == "!Help"){
        let role = message.guild.roles.find('name', 'Administrateur');
        if(message.member.roles.has(role.id)){
            message.author.sendMessage("**Voici vos commandes :**\n\n!OFF : Va permettre de fermer la prise de commande\n!ON : Va permettre d'ouvrir la prise de commande\n!Edit + nom_plateforme + mention : Va permettre de confirmer la commande en attente.");
        message.delete(0);      
    }};

     if(message.content == "!OFF"){
        let role = message.guild.roles.find('name', 'Administrateur');
        if(message.member.roles.has(role.id)){
        con.query("DROP TABLE commande");
        message.delete(0);
        clientDiscord.channels.get("451085363159760898").send(author + " vient d'arreter la prise de commande.");
        clientDiscord.channels.get("450999143096123392").send("Nous venons de stopper les commandes, merci à vous.");      
    }};
    if(message.content == "!ON"){
        let role = message.guild.roles.find('name', 'Administrateur');
        if(message.member.roles.has(role.id)){
        con.query("CREATE TABLE commande (id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,plateforme VARCHAR(255), prix VARCHAR(255))");
        message.delete(0);
        clientDiscord.channels.get("451085363159760898").send(author + " vient de ractiver les commandes."); 
        clientDiscord.channels.get("450999143096123392").send("La prise de commande est ouverte, merci à vous.");   
        }  
    };

    if(message.content.startsWith("!Edit PVE")){
        let role = message.guild.roles.find('name', 'Administrateur');
        if(message.member.roles.has(role.id)){
        var Edit = message.guild.member(message.mentions.users.first());
        message.delete(0);
        clientDiscord.channels.get("452166274303131649").send('Commande de : ' + Edit + "```Plateforme: Fornite\nPrix: PVE\nStatus de la commande : Paiement confirmer```");
        if(message.mentions.users.size === 0){
            return message.channel.send("Vous devez mentionner un utilisateur.");
        }
        if(!Edit){
            return message.channel.send("L'utilisateur semble pas exister.")
        }

    }};
    if(message.content.startsWith("!Edit Fortnite 15")){
        let role = message.guild.roles.find('name', 'Administrateur');
        if(message.member.roles.has(role.id)){
        var Edit = message.guild.member(message.mentions.users.first());
        message.delete(0);
        clientDiscord.channels.get("452166274303131649").send('Commande de : ' + Edit + "```Plateforme: Fornite\nPrix: 15\nStatus de la commande : Paiement confirmer```");
        if(message.mentions.users.size === 0){
            return message.channel.send("Vous devez mentionner un utilisateur.");
        }
        
        if(!Edit){
            return message.channel.send("L'utilisateur semble pas exister.")
        }

    }};
    if(message.content.startsWith("!Edit Fortnite 25")){
        let role = message.guild.roles.find('name', 'Administrateur');
        if(message.member.roles.has(role.id)){
        var Edit = message.guild.member(message.mentions.users.first());
        message.delete(0);
        clientDiscord.channels.get("452166274303131649").send('Commande de : ' + Edit + "```Plateforme: Fornite\nPrix: 25\nStatus de la commande : Paiement confirmer```");
        if(message.mentions.users.size === 0){
            return message.channel.send("Vous devez mentionner un utilisateur.");
        }
        
        if(!Edit){
            return message.channel.send("L'utilisateur semble pas exister.")
        }

    }};
    if(message.content.startsWith("!Edit Fornite 30")){
        let role = message.guild.roles.find('name', 'Administrateur');
        if(message.member.roles.has(role.id)){
        var Edit = message.guild.member(message.mentions.users.first());
        message.delete(0);
        clientDiscord.channels.get("452166274303131649").send('Commande de : ' + Edit + "```Plateforme: Fornite\nPrix: 30\nStatus de la commande : Paiement confirmer```");
        if(message.mentions.users.size === 0){
            return message.channel.send("Vous devez mentionner un utilisateur.");
        }
        
        if(!Edit){
            return message.channel.send("L'utilisateur semble pas exister.")
        }

    }};
    if(message.content.startsWith("!Edit Fortnite 50")){
        let role = message.guild.roles.find('name', 'Administrateur');
        if(message.member.roles.has(role.id)){
        var Edit = message.guild.member(message.mentions.users.first());
        message.delete(0);
        clientDiscord.channels.get("452166274303131649").send('Commande de : ' + Edit + "```Plateforme: Fornite\nPrix: 50\nStatus de la commande : Paiement confirmer```");
        if(message.mentions.users.size === 0){
            return message.channel.send("Vous devez mentionner un utilisateur.");
        }
        
        if(!Edit){
            return message.channel.send("L'utilisateur semble pas exister.")
        }

    }};
    if(message.content.startsWith("!Edit Fortnie 100")){
        let role = message.guild.roles.find('name', 'Administrateur');
        if(message.member.roles.has(role.id)){
        var Edit = message.guild.member(message.mentions.users.first());
        message.delete(0);
        clientDiscord.channels.get("452166274303131649").send('Commande de : ' + Edit + "```Plateforme: Fornite\nPrix: 100\nStatus de la commande : Paiement confirmer```");
        if(message.mentions.users.size === 0){
            return message.channel.send("Vous devez mentionner un utilisateur.");
        }
        
        if(!Edit){
            return message.channel.send("L'utilisateur semble pas exister.")
        }

    }};
    if(message.content.startsWith("!Edit Minecraft")){
        let role = message.guild.roles.find('name', 'Administrateur');
        if(message.member.roles.has(role.id)){
        var Edit = message.guild.member(message.mentions.users.first());
        message.delete(0);
        clientDiscord.channels.get("452166274303131649").send('Commande de : ' + Edit + "```Plateforme: Fornite\nPrix: PVE\nStatus de la commande : Paiement confirmer```");
        if(message.mentions.users.size === 0){
            return message.channel.send("Vous devez mentionner un utilisateur.");
        }
        
        if(!Edit){
            return message.channel.send("L'utilisateur semble pas exister.")
        }

    }};if(message.content.startsWith("!Edit Uplay")){
        let role = message.guild.roles.find('name', 'Administrateur');
        if(message.member.roles.has(role.id)){
        var Edit = message.guild.member(message.mentions.users.first());
        message.delete(0);
        clientDiscord.channels.get("452166274303131649").send('Commande de : ' + Edit + "```Plateforme: Fornite\nPrix: PVE\nStatus de la commande : Paiement confirmer```");
        if(message.mentions.users.size === 0){
            return message.channel.send("Vous devez mentionner un utilisateur.");
        }
        
        if(!Edit){
            return message.channel.send("L'utilisateur semble pas exister.")
        }

    }};if(message.content.startsWith("!Edit Origin")){
        let role = message.guild.roles.find('name', 'Administrateur');
        if(message.member.roles.has(role.id)){
        var Edit = message.guild.member(message.mentions.users.first());
        message.delete(0);
        clientDiscord.channels.get("452166274303131649").send('Commande de : ' + Edit + "```Plateforme: Fornite\nPrix: PVE\nStatus de la commande : Paiement confirmer```");
        if(message.mentions.users.size === 0){
            return message.channel.send("Vous devez mentionner un utilisateur.");
        }
        
        if(!Edit){
            return message.channel.send("L'utilisateur semble pas exister.")
        }

    }};if(message.content.startsWith("!Edit Clé")){
        let role = message.guild.roles.find('name', 'Administrateur');
        if(message.member.roles.has(role.id)){
        var Edit = message.guild.member(message.mentions.users.first());
        message.delete(0);
        clientDiscord.channels.get("452166274303131649").send('Commande de : ' + Edit + "```Plateforme: Fornite\nPrix: PVE\nStatus de la commande : Paiement confirmer```");
        if(message.mentions.users.size === 0){
            return message.channel.send("Vous devez mentionner un utilisateur.");
        }
        
        if(!Edit){
            return message.channel.send("L'utilisateur semble pas exister.")
        }

    }};
    if(message.content.startsWith("!Edit Steam15")){
        let role = message.guild.roles.find('name', 'Administrateur');
        if(message.member.roles.has(role.id)){
        var Edit = message.guild.member(message.mentions.users.first());
        message.delete(0);
        clientDiscord.channels.get("452166274303131649").send('Commande de : ' + Edit + "```Plateforme: Fornite\nPrix: PVE\nStatus de la commande : Paiement confirmer```");
        if(message.mentions.users.size === 0){
            return message.channel.send("Vous devez mentionner un utilisateur.");
        }
        
        if(!Edit){
            return message.channel.send("L'utilisateur semble pas exister.")
        }

    }};
    if(message.content.startsWith("!Edit Steam25")){
        let role = message.guild.roles.find('name', 'Administrateur');
        if(message.member.roles.has(role.id)){
        var Edit = message.guild.member(message.mentions.users.first());
        message.delete(0);
        clientDiscord.channels.get("452166274303131649").send('Commande de : ' + Edit + "```Plateforme: Fornite\nPrix: PVE\nStatus de la commande : Paiement confirmer```");
        if(message.mentions.users.size === 0){
            return message.channel.send("Vous devez mentionner un utilisateur.");
        }
        
        if(!Edit){
            return message.channel.send("L'utilisateur semble pas exister.")
        }

    }};
    if(message.content.startsWith("!Edit Steam50")){
        let role = message.guild.roles.find('name', 'Administrateur');
        if(message.member.roles.has(role.id)){
        var Edit = message.guild.member(message.mentions.users.first());
        message.delete(0);
        clientDiscord.channels.get("452166274303131649").send('Commande de : ' + Edit + "```Plateforme: Fornite\nPrix: PVE\nStatus de la commande : Paiement confirmer```");
        if(message.mentions.users.size === 0){
            return message.channel.send("Vous devez mentionner un utilisateur.");
        }
        
        if(!Edit){
            return message.channel.send("L'utilisateur semble pas exister.")
        }

    }};
    if(message.content.startsWith("!Edit Carte")){
        let role = message.guild.roles.find('name', 'Administrateur');
        if(message.member.roles.has(role.id)){
        var Edit = message.guild.member(message.mentions.users.first());
        message.delete(0);
        clientDiscord.channels.get("452166274303131649").send('Commande de : ' + Edit + "```Plateforme: Fornite\nPrix: PVE\nStatus de la commande : Paiement confirmer```");
        if(message.mentions.users.size === 0){
            return message.channel.send("Vous devez mentionner un utilisateur.");
        }
        
        if(!Edit){
            return message.channel.send("L'utilisateur semble pas exister.")
        }

    }};
    if(message.content.startsWith("!Edit Spotify")){
        let role = message.guild.roles.find('name', 'Administrateur');
        if(message.member.roles.has(role.id)){
        var Edit = message.guild.member(message.mentions.users.first());
        message.delete(0);
        clientDiscord.channels.get("452166274303131649").send('Commande de : ' + Edit + "```Plateforme: Fornite\nPrix: PVE\nStatus de la commande : Paiement confirmer```");
        if(message.mentions.users.size === 0){
            return message.channel.send("Vous devez mentionner un utilisateur.");
        }
        
        if(!Edit){
            return message.channel.send("L'utilisateur semble pas exister.")
        }

    }};
    if(message.content.startsWith("!Edit Deezer")){
        let role = message.guild.roles.find('name', 'Administrateur');
        if(message.member.roles.has(role.id)){
        var Edit = message.guild.member(message.mentions.users.first());
        message.delete(0);
        clientDiscord.channels.get("452166274303131649").send('Commande de : ' + Edit + "```Plateforme: Fornite\nPrix: PVE\nStatus de la commande : Paiement confirmer```");
        if(message.mentions.users.size === 0){
            return message.channel.send("Vous devez mentionner un utilisateur.");
        }
        
        if(!Edit){
            return message.channel.send("L'utilisateur semble pas exister.")
        }

    }};if(message.content.startsWith("!Edit Netflix")){
        let role = message.guild.roles.find('name', 'Administrateur');
        if(message.member.roles.has(role.id)){
        var Edit = message.guild.member(message.mentions.users.first());
        message.delete(0);
        clientDiscord.channels.get("452166274303131649").send('Commande de : ' + Edit + "```Plateforme: Fornite\nPrix: PVE\nStatus de la commande : Paiement confirmer```");
        if(message.mentions.users.size === 0){
            return message.channel.send("Vous devez mentionner un utilisateur.");
        }
        
        if(!Edit){
            return message.channel.send("L'utilisateur semble pas exister.")
        }

    }};if(message.content.startsWith("!Edit MyCanal")){
        let role = message.guild.roles.find('name', 'Administrateur');
        if(message.member.roles.has(role.id)){
        var Edit = message.guild.member(message.mentions.users.first());
        message.delete(0);
        clientDiscord.channels.get("452166274303131649").send('Commande de : ' + Edit + "```Plateforme: Fornite\nPrix: PVE\nStatus de la commande : Paiement confirmer```");
        if(message.mentions.users.size === 0){
            return message.channel.send("Vous devez mentionner un utilisateur.");
        }
        
        if(!Edit){
            return message.channel.send("L'utilisateur semble pas exister.")
        }

    }};if(message.content.startsWith("!Edit Crunchyroll")){
        let role = message.guild.roles.find('name', 'Administrateur');
        if(message.member.roles.has(role.id)){
        var Edit = message.guild.member(message.mentions.users.first());
        message.delete(0);
        clientDiscord.channels.get("452166274303131649").send('Commande de : ' + Edit + "```Plateforme: Fornite\nPrix: PVE\nStatus de la commande : Paiement confirmer```");
        if(message.mentions.users.size === 0){
            return message.channel.send("Vous devez mentionner un utilisateur.");
        }
        
        if(!Edit){
            return message.channel.send("L'utilisateur semble pas exister.")
        }

    }};if(message.content.startsWith("!Edit Napster")){
        let role = message.guild.roles.find('name', 'Administrateur');
        if(message.member.roles.has(role.id)){
        var Edit = message.guild.member(message.mentions.users.first());
        message.delete(0);
        clientDiscord.channels.get("452166274303131649").send('Commande de : ' + Edit + "```Plateforme: Fornite\nPrix: PVE\nStatus de la commande : Paiement confirmer```");
        if(message.mentions.users.size === 0){
            return message.channel.send("Vous devez mentionner un utilisateur.");
        }
        
        if(!Edit){
            return message.channel.send("L'utilisateur semble pas exister.")
        }

    }};if(message.content.startsWith("!Edit MalwareBytes")){
        let role = message.guild.roles.find('name', 'Administrateur');
        if(message.member.roles.has(role.id)){
        var Edit = message.guild.member(message.mentions.users.first());
        message.delete(0);
        clientDiscord.channels.get("452166274303131649").send('Commande de : ' + Edit + "```Plateforme: Fornite\nPrix: PVE\nStatus de la commande : Paiement confirmer```");
        if(message.mentions.users.size === 0){
            return message.channel.send("Vous devez mentionner un utilisateur.");
        }
        
        if(!Edit){
            return message.channel.send("L'utilisateur semble pas exister.")
        }

    }};if(message.content.startsWith("!Edit WWE")){
        let role = message.guild.roles.find('name', 'Administrateur');
        if(message.member.roles.has(role.id)){
        var Edit = message.guild.member(message.mentions.users.first());
        message.delete(0);
        clientDiscord.channels.get("452166274303131649").send('Commande de : ' + Edit + "```Plateforme: Fornite\nPrix: PVE\nStatus de la commande : Paiement confirmer```");
        if(message.mentions.users.size === 0){
            return message.channel.send("Vous devez mentionner un utilisateur.");
        }
        
        if(!Edit){
            return message.channel.send("L'utilisateur semble pas exister.")
        }

    }};
    if(message.content.startsWith("!Edit IpVanish")){
        let role = message.guild.roles.find('name', 'Administrateur');
        if(message.member.roles.has(role.id)){
        var Edit = message.guild.member(message.mentions.users.first());
        message.delete(0);
        clientDiscord.channels.get("452166274303131649").send('Commande de : ' + Edit + "```Plateforme: Fornite\nPrix: PVE\nStatus de la commande : Paiement confirmer```");
        if(message.mentions.users.size === 0){
            return message.channel.send("Vous devez mentionner un utilisateur.");
        }
        
        if(!Edit){
            return message.channel.send("L'utilisateur semble pas exister.")
        }

    }};
    if(message.content.startsWith("!Edit HydeMyAss")){
        let role = message.guild.roles.find('name', 'Administrateur');
        if(message.member.roles.has(role.id)){
        var Edit = message.guild.member(message.mentions.users.first());
        message.delete(0);
        clientDiscord.channels.get("452166274303131649").send('Commande de : ' + Edit + "```Plateforme: Fornite\nPrix: PVE\nStatus de la commande : Paiement confirmer```");
        if(message.mentions.users.size === 0){
            return message.channel.send("Vous devez mentionner un utilisateur.");
        }
        
        if(!Edit){
            return message.channel.send("L'utilisateur semble pas exister.")
        }

    }};
    if(message.content.startsWith("!Edit ExpressVpn")){
        let role = message.guild.roles.find('name', 'Administrateur');
        if(message.member.roles.has(role.id)){
        var Edit = message.guild.member(message.mentions.users.first());
        message.delete(0);
        clientDiscord.channels.get("452166274303131649").send('Commande de : ' + Edit + "```Plateforme: Fornite\nPrix: PVE\nStatus de la commande : Paiement confirmer```");
        if(message.mentions.users.size === 0){
            return message.channel.send("Vous devez mentionner un utilisateur.");
        }
        
        if(!Edit){
            return message.channel.send("L'utilisateur semble pas exister.")
        }

    }};
    if(message.content.startsWith("!Edit NordVpn")){
        let role = message.guild.roles.find('name', 'Administrateur');
        if(message.member.roles.has(role.id)){
        var Edit = message.guild.member(message.mentions.users.first());
        message.delete(0);
        clientDiscord.channels.get("452166274303131649").send('Commande de : ' + Edit + "```Plateforme: Fornite\nPrix: PVE\nStatus de la commande : Paiement confirmer```");
        if(message.mentions.users.size === 0){
            return message.channel.send("Vous devez mentionner un utilisateur.");
        }
        
        if(!Edit){
            return message.channel.send("L'utilisateur semble pas exister.")
        }

    }};
    if(message.content.startsWith("!Edit VyprVpn")){
        let role = message.guild.roles.find('name', 'Administrateur');
        if(message.member.roles.has(role.id)){
        var Edit = message.guild.member(message.mentions.users.first());
        message.delete(0);
        clientDiscord.channels.get("452166274303131649").send('Commande de : ' + Edit + "```Plateforme: Fornite\nPrix: PVE\nStatus de la commande : Paiement confirmer```");
        if(message.mentions.users.size === 0){
            return message.channel.send("Vous devez mentionner un utilisateur.");
        }
        
        if(!Edit){
            return message.channel.send("L'utilisateur semble pas exister.")
        }

    }};
    if(message.content.startsWith("!Edit ZenMate")){
        let role = message.guild.roles.find('name', 'Administrateur');
        if(message.member.roles.has(role.id)){
        var Edit = message.guild.member(message.mentions.users.first());
        message.delete(0);
        clientDiscord.channels.get("452166274303131649").send('Commande de : ' + Edit + "```Plateforme: Fornite\nPrix: PVE\nStatus de la commande : Paiement confirmer```");
        if(message.mentions.users.size === 0){
            return message.channel.send("Vous devez mentionner un utilisateur.");
        }
        
        if(!Edit){
            return message.channel.send("L'utilisateur semble pas exister.")
        }

    }};

     if(message.content == "!Fortnite PVE"){
        con.query(`INSERT INTO commande (plateforme, prix) VALUES ('Fortnite', 'PVE')`);
        message.author.sendMessage("**Votre commande a bien été prise en compte**\n\nVeuillez patienter un administrateur vous contactera.");
        message.delete(0);
        role = message.guild.roles.find('name', 'Acheteur en attente');
        message.member.addRole(role);
        clientDiscord.channels.get("451085363159760898").send(author + ' a commandé un compte Fortnite PVE');
        clientDiscord.channels.get("452166274303131649").send('Commande de : @' + author + "```Plateforme: Fornite\nPrix: PVE\nStatus de la commande : Attente de paiement ```");      
    
    };
    
    if(message.content == "!Fortnite 15"){
        con.query(`INSERT INTO commande (plateforme, prix) VALUES ('Fortnite', '15')`)
        message.author.sendMessage("**Votre commande a bien été prise en compte**\n\nVeuillez patienter un administrateur vous contactera.");
        message.delete(0);
        role = message.guild.roles.find('name', 'Acheteur en attente');
        message.member.addRole(role);
        clientDiscord.channels.get("451085363159760898").send(author + ' a commandé un compte Fortnite à 15e');
        clientDiscord.channels.get("452166274303131649").send('Commande de : @' + author + "```Plateforme: Fornite\nPrix: 15\nStatus de la commande : Attente de paiement ```");      
    };
    if(message.content == "!Fortnite 25"){
        con.query(`INSERT INTO commande (plateforme, prix) VALUES ('Fortnite', '25')`)
        message.author.sendMessage("**Votre commande a bien été prise en compte**\n\nVeuillez patienter un administrateur vous contactera.");
        message.delete(0);
        role = message.guild.roles.find('name', 'Acheteur en attente');
        message.member.addRole(role);
        clientDiscord.channels.get("451085363159760898").send(author + ' a commandé un compte Fortnite à 25e');  
        clientDiscord.channels.get("452166274303131649").send('Commande de : @' + author + "```Plateforme: Fornite\nPrix: 25\nStatus de la commande : Attente de paiement ```");    
    };
    if(message.content == "!Fortnite 30"){
        con.query(`INSERT INTO commande (plateforme, prix) VALUES ('Fortnite', '30')`)
        message.author.sendMessage("**Votre commande a bien été prise en compte**\n\nVeuillez patienter un administrateur vous contactera.");
        message.delete(0);
        role = message.guild.roles.find('name', 'Acheteur en attente');
        message.member.addRole(role);
        clientDiscord.channels.get("451085363159760898").send(author + ' a commandé un compte Fortnite à 30e');      
        clientDiscord.channels.get("452166274303131649").send('Commande de : @' + author + "```Plateforme: Fornite\nPrix: 30\nStatus de la commande : Attente de paiement ```");
    };;
    if(message.content == "!Fortnite 50"){
        con.query(`INSERT INTO commande (plateforme, prix) VALUES ('Fortnite', '50')`)
        message.author.sendMessage("**Votre commande a bien été prise en compte**\n\nVeuillez patienter un administrateur vous contactera.");
        message.delete(0);
        role = message.guild.roles.find('name', 'Acheteur en attente');
        message.member.addRole(role);
        clientDiscord.channels.get("451085363159760898").send(author + ' a commandé un compte Fortnite à 50e');      
        clientDiscord.channels.get("452166274303131649").send('Commande de : @' + author + "```Plateforme: Fornite\nPrix: 50\nStatus de la commande : Attente de paiement ```");
    };
    if(message.content == "!Fortnite 100"){
        con.query(`INSERT INTO commande (plateforme, prix) VALUES ('Fortnite', '100')`)
        message.author.sendMessage("**Votre commande a bien été prise en compte**\n\nVeuillez patienter un administrateur vous contactera.");
        message.delete(0);
        role = message.guild.roles.find('name', 'Acheteur en attente');
        message.member.addRole(role);
        clientDiscord.channels.get("451085363159760898").send(author + ' a commandé un compte Fortnite à 100e');      
        clientDiscord.channels.get("452166274303131649").send('Commande de : @' + author + "```Plateforme: Fornite\nPrix: 100\nStatus de la commande : Attente de paiement ```");
    };
    if(message.content == "!Spotify"){
        con.query(`INSERT INTO commande (plateforme, prix) VALUES ('Spotify', '5')`)
        message.author.sendMessage("**Votre commande a bien été prise en compte**\n\nVeuillez patienter un administrateur vous contactera.");
        message.delete(0);
        role = message.guild.roles.find('name', 'Acheteur en attente');
        message.member.addRole(role);
        clientDiscord.channels.get("451085363159760898").send(author + ' a commandé un compte Spotify');      
        clientDiscord.channels.get("452166274303131649").send('Commande de : @' + author + "```Plateforme: Spotify\nPrix: 5\nStatus de la commande : Attente de paiement ```");
    };
    if(message.content == "!Deezer"){
        con.query(`INSERT INTO commande (plateforme, prix) VALUES ('Deezer', '5')`)
        message.author.sendMessage("**Votre commande a bien été prise en compte**\n\nVeuillez patienter un administrateur vous contactera.");
        message.delete(0);
        role = message.guild.roles.find('name', 'Acheteur en attente');
        message.member.addRole(role);
        clientDiscord.channels.get("451085363159760898").send(author + ' a commandé un compte Deezer');      
        clientDiscord.channels.get("452166274303131649").send('Commande de : @' + author + "```Plateforme: Deezer\nPrix: 5\nStatus de la commande : Attente de paiement ```");
    };
    if(message.content == "!Netflix"){
        con.query(`INSERT INTO commande (plateforme, prix) VALUES ('Netflix', '10')`)
        message.author.sendMessage("**Votre commande a bien été prise en compte**\n\nVeuillez patienter un administrateur vous contactera.");
        message.delete(0);
        role = message.guild.roles.find('name', 'Acheteur en attente');
        message.member.addRole(role);
        clientDiscord.channels.get("451085363159760898").send(author + ' a commandé un compte Netflix');      
        clientDiscord.channels.get("452166274303131649").send('Commande de : @' + author + "```Plateforme: Netflix\nPrix: 10\nStatus de la commande : Attente de paiement ```");
    };
    if(message.content == "!MyCanal"){
        con.query(`INSERT INTO commande (plateforme, prix) VALUES ('MyCanal', '10')`)
        message.author.sendMessage("**Votre commande a bien été prise en compte**\n\nVeuillez patienter un administrateur vous contactera.");
        message.delete(0);
        role = message.guild.roles.find('name', 'Acheteur en attente');
        message.member.addRole(role);
        clientDiscord.channels.get("451085363159760898").send(author + ' a commandé un compte MyCanal');      
        clientDiscord.channels.get("452166274303131649").send('Commande de : @' + author + "```Plateforme: MyCanal\nPrix: 10\nStatus de la commande : Attente de paiement ```");
    };
    if(message.content == "!Crunchyroll"){
        con.query(`INSERT INTO commande (plateforme, prix) VALUES ('Crunchyroll', '5')`)
        message.author.sendMessage("**Votre commande a bien été prise en compte**\n\nVeuillez patienter un administrateur vous contactera.");
        message.delete(0);
        role = message.guild.roles.find('name', 'Acheteur en attente');
        message.member.addRole(role);
        clientDiscord.channels.get("451085363159760898").send(author + ' a commandé un compte Crunchyroll');      
        clientDiscord.channels.get("452166274303131649").send('Commande de : @' + author + "```Plateforme: Crunchyroll\nPrix: 5\nStatus de la commande : Attente de paiement ```");
    };
    if(message.content == "!Napster"){
        con.query(`INSERT INTO commande (plateforme, prix) VALUES ('Napster', '5')`)
        message.author.sendMessage("**Votre commande a bien été prise en compte**\n\nVeuillez patienter un administrateur vous contactera.");
        message.delete(0);
        role = message.guild.roles.find('name', 'Acheteur en attente');
        message.member.addRole(role);
        clientDiscord.channels.get("451085363159760898").send(author + ' a commandé un compte Napster');      
        clientDiscord.channels.get("452166274303131649").send('Commande de : @' + author + "```Plateforme: Napster\nPrix: 5\nStatus de la commande : Attente de paiement ```");
    };
    if(message.content == "!MalwareBytes"){
        con.query(`INSERT INTO commande (plateforme, prix) VALUES ('MalwareBytes', '5')`)
        message.author.sendMessage("**Votre commande a bien été prise en compte**\n\nVeuillez patienter un administrateur vous contactera.");
        message.delete(0);
        role = message.guild.roles.find('name', 'Acheteur en attente');
        message.member.addRole(role);
        clientDiscord.channels.get("451085363159760898").send(author + ' a commandé un compte MalwareBytes');     
        clientDiscord.channels.get("452166274303131649").send('Commande de : @' + author + "```Plateforme: MalwareBytes\nPrix: 5\nStatus de la commande : Attente de paiement ```"); 
    };
    if(message.content == "!WWE"){
        con.query(`INSERT INTO commande (plateforme, prix) VALUES ('WWE', '3')`)
        message.author.sendMessage("**Votre commande a bien été prise en compte**\n\nVeuillez patienter un administrateur vous contactera.");
        message.delete(0);
        role = message.guild.roles.find('name', 'Acheteur en attente');
        message.member.addRole(role);
        clientDiscord.channels.get("451085363159760898").send(author + ' a commandé un compte WWE');      
        clientDiscord.channels.get("452166274303131649").send('Commande de : @' + author + "```Plateforme: WWE\nPrix: 3\nStatus de la commande : Attente de paiement ```");
    };
        if(message.content == "!IpVanish"){
            con.query(`INSERT INTO commande (plateforme, prix) VALUES ('IpVanish', '10')`);
            message.author.sendMessage("**Votre commande a bien été prise en compte**\n\nVeuillez patienter un administrateur vous contactera.");
            message.delete(0);
            role = message.guild.roles.find('name', 'Acheteur en attente');
            message.member.addRole(role);
            clientDiscord.channels.get("451085363159760898").send(author + ' a commandé un compte IpVanish');
            clientDiscord.channels.get("452166274303131649").send('Commande de : @' + author + "```Plateforme: IpVanish\nPrix: 10\nStatus de la commande : Attente de paiement ```");      
        };
        if(message.content == "!HideMyAss"){
            con.query(`INSERT INTO commande (plateforme, prix) VALUES ('HydeMyAss', '10')`);
            message.author.sendMessage("**Votre commande a bien été prise en compte**\n\nVeuillez patienter un administrateur vous contactera.");
            message.delete(0);
            role = message.guild.roles.find('name', 'Acheteur en attente');
            message.member.addRole(role);
            clientDiscord.channels.get("451085363159760898").send(author + ' a commandé un compte HideMyAss');
            clientDiscord.channels.get("452166274303131649").send('Commande de : @' + author + "```Plateforme: HydeMyAss\nPrix: 10\nStatus de la commande : Attente de paiement ```");      
        };
        if(message.content == "!ExpressVpn"){
            con.query(`INSERT INTO commande (plateforme, prix) VALUES ('ExpressVpn', '10')`);
            message.author.sendMessage("**Votre commande a bien été prise en compte**\n\nVeuillez patienter un administrateur vous contactera.");
            message.delete(0);
            role = message.guild.roles.find('name', 'Acheteur en attente');
            message.member.addRole(role);
            clientDiscord.channels.get("451085363159760898").send(author + ' a commandé un compte ExpressVpn');
            clientDiscord.channels.get("452166274303131649").send('Commande de : @' + author + "```Plateforme: ExpressVpn\nPrix: 10\nStatus de la commande : Attente de paiement ```");      
        };
        if(message.content == "!NordVpn"){
            con.query(`INSERT INTO commande (plateforme, prix) VALUES ('NordVpn', '10')`);
            message.author.sendMessage("**Votre commande a bien été prise en compte**\n\nVeuillez patienter un administrateur vous contactera.");
            message.delete(0);
            role = message.guild.roles.find('name', 'Acheteur en attente');
            message.member.addRole(role);
            clientDiscord.channels.get("451085363159760898").send(author + ' a commandé un compte NordVpn');
            clientDiscord.channels.get("452166274303131649").send('Commande de : @' + author + "```Plateforme: NordVpn\nPrix: 10\nStatus de la commande : Attente de paiement ```");      
        };
        if(message.content == "!VyprVpn"){
            con.query(`INSERT INTO commande (plateforme, prix) VALUES ('VyprVpn', '5')`);
            message.author.sendMessage("**Votre commande a bien été prise en compte**\n\nVeuillez patienter un administrateur vous contactera.");
            message.delete(0);
            role = message.guild.roles.find('name', 'Acheteur en attente');
            message.member.addRole(role);
            clientDiscord.channels.get("451085363159760898").send(author + ' a commandé un compte VyprVpn');
            clientDiscord.channels.get("452166274303131649").send('Commande de : @' + author + "```Plateforme: VyprVpn\nPrix: 5\nStatus de la commande : Attente de paiement ```");      
        };
        if(message.content == "!ZenMate"){
            con.query(`INSERT INTO commande (plateforme, prix) VALUES ('ZenMate', '3')`);
            message.author.sendMessage("**Votre commande a bien été prise en compte**\n\nVeuillez patienter un administrateur vous contactera.");
            message.delete(0);
            role = message.guild.roles.find('name', 'Acheteur en attente');
            message.member.addRole(role);
            clientDiscord.channels.get("451085363159760898").send(author + ' a commandé un compte ZenMate');
            clientDiscord.channels.get("452166274303131649").send('Commande de : @' + author + "```Plateforme: ZenMate\nPrix: 3\nStatus de la commande : Attente de paiement ```");      
        };
        if(message.content == "!Minecraft Premium"){
            con.query(`INSERT INTO commande (plateforme, prix) VALUES ('Minecraft', '5')`);
            message.author.sendMessage("**Votre commande a bien été prise en compte**\n\nVeuillez patienter un administrateur vous contactera.");
            message.delete(0);
            role = message.guild.roles.find('name', 'Acheteur en attente');
            message.member.addRole(role);
            clientDiscord.channels.get("451085363159760898").send(author + ' a commandé un compte Minecraft Premium');
            clientDiscord.channels.get("452166274303131649").send('Commande de : @' + author + "```Plateforme: Minecraft\nPrix: 5\nStatus de la commande : Attente de paiement ```");      
        };
        if(message.content == "!Uplay"){
            con.query(`INSERT INTO commande (plateforme, prix) VALUES ('Uplay', '5')`);
            message.author.sendMessage("**Votre commande a bien été prise en compte**\n\nVeuillez patienter un administrateur vous contactera.");
            message.delete(0);
            role = message.guild.roles.find('name', 'Acheteur en attente');
            message.member.addRole(role);
            clientDiscord.channels.get("451085363159760898").send(author + ' a commandé un compte Uplay');
            clientDiscord.channels.get("452166274303131649").send('Commande de : @' + author + "```Plateforme: Uplay\nPrix: 5\nStatus de la commande : Attente de paiement ```");      
        };
        if(message.content == "!Origin"){
            con.query(`INSERT INTO commande (plateforme, prix) VALUES ('Origin', '5')`);
            message.author.sendMessage("**Votre commande a bien été prise en compte**\n\nVeuillez patienter un administrateur vous contactera.");
            message.delete(0);
            role = message.guild.roles.find('name', 'Acheteur en attente');
            message.member.addRole(role);
            clientDiscord.channels.get("451085363159760898").send(author + ' a commandé un compte Origin');
            clientDiscord.channels.get("452166274303131649").send('Commande de : @' + author + "```Plateforme: Origin\nPrix: 5\nStatus de la commande : Attente de paiement ```");      
        };
        if(message.content == "!CleSteam"){
            con.query(`INSERT INTO commande (plateforme, prix) VALUES ('Steam', '10')`);
            message.author.sendMessage("**Votre commande a bien été prise en compte**\n\nVeuillez patienter un administrateur vous contactera.");
            message.delete(0);
            role = message.guild.roles.find('name', 'Acheteur en attente');
            message.member.addRole(role);
            clientDiscord.channels.get("451085363159760898").send(author + ' a commandé une clé steam');
            clientDiscord.channels.get("452166274303131649").send('Commande de : @' + author + "```Plateforme: Steam\nPrix: 10\nStatus de la commande : Attente de paiement ```");      
        };
        if(message.content == "!CreditSteam 50"){
            con.query(`INSERT INTO commande (plateforme, prix) VALUES ('Steam', '15')`);
            message.author.sendMessage("**Votre commande a bien été prise en compte**\n\nVeuillez patienter un administrateur vous contactera.");
            message.delete(0);
            role = message.guild.roles.find('name', 'Acheteur en attente');
            message.member.addRole(role);
            clientDiscord.channels.get("451085363159760898").send(author + ' a commandé des crédits steam à 15e');
            clientDiscord.channels.get("452166274303131649").send('Commande de : @' + author + "```Plateforme: Steam\nPrix: 15\nStatus de la commande : Attente de paiement ```");      
        };
        if(message.content == "!CreditSteam 100"){
            con.query(`INSERT INTO commande (plateforme, prix) VALUES ('Steam', '25')`);
            message.author.sendMessage("**Votre commande a bien été prise en compte**\n\nVeuillez patienter un administrateur vous contactera.");
            message.delete(0);
            role = message.guild.roles.find('name', 'Acheteur en attente');
            message.member.addRole(role);
            clientDiscord.channels.get("451085363159760898").send(author + ' a commandé des crédits steam à 25e');
            clientDiscord.channels.get("452166274303131649").send('Commande de : @' + author + "```Plateforme: Steam\nPrix: 25\nStatus de la commande : Attente de paiement ```");      
        };
        if(message.content == "!CreditSteam 200"){
            con.query(`INSERT INTO commande (plateforme, prix) VALUES ('Steam', '50')`);
            message.author.sendMessage("**Votre commande a bien été prise en compte**\n\nVeuillez patienter un administrateur vous contactera.");
            message.delete(0);
            role = message.guild.roles.find('name', 'Acheteur en attente');
            message.member.addRole(role);
            clientDiscord.channels.get("451085363159760898").send(author + ' a commandé des crédits steam à 50e');
            clientDiscord.channels.get("452166274303131649").send('Commande de : @' + author + "```Plateforme: Steam\nPrix: 50\nStatus de la commande : Attente de paiement ```");      
        };
        if(message.content == "!Carte Cadeau"){
            con.query(`INSERT INTO commande (plateforme, prix) VALUES ('Carte', 'Cadeau')`);
            message.author.sendMessage("**Votre commande a bien été prise en compte**\n\nVeuillez patienter un administrateur vous contactera.");
            message.delete(0);
            role = message.guild.roles.find('name', 'Acheteur en attente');
            message.member.addRole(role);
            clientDiscord.channels.get("451085363159760898").send(author + ' a commandé une carte cadeau');
            clientDiscord.channels.get("452166274303131649").send('Commande de : @' + author + "```Plateforme: Carte Cadeau\nPrix: 10\nStatus de la commande : Attente de paiement ```");      
        };
});