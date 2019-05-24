## Why This `static` Folder Exists?

The `static` folder is intended to explore standalone HTML/CSS/JavaScript
features.

The difference between this `static` folder vs `src` is that
this folder is not intended to use with `ojet` command as full JET project.
We simply want to load a quick static file to test a single features.

## How To Setup Web Server For Testing

The `WebStorm` IDE comes with builtin web server that can test any of
`static` html page immediately. However, it is hosted in relative to project 
parent (eg: `http://localhost:63342/oject-starter/static`). So to reference
resources, we have two options:

Option1: Use absolute path (eg: "/oject-starter/static/js/hello.js"), or
 
Option2: Use relative path to where the "html" file is located. Most of the 
examples are using this setup.

If you are not running with this IDE, then you may also try
running this project root directory as a plain web server hosted with root 
folder.

Here is an example using Python built-in web server.
```
cd ojet-starter
python3 -m http.server -b localhost -d ".."
open http://localhost:8000/ojet-starter/static/html-learn/hello.html
```

NOTE: These will only work for "static" folder.

## What is difference between files in `ojet-starter/static/ojet-learn` vs `ojet-starter/src`?

The `ojet-starter/src` contains a full OJET project, as a full project structure. The 
`ojet-starter/static/ojet-learn` is a folder for each `html` file that can 
be run independently. You do not need to run `ojet serve` to run it. This mean
I have setup the RequireJS `paths` expliclity. This is done for quick testing purpose.


## Where are these `../../web` and `../../themes` folders from?

Many examples in this `static` folder referencese libraries from these folders.
These `web` and `theme` folders are generated after we run `ojet build`.
See `../readme.md` file for more info.
