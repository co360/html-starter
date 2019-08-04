// TODO Why it only copies 'jquery.min.js' and not other deps?
// The work around is to use "include" and "ignore"!
module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-copy-deps');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copydeps: {
            options: {
                ignore: [ 'jquery' ],
                include: {
                    js: {
                        'requirejs/require.js': 'requirejs',
                        'knockout/build/output/**/*.js': 'knockout',
                        'jquery/dist/jquery.js': 'jquery',
                    }
                }
            },
            build: {
                pkg: 'package.json',
                dest: {
                    js: 'web/js/libs'
                }
            }
        }
    });

    // Default task(s).
    grunt.registerTask('default', ['copydeps:build']);
};
