module.exports = function (grunt) {

	grunt.initConfig({
		uglify: {
    			target: {
      				files: {
        					'public/a/js/portfolio.min.js': ['public/a/js/portfolio.js'],
      					'public/a/js/contact_form.min.js': ['public/a/js/contact_form.js'],
      					'public/a/js/email.min.js': ['public/a/js/email.js']
      				}
    			}
  		},
  		cssmin: {
  			target: {
    				files: {
      					'public/a/css/main.min.css': 'public/a/css/main.css'
    				},
  			}
		},
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('minify', ['uglify', 'cssmin']);
};