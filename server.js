// Dependencies
// ===========================================================
const express = require("express");
const exphbs = require("express-handlebars");
let favicon = require("serve-favicon");

let app = express();

// code needed to deploy to Heroku
const PORT = process.env.PORT || 8080;

//serve static content for the app from the "public" folder - like assets: css, images
app.use(express.static("public"));

//parse the application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// route dependency
let routes = require("./controllers/burgers_controller.js");

// port listening code
app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
