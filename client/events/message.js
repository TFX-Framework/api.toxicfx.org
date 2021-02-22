const { MessageEmbed } = require("discord.js");
const ratetime = new Set()
const ms = require('parse-ms');
const fetch = require('node-fetch')

module.exports = async (client, message) => {
    
    let website_status;
    let loading_status;
    let music_status;
    let images_status;
    let cloud_status;
    let docs_status;
    let grim_status;
    let grim_bot_status;
    
    let offline = '🟠'
    let issues = '🟡'
    let online = '🟢'
    
    /**
    * Website Status Check
    */
    await fetch('https://toxicfx.org').then(res => {
          
       if (res.status = "200") {
            
              website_status = online
            
              return console.log(res.status)
            
          } else if(res.status = "500") {
               
              website_status = issues
               
              return console.log(res.status)
               
          } else {
            
              website_status = offline
            
              return console.log(res.status)
         }  
     });
    
    /**
    * Loading Pages Status Check
    */
    await fetch('https://toxicfx.org/loading/default').then(res => {
          
       if (res.status = "200") {
            
              loading_status = online
            
              return console.log(res.status)
            
          } else if(res.status = "500") {
               
              loading_status = issues
               
              return console.log(res.status)
               
          } else {
            
              loading_status = offline
            
              return console.log(res.status)
         }  
     });
    
    /**
    * CloudFlare Status Check
    */
    await fetch('https://www.cloudflare.com/').then(res => {
          
       if (res.status = "200") {
            
              cloud_status = online
            
              return console.log(res.status)
            
          } else if(res.status = "500") {
               
              cloud_status = issues
               
              return console.log(res.status)
               
          } else {
            
              cloud_status = offline
            
              return console.log(res.status)
         }  
     });
    
    /**
    * Music CDN Status Check
    */
    await fetch('https://toxicfx.org/music/human_ragnbone.mp3').then(res => {
          
       if (res.status = "200") {
            
              music_status = online
            
              return console.log(res.status)
            
          } else if(res.status = "500") {
               
              music_status = issues
               
              return console.log(res.status)
               
          } else {
            
              music_status = offline
            
              return console.log(res.status)
         }  
     });
    
    /**
    * Image CDN Status Check
    */
    await fetch('https://toxicfx.org/images/TFX-Transparent.png').then(res => {
          
       if (res.status = "200") {
            
              images_status = online
            
              return console.log(res.status)
            
          } else if(res.status = "500") {
               
              images_status = issues
               
              return console.log(res.status)
               
          } else {
            
              images_status = offline
            
              return console.log(res.status)
         }  
     });
    
    /**
    * Documentation Status Check
    */
    await fetch('https://help.toxicfx.org').then(res => {
          
       if (res.status = "200") {
            
              docs_status = online
            
              return console.log(res.status)
            
          } else if(res.status = "500") {
               
              docs_status = issues
               
              return console.log(res.status)
               
          } else {
            
              docs_status = offline
            
              return console.log(res.status)
         }  
     });
    
    /**
    * GrimReaper Dashboard Status Check
    */
    await fetch('https://grimreaperbot.site/').then(res => {
          
       if (res.status = "200") {
            
              grim_status = online
            
              return console.log(res.status)
            
          } else if(res.status = "500") {
               
              grim_status = issues
               
              return console.log(res.status)
               
          } else {
            
              grim_status = offline
            
              return console.log(res.status)
         }  
     });
    
    /**
    * GrimReaper Bot Status Check
    */
    await fetch('https://grimreaperbot.site/api/version/check').then(res => {
          
       if (res.status = "200") {
            
              grim_bot_status = online
            
              return console.log(res.status)
            
          } else if(res.status = "500") {
               
              grim_bot_status = issues
               
              return console.log(res.status)
               
          } else {
            
              grim_bot_status = offline
            
              return console.log(res.status)
         }  
     });

    if(message.author.bot) return;

    let ping_message = new MessageEmbed()
      .setAuthor('ToxicFX Status', 'https://toxicfx.org/images/TFX-Transparent.png')
      .setColor('#00B0E1')
      .setDescription('View the Current Status for all of our Services')
      .addField('Main Webiste', `Status: ${website_status}`, true)
      .addField('Loading Pages', `Status: ${loading_status}`, true)
      .addField('CloudFlare', `Status: ${cloud_status}`, true)
      .addField('CDN Storage', `Music: ${music_status} | Images: ${images_status}`, true)
      .addField('Documentation', `Status: ${docs_status}`, true)
      .addField('GrimReaper Bot', `Website: ${grim_status} | Bot: ${grim_bot_status}`, true)
      .setTimestamp()
      .setFooter('© 2021 ToxicFX', 'https://toxicfx.org/images/TFX-Transparent.png')
    
    if (message.content === `<@${client.user.id}>` || message.content === `<@!${client.user.id}>`) return message.channel.send(ping_message)
};
