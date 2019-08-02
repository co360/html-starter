/*

# Generate a optimized JS bundle file that can minimize module code.
#
# The "r.js" is actually a executable command! It will come packaged when
# you run "npm install -g requirejs"
#
# Using "r.js" command:
#   - See https://github.com/requirejs/r.js
#   - The "-o" option is for optimize
#   - The command can take RequireJS configuration as options


# Example of bundle and minify one file:
#   - The "name" is the single entry point to the application (eg: main.js)
r.js -o baseUrl=. name=js/main-config.js out=js/temp-optimized-main.js

# Example of using `build.js`:
r.js -o build.js

# Generate bundle with out minify
r.js -o build.js optimize=none

 */


/* Example of build.js */
({
    baseUrl: "js",
    paths: {
        'text': '../../resources/js/libs/require/text',
        'css': '../../resources/js/libs/require-css/css',
        'domReady': '../../resources/js/libs/require/domReady',
        //'jquery': 'empty:',
        'jquery': '../../resources/js/libs/jquery/jquery-3.4.1',
        'ckeditor': '../../resources/js/libs/ckeditor/classic/ckeditor'
    },

    shim: {
        "ckeditor": {
            exports: "ckeditor"
        }
    },

    // name: "build-main",
    name: "build-ckeditor-demo",
    out: "temp-main.js"
})

