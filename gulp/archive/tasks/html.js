const gulp = require('gulp');
const removeCode = require('gulp-remove-code');
//const less = require('gulp-less');
const rename = require('gulp-rename');
const path = require('path');
//const del = require('del');

gulp.task('html', () =>
	gulp.src('./**/includes/main-data.html')
	.pipe(removeCode({ INCconversion: true }))
	.pipe(rename('aaaaaaaaaaaaaaaaaaaaa.inc'))
	.pipe(gulp.dest(function (file) {
        return file.base;
    }))
);