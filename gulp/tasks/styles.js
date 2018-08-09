const gulp = require('gulp');
//const cleanCSS = require('gulp-clean-css');
const gulpLess = require('gulp-less');
//const rename = require('gulp-rename');

gulp.task('compile-less', ['less']);
gulp.task('less', () =>
	gulp.src('./app/assets/styles/styles.css')
	.pipe(gulpLess())
//	.pipe(cleanCSS({debug: true}, function(details) {
//	  console.log(details.name + ': ' + details.stats.originalSize);
//	  console.log(details.name + ': ' + details.stats.minifiedSize);
//	}))
//	.pipe(rename('styles.min.css'))
	.pipe(gulp.dest('./app/temp/styles'))
//	.on(error, function swallowError (error) {
//		console.log(error.toString())
//		this.emit('end')
//	})	
);
