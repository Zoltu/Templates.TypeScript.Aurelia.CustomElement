var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('serve', ['build'], function(done) {
	browserSync({
		ui: false,
		open: 'local',
		startPath: 'output-sample/index.html',
		server: {
			baseDir: ['.'],
			middleware: function (request, response, next) {
				response.setHeader('Access-Control-Allow-Origin', '*');
				next();
			}
		}
	}, done);
});
