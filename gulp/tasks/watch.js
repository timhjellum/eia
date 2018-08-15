const gulp = require('gulp');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();
const log = require('fancy-log');



gulp.task('watch', function() {
	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	});

	watch('./app/index.html', function() {
		browserSync.reload();
	});
	// watch for less changes
	watch('./app/assets/styles/less/**/*.less', function() {
		gulp.start('compile-less');
	});
	//watch for script changes
	watch('./app/assets/scripts/**/*.js', function() {
		gulp.start('scriptsRefresh');
	})
	// watch for global.js changes
	watch('./app/temp/scripts/global.js', function() {
		gulp.start('deployScripts');
	});
	// watch for global.js changes
	watch('./app/temp/styles/global.css', function() {
		gulp.start('deployStyles');
	});
});













gulp.task('compile-less', ['styles'], function() {
	return gulp.src('./app/temp/styles/styles.css')
		.pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function() {
	browserSync.reload();
});
