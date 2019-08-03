
// We need to run "npm install jquery" first before we can import this
let $ = require('jquery');

let http = require('http');

let options = {
    host: 'jquery.com',
    port: 80,
    path: '/'
};

let html = '';
http.get(options, function(res) {
    res.on('data', function(data) {
        // collect the data chunks to the variable named "html"
        html += data;
    }).on('end', function() {
        // the whole of webpage data has been collected. parsing time!
        let title = $(html).find('title').text();
        console.log(title);
    });
});
