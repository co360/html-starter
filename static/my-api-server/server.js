var port = 3000;
var staticDir = ".";

var express = require("express");
var serveIndex = require('serve-index');
var fs = require('fs');
var app = express();

app.use(express.static(staticDir));
app.use(serveIndex(staticDir));

app.listen(port, () => {
    //app.use('/', express.static(__dirname + '/index.html'));


    app.get("/api/hello", (req, res) => {
        res.json({"message": "Hello World"});
    });

    // These are no longer needed since we start using "serverIndex" to allow
    // directory listing.
    // app.get("/api/countries", (req, res) => {
    //     var countries = fs.readFileSync('my-api-server/json-samples/countries.json', 'utf8');
    //     res.json(JSON.parse(countries));
    // });
    // app.get("/api/samples", (req, res) => {
    //     var file = req.query.name;
    //     var content = fs.readFileSync(file, 'utf8');
    //     res.json(JSON.parse(content));
    // });

    console.log("Server running on http://localhost:" + port);
});
