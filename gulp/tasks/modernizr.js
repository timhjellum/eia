var gulp = require('gulp'),
modernizr = require('gulp-modernizr');


const distScripts = '../global/scripts/';//  /global and /style-guide are at the same level so
const distStyles = '../global/styles/';//	/global and /style-guide are at the same level so
//const distScripts = './app/temp/scripts/';
//const distStyles = './app/temp/styles/';


gulp.task('modernizr', function() {
  return gulp.src(['./app/assets/styles/**/*.less', './app/assets/scripts/**/*.js'])
    .pipe(modernizr({
      "options": [
        "setClasses"
      ]
    }))
    .pipe(gulp.dest('./app/temp/scripts/'))
});