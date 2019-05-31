## About `html-starter` Project

The Git repository is named `ojet-starter`, but we created this branch for 
exploring standalone HTML/CSS/JavaScript features. If you want to see OJET
related demo, see the `master` branch instead.

## How To Setup Web Server For Testing

Most of the examples should open by just opening them in your browser as 
local file!

The `WebStorm` IDE comes with builtin web server that can test any of html page immediately. 
However, it is hosted in relative to project parent folder 
(eg: `http://localhost:63342/oject-starter`). So to reference resources, we have two options:

Option1: Use absolute path (eg: "/oject-starter/html-learn/js/hello.js"), or
 
Option2: Use relative path to where the "html" file is located. Most of the 
examples are using this setup.

If you are not running with this IDE, then you may also try
running this project root directory as a plain web server hosted with root 
folder.

Here is an example using Python built-in web server.

```
cd ojet-starter
python3 -m http.server -b localhost
open http://localhost:8000/
```

If you want the web server to serve parent root directory, you may try this:
```
cd ojet-starter
python3 -m http.server -b localhost -d ".."
open http://localhost:8000/ojet-starter/
```
