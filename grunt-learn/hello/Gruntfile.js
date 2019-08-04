/*
Example usage:

grunt copydeps:build
grunt clean

 */
module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-copy-deps');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.initConfig({
        copydeps: {
            options: {
                minified: false,
                unminified: true
            },
            build: {
                pkg: 'package.json',
                dest: 'build/js/dependencies/'
            }
        },
        clean: {
            build: ['build']
        }
    });

    grunt.registerTask('default', 'A hello task.', function() {
        grunt.log.write('Hello World.').ok();
    });

};
