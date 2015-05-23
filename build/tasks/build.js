var gulp = require('gulp');
var paths = require('../paths');
var typescript = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var runSequence = require('run-sequence');

gulp.task('build-css', function() {
	return gulp.src(paths.css)
		.pipe(gulp.dest(paths.output));
});

gulp.task('build-html', function () {
	return gulp.src(paths.html)
		.pipe(gulp.dest(paths.output));
});

gulp.task('build-ts', function() {
	var project = typescript.createProject(paths.tsconfig, { typescript: require('typescript') });
	var result = project.src()
		.pipe(sourcemaps.init())
		.pipe(typescript(project));
	result.dts
		.pipe(gulp.dest(paths.output));
	return result.js
		.pipe(sourcemaps.write({ includeContent: true }))
		.pipe(gulp.dest(paths.output));
});

gulp.task('build-sample-css', function() {
	return gulp.src(paths.sample_css)
		.pipe(gulp.dest(paths.sample_output));
});

gulp.task('build-sample-html', function() {
	return gulp.src(paths.sample_html)
		.pipe(gulp.dest(paths.sample_output));
});

gulp.task('build-sample-ts', function() {
	var project = typescript.createProject(paths.sample_tsconfig, { typescript: require('typescript') });
	return project.src()
		.pipe(sourcemaps.init())
		.pipe(typescript(project)).js
		.pipe(sourcemaps.write({ includeContent: true }))
		.pipe(gulp.dest(paths.sample_output));
});

gulp.task('build', function(done) {
	return runSequence(
		'clean',
		['build-css', 'build-html', 'build-ts', 'build-sample-css', 'build-sample-html', 'build-sample-ts'],
		done
	);
});
