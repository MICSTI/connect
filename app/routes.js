var path = require("path");
var express = require("express");

module.exports = function(app) {
    // static files =================================================
	app.use("/public", express.static("public"));
	app.use("/lib", express.static("lib"));

    // server routes ================================================
    app.get("*", function(req, res) {
        res.sendFile(path.resolve('public/views/index.html'));
    });
}