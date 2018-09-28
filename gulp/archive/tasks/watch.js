const gulp = require('gulp');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();

gulp.task('default', ['watch']);

gulp.task('watch', function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "./app/"
    }
  });
  watch('./app/index.html', () =>
  // change this to point to the file you are working on... for example ../petroleum/index.php
  // browser sync will refresh the page automatically when you build
  // also, you can copy the link into another browser and both browsers will be in sync
    browserSync.reload()
  );
	watch('./style-guide/assets/styles/**/*.less', () => gulp.start('cssInject'));
	watch('./style-guide/assets/scripts/**/*.js', () => gulp.start('scriptsRefresh'))
});

gulp.task('cssInject', ['styles'], () =>
    gulp.src('./app/temp/styles/global.css')
    .pipe(browserSync.stream())
);

gulp.task('scriptsRefresh', ['scripts'], () =>
  browserSync.reload()
);
