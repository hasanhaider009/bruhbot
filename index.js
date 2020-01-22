const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjUxMjk1OTIxNzI4MTI2OTg3.XeY1xQ.9u4N0RK0E96Qy1Z3YEtPAqoSN8w';

const PREFIX =  '/';
const PREFIX2 = 'Nigga ';


bot.on('ready', () =>{
       
       bot.user.setActivity('building and testing', { type: "Currently"});
       bot.user.setStatus('online');
       console.log('bot is online my dudes.' );
})

bot.on('message', msg=>{
       if(msg.content.toLowerCase() === "nigga"){
              msg.reply('Sex');
       }
       if(msg.content.toLowerCase() === "hello there"){
              msg.reply('General Kenobi');
       }
       if(msg.content.toLowerCase() === "hashire sori yo"){
              msg.reply("Kaze no you ni \n Tsukimihara wo \n Padoru Padoru");
       }
       if(msg.content.toLowerCase() === "based"){
              msg.reply("and Redpilled");
       }
       if(msg.content.toLowerCase() === "ok boomer"){
              msg.reply("Ok zoomer");
       }
       if(msg.content.toLowerCase() === "retard"){
              msg.reply("faggot");
       }
       if(msg.content.toLowerCase() === "gay"){
              msg.reply("gonna cry? piss your pants maybe? maybe shit n cum");
       }
       if(msg.content.toLowerCase() === "ok zoomer"){
              msg.reply("Ok boomer");
       }

})

bot.on('message',message=>{

      let args = message.content.substring(PREFIX.length).split(" ");

      switch(args[0]){
          case 'sex':
                 message.channel.sendMessage('now')
                 break; 
          case 'waifwu':
                 message.channel.sendMessage('instagram.com/waifwu')
                 break;      
          case 'play':
                 const embed = new Discord.RichEmbed()
                 .setTitle(message.author.username)
                 .addField('Player name',message.author.username) 
                 .setThumbnail('https://i.imgur.com/aTVHIyD.jpg')  
                 .addField('ID',message.author.tag)
                 message.channel.sendEmbed(embed);  
       }
})

bot.on('message',message=>{
      let args = message.content.substring(PREFIX2.length).split(" ");

      switch(args[0].toLowerCase()){
             case 'sex':
                    message.reply("ok nigga")
                    break;
             case 'penis':
                     message.reply("non existent penis")
                     break; 

      }

})

bot.on('message', message => {
       // If the message is "what is my avatar"
       if (message.content.toLowerCase() === 'what is my avatar') {
         // Send the user's avatar URL
         message.reply(message.author.avatarURL);
       }
     });

bot.login(token);
