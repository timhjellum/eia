const gulp			= require('gulp');
const gulpCleanCSS	= require('gulp-clean-css');
const gulpImagemin	= require('gulp-imagemin');
const del			= require('del');
const gulpUsemin	= require('gulp-usemin');
const gulpHTMLmin	= require('gulp-htmlmin');
const gulpRev		= require('gulp-rev');
const gulpUglify	= require('gulp-uglify-es');
const gulpUtil		= require('gulp-util');
browserSync			= require('browser-sync').create();

gulp.task('previewDist', function() {
	browserSync.init({
		notify: false,
		server: {
			baseDir: "docs"
		}
	});
});
//, ['icons']
gulp.task('deleteDistFolder', function() {
	return del("./docs");
});

gulp.task('copyGeneralFiles', ['deleteDistFolder'], function() {
	var pathsToCopy = [
		'./app/**/*',
		'!./app/index.html',
		'!./app/assets/images/**',
		'!./app/assets/styles/**',
		'!./app/assets/scripts/**',
		'!./app/temp',
		'!./app/temp/**'
	]

	return gulp.src(pathsToCopy)
		.pipe(gulp.dest("./docs"));
});

gulp.task('optimizeImages', ['deleteDistFolder'], function() {
	return gulp.src(['./app/assets/images/**/*'])
	/*
	.pipe(gulpImagemin({
      progressive: true,
      interlaced: true,
      multipass: true
	}))
	*/
	.on('error', function (err) { gulpUtil.log(gulpUtil.colors.red('[Error]'), err.toString()); })
	.pipe(gulp.dest("./docs/assets/images"));
});

gulp.task('useminTrigger', ['deleteDistFolder'], function() {
	gulp.start("usemin");
});

gulp.task('usemin', ['compile-less', 'scripts'], function() {
	return gulp.src("./app/index.html")
		.pipe(gulpUsemin({
//			css:  [function() {return gulpRev()}, function() {return gulpCleanCSS()}],
//			js:   [function() {return gulpRev()}, function() {return gulpUglify()}],
			css:  [gulpCleanCSS, gulpRev],
//			js:   [gulpUglify, gulpRev],
			html: [ function () {return gulpHTMLmin({ collapseWhitespace: true });} ],
		}))
		.on('error', function (err) { gulpUtil.log(gulpUtil.colors.red('[Error]'), err.toString()); })
		.pipe(gulp.dest("./docs"));
});









gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'optimizeImages', 'useminTrigger']);