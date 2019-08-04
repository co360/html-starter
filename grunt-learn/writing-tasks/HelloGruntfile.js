module.exports = function(grunt) {
    grunt.registerTask('default', 'A hello task.', function() {
        grunt.log.write('Hello World.').ok();
    });

    grunt.registerTask('hello2', 'Using writeln', function() {
        grunt.log.writeln('Currently running the "default" task.');
    });
};
