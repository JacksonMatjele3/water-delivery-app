require("dotenv").config(); //Loads my env so I dont have to hard code them

const express = require("express");
const app = express();
const port = 3000;

const twilio = require("twilio");
const client = new twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

app.use(express.json());

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
})

app.post("/send-sms", (req, res)=>{
    const{location, date, time, phone} = req.body;
    
    const message = `Jojo Alert!\n 📍Location: ${location}\n 📅Date: ${date} \n ⏰Time: ${time}`; 

    client.messages.create({
        body: message,
        messagingServiceSid: process.env.TWILIO_MESSAGING_SERVICE_SID,
        to: phone || '+27699510889'

    }).then(()=>{
        res.json({success: true});
    })
    .catch((error)=>{
        console.error("SMS error:", error);
        res.json({success: false, error: error.message});
    });
}); 

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
})