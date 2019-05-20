## Why This `static` Folder Exists?

The `static` folder is intended to explore standalone HTML/CSS/JavaScript
features.

The difference between this `static` folder vs `src` is that
this folder is not intended to use with `ojet` command as full JET project.
We simply want to load a quick static file to test a single features.

## What Are The `../web` and `../themes` Folders For?

We often want to quickly test static HTML/CSS/JavaScript, but only with 
minimal libraries loaded. Most of the demo in this folder are standalone.
Some we will load some libraries from `../web` folder. This `../web` folder
is generated after we run `ojet build` in the parent directory for JET 
development. We can focus one static, standalone file to explore each
of those dependencies libraries here.

Here are few important third party libraries to explore:

* `../web/js/libs/require/`
* `../web/js/libs/jquery/`
* `../web/js/libs/knockout/`
* `../web/js/libs/oj/`

The OJET comes with some CSS themes that we may explore:

* `../themes/alta/web/alta.css`
* `../themes/alta/web/fonts`
* `../themes/alta/web/images`

## How to test with a web server

The `WebStorm` IDE comes with builtin web server that can test any of
html page immediately. However, it is hosted in relative to project parent (eg:
`http://localhost:63342/oject-starter`). Hence, all the examples under `static`
are setup relative to this path! If you are not running with this IDE
then you need to setup a web server with path set to this project's parent
directory. For example:

```
cd ojet-starter
python3 -m http.server -d ../
open http://localhost:8000/ojet-starter/static/ojet-html/ojet-hello.html
```
