var gulp = require('gulp'),
    webpack = require('webpack');

const gulpRename = require('gulp-rename');
const gulpUglify = require('gulp-uglify');

const archiveGlobalScriptsFolder = 'A:/global/scripts/'; // A:\css_rehab\archive\global
const adaptiveGlobalScriptsFolder = 'W:/global/scripts/'; // W:\adaptive\global
const tempScriptsFolder = './app/temp/scripts/';

gulp.task('webpack', ['modernizr'], function(callback) {
    webpack(require('../../webpack.config.js'), function(err, stats) {
        if (err) {
            console.log(err.toString());
        }

        console.log(stats.toString());
        callback();
    });
});

gulp.task('scripts', ['webpack'], () =>
    gulp.src('./app/temp/scripts/global.js')
    .pipe(gulpUglify())
    .pipe(gulpRename('global.min.js'))
    .pipe(gulp.dest(archiveGlobalScriptsFolder))
)