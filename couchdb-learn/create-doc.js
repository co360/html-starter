// TODO: Why this will not work compare to "curl" command?

let request = require("request");
let url = "http://localhost:5984/hello";
let options = {
    url: url,
    headers: {
        "Content-Type": 'application/json'
    },
    method: 'POST',
    body: '{"motto": "JS is cool."}',
};
request.put(options, (err, resp, body) => {
    //console.log(err, resp, body);
    console.log("RESULT: ", body);
});
