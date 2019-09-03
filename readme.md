## About `html-starter` Project

This project contains many sub directories to exploring standalone 
HTML/CSS/JavaScript features. 

## How To Setup Web Server For Testing

Most of the examples should open by just viewing them in your browser as 
local file!

The `WebStorm` IDE comes with builtin web server that can test any of html page immediately. 
However, it is hosted in relative to project parent folder 
(eg: `http://localhost:63342/html-starter`). So to reference resources, we have two options:

Option1: Use absolute path (eg: "/html-starter/html-learn/hello.html"), or
 
Option2: Use relative path to where the "html" file is located. Most of the 
examples are using this setup.

If you are not running with this IDE, then you may also try
running this project root directory as a plain web server hosted with root 
folder.

Here is an example using Python built-in web server.

```
cd html-starter
python3 -m http.server -b localhost
open http://localhost:8000/
```

If you want the web server to serve parent root directory (eg:
like the WebStorm would do), then you may try this:
```
cd html-starter
python3 -m http.server -b localhost -d ".."
open http://localhost:8000/html-starter/
```

## Why your repository is full of "Update" commit messages?

Well, I am lazy. :)

I know commit message should be descriptive and etc... but this repository is 
just my pet project and wasn't intended to share to the public! But since now you 
have asked nicely, I have shared with you. Now just move on!

## A todo app implemented using many frameworks

https://github.com/tastejs/todomvc/tree/master/examples

## Study Materials, Tools and References

HTML/CSS/JavaScript:
- https://developer.mozilla.org/en-US/docs/Web/
- https://learn.shayhowe.com/html-css/
- https://html-css-js.com/
- https://www.w3schools.com/html/default.asp

CDN:
- https://cdnjs.com 
- https://developers.google.com/speed/libraries

Tools
- https://www.jetbrains.com/webstorm/
- https://www.sublimetext.com/
- https://jsfiddle.net/
- https://codepen.io/

Frameworks:
- https://knockoutjs.com/
- https://requirejs.org/
- https://jquery.com/
- https://getbootstrap.com/
- https://nodejs.org/
- https://www.typescriptlang.org/

Reading Materials:
- https://developers.google.com/web
- https://css-tricks.com/guides/
- http://reddit.com/r/javascript

API Test Sites:

https://reqres.in/api/users
https://api.github.com/repositories
https://www.npmjs.com/package/couchdb


## JSFiddle.net Tool

- https://jsfiddle.net
- https://jsfiddle.net/api/user/zemian/demo/list.json
