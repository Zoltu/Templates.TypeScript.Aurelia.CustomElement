var gulp = require('gulp');
var paths = require('../paths');
var vinylPaths = require('vinyl-paths');
var del = require('del');

gulp.task('clean', function() {
	return gulp.src([paths.output, paths.sample_output])
		.pipe(vinylPaths(del));
});
