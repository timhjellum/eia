const gulp = require('gulp');
const gulpClean = require('gulp-clean');
const gulpUglify = require('gulp-uglify');
const gulpRename = require('gulp-rename');
//var pump = require('pump');


const distScripts = '//WWWDEV/website/css_rehab/archive/global';
const distStyles = '//WWWDEV/website/css_rehab/archive/global';


gulp.task('clean', function () {
	return gulp.src('./app/temp/global.js')
	.pipe(gulpClean({force: true}))
	.pipe(gulpRename("global.clean.css"))
	.pipe(gulp.dest('./app/temp/'));
});
gulp.task('uglify', ['clean'], function (cb) {
	pump([
		  gulp.src('./app/temp/global.clean.css'),
		  gulpUglify()
		  .pipe(gulpRename('global.min.css'))
		  .pipe(gulp.dest(distScripts))
	  ],
	  cb);
});



gulp.task('copy-global-styles', /* ['copy-vendor-files'], */ function() {
	return gulp.src([
		'.app/temp/styles/*.css'
	])
	.pipe(gulp.dest(distStyles));
});

//gulp.task('copy-vendor-files', function() {
//  return gulp.src([
//    '../global/vendor/*.*',
//    '../global/vendor/*/*.*',
//    '../global/vendor/*/*/*.*',
//    '../global/vendor/*/*/*/*.*'
//  ])
//  .pipe(gulp.dest('./style-guide/global/vendor'));
//});

gulp.task('scripts', ['clean'], ['copy-global-styles']);




















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