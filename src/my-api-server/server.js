var express = require("express");
var fs = require('fs');
var app = express();
app.listen(3000, () => {
    app.get("/", (req, res) => {
        res.json("Hello World".split(""));
    });
    app.get("/countries", (req, res) => {
        var countries = fs.readFileSync('static/json-samples/countries.json', 'utf8');
        res.json(JSON.parse(countries));
    });
    app.get("/json", (req, res) => {
        var file = req.query.file;
        var countries = fs.readFileSync(file, 'utf8');
        res.json(JSON.parse(countries));
    });

    console.log("Server running on port 3000");
});
