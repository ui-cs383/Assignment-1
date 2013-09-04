module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
	    project: {
	      partials: 'partials',
	      sections: 'sections',
	    },
	    concat: {
	    	sections: {
	    		src: ['<%= project.sections %>/*.html'],
	    		dest: 'dist/index.html'
	    	},
	    	header: {
	    		src: ['<%= project.partials %>/header.html', 'dist/index.html'],
	    		dest: 'dist/index.html'
	    	},
	    	footer: {
	    		src: ['dist/index.html', '<%= project.partials %>/footer.html'],
	    		dest: 'dist/index.html'
	    	}
	    }
	});

  	grunt.registerTask('default', ['concat:sections', 'concat:header', 'concat:footer']);
};