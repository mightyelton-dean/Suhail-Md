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


global.devs = "2349022718034" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349022718034";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2349064345714,2349022718034";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_50_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTcwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjA1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTI4LFxuICAgICAgICA4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDM1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDMzLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjAsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDczLFxuICAgICAgICAxMzgsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODIsXG4gICAgICAgIDM2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTksXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjUyLFxuICAgICAgICA4MixcbiAgICAgICAgMTg2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAzNixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDQxLFxuICAgICAgICAxODIsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjM0LFxuICAgICAgICA4MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDM3LFxuICAgICAgICA1MixcbiAgICAgICAgMzgsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc4LFxuICAgICAgICA1MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTMwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODIsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDcsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0LFxuICAgICAgICA5MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTM4LFxuICAgICAgICA0MixcbiAgICAgICAgMjIyLFxuICAgICAgICA2MixcbiAgICAgICAgMTA5LFxuICAgICAgICAyOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1NixcbiAgICAgICAgODYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTg1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTczLFxuICAgICAgICAxODAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjA3LFxuICAgICAgICA3NixcbiAgICAgICAgOTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyLFxuICAgICAgICAyMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDY1LFxuICAgICAgICAxODAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDY4LFxuICAgICAgICAxODcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTgyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDQsXG4gICAgICAgIDgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDk5LFxuICAgICAgICA0LFxuICAgICAgICAzNSxcbiAgICAgICAgODIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDcwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjMwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQwLFxuICAgICAgICA4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTYxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDcsXG4gICAgICAgIDgxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMixcbiAgICAgICAgMzcsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDU5LFxuICAgICAgICA5MixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMixcbiAgICAgICAgNTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTgsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJNcUtkOHVMN09JdlZyVVdHRzlmcm9Pa3RkVWFuVzY2UHhpK2R0U0NzMW5rPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIxRmdfVEdaT1QyV3lESkRpaW5yQV9BXCIsXG4gIFwicGhvbmVJZFwiOiBcImI3MmE1MDQ0LWM1MGItNGUwNC04YWZjLWU2YWQzOTA1MTFlOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MSxcbiAgICAgIDMzLFxuICAgICAgMjAsXG4gICAgICA4NixcbiAgICAgIDE4MyxcbiAgICAgIDExNSxcbiAgICAgIDI0MixcbiAgICAgIDEwNyxcbiAgICAgIDI1LFxuICAgICAgNTgsXG4gICAgICAzNixcbiAgICAgIDY4LFxuICAgICAgMTMyLFxuICAgICAgMSxcbiAgICAgIDQ5LFxuICAgICAgMjU1LFxuICAgICAgMjI3LFxuICAgICAgMjEzLFxuICAgICAgMjI0LFxuICAgICAgMjAwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NSxcbiAgICAgIDEwNCxcbiAgICAgIDM4LFxuICAgICAgMjA4LFxuICAgICAgMTM2LFxuICAgICAgMjQ3LFxuICAgICAgMTMsXG4gICAgICAyOCxcbiAgICAgIDE0MSxcbiAgICAgIDE2OSxcbiAgICAgIDEzMSxcbiAgICAgIDE0OCxcbiAgICAgIDIxNyxcbiAgICAgIDI0NCxcbiAgICAgIDczLFxuICAgICAgMTk5LFxuICAgICAgMTU2LFxuICAgICAgMjI1LFxuICAgICAgMTkzLFxuICAgICAgMTQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjZRM1dQVFpFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDIyNzE4MDM0OjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiSGFyc2ggVHZcIixcbiAgICBcImxpZFwiOiBcIjE1MDgwNTM3ODI4NTYwNzoxOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQV1kwT3dIRU1xVG5iVUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkxMMXdKeEVBSmpiaHVJZFVVZDVhWHFHV2cxdEM5TFhyemh6cHR1alBJem89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicEduVWx2SWlWYWJqcnZJeEd2YUVDbVpSRUxiSlVGcDBNMGpEaGhFYTYxelhxTW5YMjJrQjZTT1VsSUE4OXdvOW5jeU0rODNQb1EzNEhxUlFXN0NwREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWmoxcGlDTzFpOXhCc1U4eFZQV05lWnc2eUM1M0xKazhpdU5yZFM1V0pTaWVZSjBrSVlHUzBOb1hoc0UvNWFyZk1tNmgzR2Y4SmI4cW9nQmlCQm5GaHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAyMjcxODAzNDoxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA1OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMjM5NDM3XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
