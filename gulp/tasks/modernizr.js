var gulp = require('gulp');
const  modernizr = require('gulp-modernizr');


//const distScripts = '../global/scripts/';//  /global and /style-guide are at the same level so
//const distStyles = '../global/styles/';//	/global and /style-guide are at the same level so
//const tempFolder = './app/temp/scripts/';


gulp.task('modernizr', function() {
    return gulp.src(['./app/assets/styles/**/*.less', './app/assets/scripts/**/*.js'])
    .pipe(modernizr({
        "options": [
            "setClasses"
        ]
    }))
    .pipe(gulp.dest('./app/temp/scripts/'))
});