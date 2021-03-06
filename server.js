// modules ====================================
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

// config files ====================================
var SERVER = require("./config/server.config.js");

// set port
var port = process.env.PORT || SERVER.port;

// get all data of the body (POST) parameters
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// routes ====================================
require("./app/routes")(app);

// start app ====================================
app.listen(port);

// console message
console.log(SERVER.appName + " started on port", port);

// expose app
exports = module.exports = app;