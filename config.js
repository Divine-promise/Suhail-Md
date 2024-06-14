const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349041432882";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_18_06_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMixcbiAgICAgICAgMjE5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTUsXG4gICAgICAgIDU0LFxuICAgICAgICA0MixcbiAgICAgICAgMTU1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDMzLFxuICAgICAgICAyMixcbiAgICAgICAgMTQ4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDU2LFxuICAgICAgICAxMyxcbiAgICAgICAgMixcbiAgICAgICAgNTIsXG4gICAgICAgIDcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI5LFxuICAgICAgICAzMixcbiAgICAgICAgMTU2LFxuICAgICAgICA2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTUyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTgxLFxuICAgICAgICA0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDgyLFxuICAgICAgICA1NyxcbiAgICAgICAgODQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTksXG4gICAgICAgIDUsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDgsXG4gICAgICAgIDY0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDk4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAyMixcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzksXG4gICAgICAgIDUzLFxuICAgICAgICA5NixcbiAgICAgICAgMTM3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjI4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTYwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNixcbiAgICAgICAgODMsXG4gICAgICAgIDExMixcbiAgICAgICAgOTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTksXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc1LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODAsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMTksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzksXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjcsXG4gICAgICAgIDkyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDQ3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDYwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTYyLFxuICAgICAgICA5MyxcbiAgICAgICAgODcsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDc5LFxuICAgICAgICA3OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTksXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDg5LFxuICAgICAgICAzNixcbiAgICAgICAgNixcbiAgICAgICAgMTA5LFxuICAgICAgICAzNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDU0LFxuICAgICAgICA0LFxuICAgICAgICA5OCxcbiAgICAgICAgODMsXG4gICAgICAgIDE2NixcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTksXG4gICAgICAgIDgxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjksXG4gICAgICAgIDIxNixcbiAgICAgICAgMjEyLFxuICAgICAgICA4NyxcbiAgICAgICAgMjMzLFxuICAgICAgICA2MSxcbiAgICAgICAgMjA5LFxuICAgICAgICA1NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTIzLFxuICAgICAgICA4NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjE5LFxuICAgICAgICA0MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDMzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTIsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDg3LFxuICAgICAgICAxODYsXG4gICAgICAgIDY1LFxuICAgICAgICA5MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMyxcbiAgICAgICAgMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTMzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDMzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJTNFk1V0dBVVJqSXRiM3NxRnEwYkNLa05wS1Y3NzRBdksrVW9WOVo2bkNZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI0YmtRTjd1MVRnMklxYjlRR1ZoSTVnXCIsXG4gIFwicGhvbmVJZFwiOiBcImJhMWYyNDFiLTllY2ItNDEzMi1hYTgxLTMyNjk0NWE2YzZkY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0NyxcbiAgICAgIDIzOSxcbiAgICAgIDEwNSxcbiAgICAgIDEwNyxcbiAgICAgIDE4NCxcbiAgICAgIDIsXG4gICAgICA3OSxcbiAgICAgIDE3NyxcbiAgICAgIDE3LFxuICAgICAgMjEyLFxuICAgICAgMjYsXG4gICAgICAyNTAsXG4gICAgICAxMjgsXG4gICAgICAxNjgsXG4gICAgICAyMDUsXG4gICAgICA4MSxcbiAgICAgIDUsXG4gICAgICAxMjgsXG4gICAgICAxMDYsXG4gICAgICAxMDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjgsXG4gICAgICAxMCxcbiAgICAgIDI4LFxuICAgICAgMTc1LFxuICAgICAgMTE2LFxuICAgICAgMTcyLFxuICAgICAgODYsXG4gICAgICAxNDcsXG4gICAgICAxMTgsXG4gICAgICA1OCxcbiAgICAgIDE3OCxcbiAgICAgIDE3MyxcbiAgICAgIDEyNCxcbiAgICAgIDQ1LFxuICAgICAgMjksXG4gICAgICA3NSxcbiAgICAgIDIxMixcbiAgICAgIDE1NixcbiAgICAgIDEyOSxcbiAgICAgIDExM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzTFY1UkEyWFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA0MTQzMjg4MjoyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjIyNzI4NTQ4MjkwNjIwOjI3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09tdm0vMERFTkNWc0xNR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUTI5TlAyY3ExUVlNN2kzb29hYi9admtzeE1PMFU5KzhMN0dxQWZ6SjcyUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ2NGVUcnNGYU9QWlMzQXlvNVNIL3pIOWxvcWhFUlEzMmdkekNISTUvS05qM3dSZGtDS3BYbjU5c0dvQ0FjZDExZHl4U2tJcVpZUVRrcVpWRkZOd0tEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJjcEdUcFpFaE9ab1VWY2Q4QUxWZEdDMysxOTJ6RzFFNGhocGFQUldTeVB1S0M3bVppNlBpdGhzTlZjVnpKS3VwSHhZZHJTTS9QSW91K285QW9MOW1BZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDQxNDMyODgyOjI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTgzNTY2OTJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
