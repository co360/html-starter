module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-copy-deps');

    grunt.initConfig({
        copydeps: {
            buildweb: {
                options: {
                    minified: false,
                    unminified: true,
                    // Note the task will only copy 'jquery' into parent directory
                    // and not th requirejs and knockout.
                    // Workaround is to ignore 'jquery', and manually include
                    // dependency for copying.
                    ignore: [ 'jquery' ],
                    include: {
                        js: {
                            'requirejs/require.js': 'requirejs',
                            'knockout/build/output/**/*.js': 'knockout',
                            'jquery/dist/jquery.js': 'jquery',
                        }
                    }
                },
                pkg: 'package.json',
                dest: 'web/js/libs'
            }
        }
    });

    // Default task(s).
    grunt.registerTask('default', ['copydeps:buildweb']);
};
