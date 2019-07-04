// TODO Why it only copies 'jquery.js' and not other deps?
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copydeps: {
            options: {
                minified: true,
                unminified: true,
                css: true,
                js: true
            },
            build: {
                pkg: 'package.json',
                dest: {
                    css: 'web/css/',
                    js: 'web/js/'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-copy-deps');

    // Default task(s).
    grunt.registerTask('default', ['copydeps:build']);
};
