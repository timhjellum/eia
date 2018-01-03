var gulp = require('gulp'),
modernizr = require('gulp-modernizr');

gulp.task('modernizr', function() {
  return gulp.src(['./app/assets/styles/**/*.less', './app/assets/scripts/**/*.js'])
    .pipe(modernizr({
      "options": [
        "setClasses"
      ]
    }))
    .pipe(gulp.dest('../global/scripts/'))
    .pipe(gulp.dest('./app/global/vendor/'));
});