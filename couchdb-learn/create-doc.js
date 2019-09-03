let request = require("request");
let url = "http://127.0.0.1:5984/hello";
let options = {
    method: 'POST',
    headers: {
        "Content-Type": "application/json"
    },
    body: {
        "motto": "JS is cool."
    },
    json: true,
    url: url
};
request.put(options, (err, resp, body) => {
    //console.log(err, resp, body);
    console.log("RESULT: ", body);
});
