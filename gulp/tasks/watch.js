const gulp = require('gulp');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();


gulp.task('watch', function() {
	browserSync.init({
		notify: false,
		server: {
			baseDir: "./app"
		}
	});

	watch('./app/index.html', function() {
		browserSync.reload();
	});
	// watch for less changes
	watch('./app/assets/styles/less/**/*.less', function() {
		gulp.start('styles');
	});
	//watch for script changes
	watch('./app/assets/scripts/modules/*.js', function() {
		gulp.start('scripts-global');
	})
	watch('./app/assets/scripts/modules/style-guide/*.js', function() {
		gulp.start('scripts-global');
	})
});

/*
gulp.task('compile-less', ['styles'], function() {
	return gulp.src('app/temp/styles/global.css')
		.pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function() {
	browserSync.reload();
});
*/
