module.exports = function(grunt) {
    grunt.initConfig({
        copydeps: {
            options: {
                minified: true,
                unminified: true,
                css: true,
                js: true
            },
            target: {
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
    grunt.registerTask('default', ['copydeps']);
};
