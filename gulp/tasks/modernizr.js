var gulp = require('gulp'),
modernizr = require('gulp-modernizr');


const archiveGlobalScriptsFolder = 'A:/global/scripts/'; // A:\css_rehab\archive\global
const adaptiveGlobalScriptsFolder = 'W:/global/scripts/'; // W:\adaptive\global
const tempScriptsFolder = './app/temp/scripts/';


gulp.task('modernizr', function() {
  return gulp.src(['./app/assets/styles/**/*.less', './app/assets/scripts/**/*.js'])
    .pipe(modernizr({
      "options": [
        "setClasses"
      ]
    }))
    .pipe(gulp.dest(adaptiveGlobalScriptsFolder))
});