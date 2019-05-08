var express = require("express");
var app = express();
app.listen(3000, () => {
    app.get("/", (req, res) => {
        res.json("Hello World".split(""));
    });
    console.log("Server running on port 3000");
});
