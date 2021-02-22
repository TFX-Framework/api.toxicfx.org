const ms = require('parse-ms');
const fetch = require('node-fetch')

async function WebsiteStatusCheck() {
     
  await fetch('https://toxicfx.org').then(res => {
          
          let offline = '🟠'
          let issues = '🟡'
          let online = '🟢'
          
          let website_status;
          
       if (res.status === "200") {
            
              website_status = online
            
              return console.log(res.status)
            
          } else if(res.status === "500") {
               
              website_status = issues
               
              return console.log(res.status)
               
       } else {
            
           website_status = offline
            
            return console.log(res.status)
       } 
          
          return website_status;
          
     });
   };
   
module.exports = {
     WebsiteStatusCheck: WebsiteStatusCheck,
     website_status: website_status
};
