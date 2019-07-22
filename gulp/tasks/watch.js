var gulp = require('gulp'),
	gulpLess = require('gulp-less'),
	gulpRename = require('gulp-rename'),
	gulpUglifyCSS = require('gulp-uglifycss'),
	webpack = require('webpack-stream');

	browserSync = require('browser-sync').create();

var paths = {
	styles: {
		src: './app/assets/styles/less/**/*.less',
		dest: './app/temp/styles/'
	},
	stylesPrint: {
		src: './app/assets/styles/less/print/*.less',
	},
	stylesStyleGuide: {
		src: './app/assets/styles/less/style-guide/*.less',
	},
	// temporary: reports
	stylesReports: {
		src: './app/assets/styles/less/reports/*.less',
	},
	// scripts
	scripts: {
		src: './app/assets/scripts/modules/*.js',
		dest: './app/temp/scripts/'
	},
	scriptsStyleGuide: {
		src: './app/assets/scripts/modules/style-guide/*.js',
	},
	// temporary: reports
	scriptsReports: {
		src: './app/assets/scripts/modules/reports/*.js',
	},
	scriptsHighlightSearchResults: {
		src: './app/assets/scripts/modules/legacy/*.js',
	}
}

function reload() {
	browserSync.reload();
}
function watch() {
	browserSync.init({
		server: {
			baseDir: "./app"
		}
	});
	gulp.watch(paths.styles.src, styles);
	gulp.watch(paths.stylesPrint.src, stylesPrint);
	gulp.watch(paths.stylesStyleGuide.src, stylesStyleGuide);
	gulp.watch(paths.stylesReports.src, stylesReports);
	gulp.watch(paths.scripts.src, scripts);
	gulp.watch(paths.scriptsStyleGuide.src, scriptsStyleGuide);
	gulp.watch(paths.scriptsReports.src, scriptsReports);
	gulp.watch(paths.scriptsHighlightSearchResults.src, scriptsHighlightSearchResults);
	gulp.watch("./app/*.html").on('change', browserSync.reload);
}

function styles() {
	return gulp
	.src('./app/assets/styles/global.css')
	.pipe(gulpLess())
	.pipe(gulp.dest(paths.styles.dest))
	.pipe(gulpUglifyCSS(
		{
			maxLineLen: 0,
		}
	))
	.pipe(gulpRename('global.min.css'))
	.pipe(gulp.dest(paths.styles.dest))
	.pipe(browserSync.stream());
	//console.log("uglify global: " +gulpUglifyCSS);
}


function stylesStyleGuide() {
	return gulp
	.src('./app/assets/styles/styles.css')
	.pipe(gulpLess())
	.pipe(gulp.dest(paths.styles.dest))
	.pipe(browserSync.stream());
}
function stylesReports() {
	return gulp
	.src('./app/assets/styles/reports.css')
	.pipe(gulpLess())
	.pipe(gulp.dest(paths.styles.dest))
	.pipe(gulpUglifyCSS(
		{
			maxLineLen: 0,
		}
	))
	.pipe(gulpRename('reports.min.css'))
	.pipe(gulp.dest(paths.styles.dest));
}
function stylesPrint() {
	return gulp
	.src('./app/assets/styles/print.css')
	.pipe(gulpLess())
	//.pipe(gulpRename('global.print.css'))
	.pipe(gulp.dest(paths.styles.dest))
}
function scripts() {
	return gulp
	.src('./app/assets/scripts/global.js')
	.pipe(webpack({
		mode: 'development',
		module: {
			rules: [{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}],
		}
	}))
	.on('error', console.log)
	.pipe(gulpRename('global.js'))
	.pipe(gulp.dest(paths.scripts.dest))
	.pipe(browserSync.stream());
}
function scriptsStyleGuide() {
	return gulp
	.src('./app/assets/scripts/scripts.js')
	.pipe(webpack({
		mode: 'development',
		module: {
			rules: [{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}],
		}
	}))
	.on('error', console.log)
	.pipe(gulpRename('scripts.js'))
	.pipe(gulp.dest(paths.scripts.dest))
	.pipe(browserSync.stream());
}

function scriptsReports() {
	return gulp
	.src('./app/assets/scripts/reports.js')
	.pipe(webpack({
		mode: 'development',
		module: {
			rules: [{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}],
		}
	}))
	.on('error', console.log)
	.pipe(gulpRename('reports.js'))
	.pipe(gulp.dest(paths.scripts.dest))
}

function scriptsHighlightSearchResults() {
	return gulp
	.src('./app/assets/scripts/highlight-search-results.js')
	.pipe(webpack({
		mode: 'development',
		module: {
			rules: [{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}],
		}
	}))
	.on('error', console.log)
	.pipe(gulpRename('highlight-search-results.js'))
	.pipe(gulp.dest(paths.scripts.dest))
}
gulp.task('watch', watch);