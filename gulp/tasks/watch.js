const gulp = require('gulp');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();

//var watchFile = '../coal/index.php';

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
	watch('./app/assets/scripts/modules/**/*.js', function() {
		gulp.start('scriptsRefresh');
	})

	// watch for global.js changes
//	watch('./app/temp/scripts/**/*js', function() {
//		gulp.start('deployScripts');
//	});
	// watch for global.css changes
//	watch('./app/temp/styles/**/*css', function() {
//		gulp.start('deployStyles');
//	});
});

/*
gulp.task('compile-less', ['styles'], function() {
	return gulp.src('app/temp/styles/global.css')
		.pipe(browserSync.stream());
});
*/
gulp.task('scriptsRefresh', ['scripts'], function() {
	browserSync.reload();
});
