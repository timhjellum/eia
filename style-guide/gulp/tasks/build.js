var gulp = require('gulp');

gulp.task('copy-global-scripts', ['copy-global-styles'], function() {
  return gulp.src([
    '../global/scripts/*.js'
  ])
  .pipe(gulp.dest('./app/global/scripts'));
});

gulp.task('copy-global-styles', ['copy-vendor-files'], function() {
  return gulp.src([
    '../global/styles/eia-styles.*'
  ])
  .pipe(gulp.dest('./app/global/styles'));
});

gulp.task('copy-vendor-files', function() {
  return gulp.src([
    '../global/vendor/*.*',
    '../global/vendor/*/*.*',
    '../global/vendor/*/*/*.*',
    '../global/vendor/*/*/*/*.*'
  ])
  .pipe(gulp.dest('./app/global/vendor'));
});





















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
//    '!./app/index.html',
//    '!./app/assets/images/**',
//    '!./app/assets/styles/**',
//    '!./app/assets/scripts/**',
//    '!./app/temp',
//    '!./app/temp/**'
//  ]
//
//  return gulp.src(pathsToCopy)
//    .pipe(gulp.dest("./app/global"));
//});

//gulp.task('optimizeImages', ['deleteDistFolder'], function() {
//  return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
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
//  return gulp.src("./app/index.html")
//    .pipe(usemin({
//      css: [function() {return rev()}, function() {return cssnano()}],
//      js: [function() {return rev()}, function() {return uglify()}]
//    }))
//    .pipe(gulp.dest("./docs"));
//});

//gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'optimizeImages', 'useminTrigger']);