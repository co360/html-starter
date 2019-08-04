module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.initConfig({
        clean: {
            build: ['build']
        }
    });

    grunt.registerTask('default', 'A hello task.', function() {
        grunt.log.write('Hello World.').ok();
    });

};
