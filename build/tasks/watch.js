var gulp = require('gulp');
var paths = require('../paths');
var sourceTsconfig = require('../../source/tsconfig.json');
var browserSync = require('browser-sync');

function reportChange(event) {
	console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

gulp.task('watch', ['serve'], function () {
	gulp.watch(paths.ts, ['build-ts', browserSync.reload]).on('change', reportChange);
	gulp.watch(paths.css, ['build-css', browserSync.reload]).on('change', reportChange);
	gulp.watch(paths.html, ['build-html', browserSync.reload]).on('change', reportChange);
	gulp.watch(paths.sample_ts, ['build-sample-ts', browserSync.reload]).on('change', reportChange);
	gulp.watch(paths.sample_css, ['build-sample-css', browserSync.reload]).on('change', reportChange);
	gulp.watch(paths.sample_html, ['build-sample-html', browserSync.reload]).on('change', reportChange);
});
