## Why This `static` Folder Exists?

The `static` folder is intended to explore standalone HTML/CSS/JavaScript
features.

The difference between this `static` folder vs `src` is that
this folder is not intended to use with `ojet` command as full JET project.
We simply want to load a quick static file to test a single features.

## What Are The `/ojet-starter/web` and `/ojet-starter/themes` Folders For?

We often want to quickly test static HTML/CSS/JavaScript, but only with 
minimal libraries loaded. Most of the demo in this folder are standalone.
Some we will load some libraries from `/ojet-starter/web` folder. This 
`/ojet-starter/web` folder is generated after we run `ojet build` in the parent 
directory for JET development. We can focus one static, standalone file to 
explore each of those dependencies libraries here.

Here are few important third party libraries to explore:

* `/ojet-starter/web/js/libs/require/`
* `/ojet-starter/web/js/libs/jquery/`
* `/ojet-starter/web/js/libs/knockout/`
* `/ojet-starter/web/js/libs/oj/`

The OJET comes with some CSS themes that we may explore:

* `/ojet-starter/themes/alta/web/alta.css`
* `/ojet-starter/themes/alta/web/fonts`
* `/ojet-starter/themes/alta/web/images`

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
