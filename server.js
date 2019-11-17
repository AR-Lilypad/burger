// Dependencies
// ===========================================================
const express = require("express");





// code needed to deploy to Heroku
const PORT = process.env.PORT || 8080;

let app = express();

//serve static content for the app from the "public" folder - like assets: css, images 
app.use(express.static("public"));

//parse the application body
app.use(express.urlencoded({ extended: true}));
app.use(express.json());