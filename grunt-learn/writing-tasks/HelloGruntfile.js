module.exports = function(grunt) {
    grunt.registerTask('default', 'A hello task.', function() {
        grunt.log.write('Hello World.').ok();
    });
};
