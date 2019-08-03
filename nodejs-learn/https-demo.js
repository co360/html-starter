let https = require('https');
https.get("https://www.oracle.com/index.html", (data) => console.log(data));
