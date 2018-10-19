const gulp = require('gulp');
const gulpLess = require('gulp-less');
const gulpStrip = require('gulp-strip-css-comments');
const gulpRename = require('gulp-rename');
const gulpUglifyCSS = require('gulp-uglifycss');

//const archiveFolder = 'A:/global/styles/'
//const adaptiveFolder = 'W:/global/styles/'
//const tempFolder = './app/temp/styles/'



gulp.task('style-guide', () =>
    gulp.src('./app/assets/styles/styles.css')
    .pipe(gulpLess())
    .pipe(gulpStrip())
    .pipe(gulp.dest('./app/temp/styles/'))
);
gulp.task('global', ['style-guide'], () =>
    gulp.src('./app/assets/styles/global.css')
    .pipe(gulpLess())
    .pipe(gulpStrip())
    .pipe(gulpUglifyCSS())
    .pipe(gulpRename('global.min.css'))
    .pipe(gulp.dest('./app/temp/styles/'))
);
gulp.task('styles', ['global'], () =>
    gulp.src('./app/assets/styles/global.css')
    .pipe(gulpLess())
    .pipe(gulpStrip())
    .pipe(gulp.dest('./app/temp/styles/'))
);