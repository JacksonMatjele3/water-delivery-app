require("dotenv").config(); //Loads my env so I dont have to hard code them

const express = require("express");
const app = express();
const port = 3000;

const twilio = require("twilio");
const client = new twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

