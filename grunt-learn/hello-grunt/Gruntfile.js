module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.initConfig({
        copy: {
            build: {
                files: [
                    {src: 'src/**', dest: 'build/', expand: true, flatten: true},
                    {src: 'node_modules/underscore/underscore.js', dest: 'build/', expand: true, flatten: true}
                ]
            }
        },
        clean: {
            build: ['build']
        }
    });

    grunt.registerTask('default', 'Clean build and copy files.', ['clean', 'copy:build']);

};
