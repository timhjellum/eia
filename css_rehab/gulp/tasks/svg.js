var gulp = require('gulp');
var svgcss = require('gulp-svg-css');
var svgmin = require('gulp-svgmin');



// move this to the package.json to reactivate this module

//"gulp-svg-css": "^1.3.0",
//"gulp-svg-sprite": "^1.3.1",
//"gulp-svg2png": "^0.3.0",

gulp.task('svg', function () {
    return gulp
        .src('./app/global/images/icons/*.svg')
        .pipe(svgmin())
        .pipe(svgcss({
            fileName: 'icons',
            cssPrefix: 'icon-',
            addSize: false
    }))
    .pipe(gulp.dest('./app/global/styles'));
});
