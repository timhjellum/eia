const gulp = require('gulp');
const backstopjs = require('backstopjs');
 
gulp.task('reference', () => backstopjs('reference'));
gulp.task('test', () => backstopjs('test'));


