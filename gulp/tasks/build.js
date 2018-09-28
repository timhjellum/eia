const gulp = require('gulp');
const gulpUglifyCSS = require('gulp-uglifycss');
const gulpRename = require('gulp-rename');
const gulpUglify = require('gulp-uglify');
const log = require('fancy-log');


const distScripts = '../global/scripts/';//  /global and /style-guide are at the same level so
const distStyles = '../global/styles/';//	/global and /style-guide are at the same level so
//const distScripts = './app/temp/scripts/';
//const distStyles = './app/temp/styles/';

gulp.task('deployGlobal', ['deployStyles'], function () {
	gulp.src('./app/temp/scripts/global.js')
	.pipe(gulpUglify())
	.pipe(gulpRename('global.min.js'))
	.pipe(gulp.dest('../global/scripts/'))
	log('global.min.js deployed to the global scripts folder');
});
/*
gulp.task('deployHighCharts', function () {
	gulp.src('./app/temp/scripts/highcharts.js')
	.pipe(gulpUglify())
	.pipe(gulpRename('highcharts.min.js'))
	.pipe(gulp.dest('../global/scripts/'))
	log('highcharts.min.js deployed to the global scripts folder');
});
*/
gulp.task('deployStyles', function() {
	gulp.src('./app/temp/styles/global.css')
//	.pipe(gulpUglifyCSS())
	.pipe(gulpRename('global.min.css'))
	.on('error', function(errorInfo) {
		console.log(errorInfo.toString());
		this.emit('end');
	})
	.pipe(gulp.dest('../global/styles/'))
	log('global.min.css deployed to the global styles folder');
});


gulp.task('deployScripts', ['deployGlobal'], function() {
	log('Deploy scripts COMPLETE');
});












/*
gulp.task('uglify', ['copy-global-styles'], function (cb) {
	pump([
		  gulp.src('./app/temp/global.clean.css'),
		  gulpUglify()
		  .pipe(gulpRename('global.min.css'))
		  .pipe(gulp.dest(distScripts))
	  ],
	  cb);
});
*/





/*
gulp.task('copy-vendor-files', function() {
	gulp.task('copy-global-styles', function() {
		return gulp.src([
			'./app/temp/styles/global.css'
		])
		.pipe(gulpRename('global.min.css'))
		.pipe(gulp.dest(distStyles));
	});
});
*/





















//imagemin = require('gulp-imagemin'),
//del = require('del'),
//usemin = require('gulp-usemin'),
//rev = require('gulp-rev'),
//cssnano = require('gulp-cssnano'),
//uglify = require('gulp-uglify'),
//browserSync = require('browser-sync').create();

//gulp.task('previewDist', function() {
//  browserSync.init({
//    notify: false,
//    server: {
//      baseDir: "docs"
//    }
//  });
//});

// removed task icons: gulp.task('deleteDistFolder',['icons'],  function() {
//gulp.task('deleteDistFolder',  function() {
//  return del("./docs");
//});

//gulp.task('copyGlobalFiles', function() {
//  var pathsToCopy = [
//    '../global/vendor/*'
//    '!./style-guide/index.html',
//    '!./style-guide/assets/images/**',
//    '!./style-guide/assets/styles/**',
//    '!./style-guide/assets/scripts/**',
//    '!./style-guide/temp',
//    '!./style-guide/temp/**'
//  ]
//
//  return gulp.src(pathsToCopy)
//    .pipe(gulp.dest("./style-guide/global"));
//});

//gulp.task('optimizeImages', ['deleteDistFolder'], function() {
//  return gulp.src(['./style-guide/assets/images/**/*', '!./style-guide/assets/images/icons', '!./style-guide/assets/images/icons/**/*'])
//    .pipe(imagemin({
//      progressive: true,
//      interlaced: true,
//      multipass: true
//    }))
//    .pipe(gulp.dest("./docs/assets/images"));
//});

//gulp.task('useminTrigger', ['deleteDistFolder'], function() {
//  gulp.start("usemin");
//});

//gulp.task('usemin', ['styles', 'scripts'], function() {
//  return gulp.src("./style-guide/index.html")
//    .pipe(usemin({
//      css: [function() {return rev()}, function() {return cssnano()}],
//      js: [function() {return rev()}, function() {return uglify()}]
//    }))
//    .pipe(gulp.dest("./docs"));
//});

//gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'optimizeImages', 'useminTrigger']);