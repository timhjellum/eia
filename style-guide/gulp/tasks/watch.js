var gulp = require('gulp'),
  watch = require('gulp-watch'),
//  connect = require('gulp-connect-php'),
  browserSync = require('browser-sync').create();





/*
gulp.task('php', function () {
  connect.server({}, function () {
    browserSync.init({
      notify: false,
      server: {
        baseDir: 'app/petroleum'

      }
    });

  });
*/
//  gulp.watch('**/*.php').on('change', function () {
//    browserSync.reload();
//  });
//});





gulp.task('watch', function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });
  //watch('./app/index.html', function() {
  watch('../index.php', function() {
    browserSync.reload();
  });
// watch styles
	watch('./app/assets/styles/**/*.less', function() { gulp.start('cssInject'); });
	watch('./app/assets/scripts/**/*.js', function() { gulp.start('scriptsRefresh'); })
});



gulp.task('cssInject', ['less'], function() {
  return gulp.src('./app/temp/styles/eia-styles.min.css')
    .pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function() {
  browserSync.reload();
});
