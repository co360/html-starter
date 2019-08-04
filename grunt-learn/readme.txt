## Getting Started

https://gruntjs.com/getting-started

  npm install -g grunt-cli

  cd hello

  # If there is a Gruntfile.js in place, then simple run
  # the following to get a list of all available tasks
  grunt --help

## Available Plugins

https://www.npmjs.com/search?q=keywords:gruntplugin

## How to install plugins

    # Step 1
    # npm install <module> --save-dev
    npm install grunt-contrib-clean --save-dev

    # Step 2, add following into Gruntfile.js
    grunt.loadNpmTasks('grunt-contrib-clean');

    # Step 3, add following into grunt.initConfig()
    grunt.initConfig({
        clean: {
            build: ['build']
        }
    });

    # Run it
    grunt clean

## More examples

- See ../min-web/min-web-requirejs for custom web package using grunt.
