const gulp = require('gulp');
const gulpCleanCSS = require('gulp-clean-css');
const gulpLess = require('gulp-less');
const gulpStrip = require('gulp-strip-css-comments');
const gulpImagemin = require('gulp-imagemin');
const del = require('del');
const gulpUsemin = require('gulp-usemin');
const gulpHTMLmin = require('gulp-htmlmin');
const gulpRev = require('gulp-rev');
const gulpUglify = require('gulp-uglify-es');
const gulpUtil = require('gulp-util');
browserSync = require('browser-sync').create();

gulp.task('previewDist', function() {
    browserSync.init({
        notify: false,
        server: {
            baseDir: "./docs/"
        }
    });
});
//, ['icons']
gulp.task('deleteDistFolder', function() {
    return del("./docs");
});

gulp.task('copyGeneralFiles', ['deleteDistFolder'], function() {
    var pathsToCopy = [
        './app/**/*',
        '!./app/index.html',
        '!./app/assets/styles/**',
        '!./app/assets/styles/**/*',
        '!./app/assets/scripts/**',
        '!./app/assets/scripts/modules/vendor/**/*',
        '!./app/temp',
        '!./app/temp/**'
    ]
    return gulp.src(pathsToCopy)
    .pipe(gulp.dest("./docs"));
});

gulp.task('optimizeImages', ['deleteDistFolder'], function() {
    return gulp.src('./app/src/images/')
        .pipe(gulpImagemin({
            progressive: true,
            interlaced: true,
            multipass: true
        }))
        .on('error', function(err) { gulpUtil.log(gulpUtil.colors.red('[Error]'), err.toString());
    })
    .pipe(gulp.dest("./docs/assets/images"));
});

gulp.task('useminTrigger', ['deleteDistFolder'], function() {
    gulp.start('usemin');
});

gulp.task('compile-production-css', () =>
    gulp.src('./app/assets/styles/styles.css')
    .pipe(gulpLess())
    .pipe(gulpStrip())
	.pipe(gulpCleanCSS({debug: true}, function(details) {
	  console.log(details.name + ': ' + details.stats.originalSize);
	  console.log(details.name + ': ' + details.stats.minifiedSize);
    }))
    .pipe(gulp.dest('./app/temp/styles/'))
);

gulp.task('compile-production-global', ['compile-production-css'], () =>
    gulp.src('./app/assets/styles/global.css')
    .pipe(gulpLess())
    .pipe(gulpStrip())
	.pipe(gulpCleanCSS({debug: true}, function(details) {
        console.log(details.name + ': ' + details.stats.originalSize);
        console.log(details.name + ': ' + details.stats.minifiedSize);
    }))
    .pipe(gulp.dest('./app/temp/styles/'))
);

gulp.task('usemin', ['compile-production-css', 'webpack'], function() {
    return gulp.src(['./app/index.html','./app/**/*.html'],  {base: './app/'}) 
        .pipe(gulpUsemin({
            css: [gulpRev],
            js: [gulpRev],
            //css: [function() { return rev()}, function() { return cssnano() }],
            //js: [function() { return gulpRev() }, function() { return gulpUglify() }],
            html: [function() { return gulpHTMLmin({ collapseWhitespace: true });
            }],
        }))
        .on('error', function(err) { gulpUtil.log(gulpUtil.colors.red('[Error]'), err.toString());
    })
    .pipe(gulp.dest("./docs"));
});

gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles', 'useminTrigger']); // 'optimizeImages',