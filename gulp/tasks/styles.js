const gulp = require('gulp');
const gulpLess = require('gulp-less');
const gulpStrip = require('gulp-strip-css-comments');
const gulpRename = require('gulp-rename');
const gulpUglifyCSS = require('gulp-uglifycss');

const archiveGlobalStylesFolder = 'A:/global/styles/'; // A:\css_rehab\archive\global
const adaptiveGlobalStylesFolder = 'W:/global/styles/'; // W:\adaptive\global
const tempStylesFolder = './app/temp/styles/';
const wwwDevFolder = 'Z:/global/styles/'; // A:\css_rehab\archive\global


gulp.task('print-nat-gas', () =>
gulp.src('./app/assets/styles/print.css')
.pipe(gulpLess())
.pipe(gulpStrip())
.pipe(gulpUglifyCSS())
.pipe(gulpRename('print-nat-gas.min.css'))
.pipe(gulp.dest(tempStylesFolder))
);
gulp.task('style-guide', ['print-nat-gas'], () =>
    gulp.src('./app/assets/styles/styles.css')
    .pipe(gulpLess())
    .pipe(gulpStrip())
    .pipe(gulp.dest(tempStylesFolder))
);
gulp.task('global', ['style-guide'], () =>
    gulp.src('./app/assets/styles/global.css')
    .pipe(gulpLess())
    .pipe(gulpStrip())
    .pipe(gulpUglifyCSS())
    .pipe(gulpRename('global.min.css'))
    .pipe(gulp.dest(tempStylesFolder))
);
gulp.task('styles', ['global'], () =>
    gulp.src('./app/assets/styles/global.css')
    .pipe(gulpLess())
    .pipe(gulpStrip())
    .pipe(gulp.dest(tempStylesFolder))
);