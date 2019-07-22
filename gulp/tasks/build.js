var gulp = require('gulp'),
	gulpLess = require('gulp-less'),
	concat = require('gulp-concat'),
	babel = require('gulp-babel'),
	gulpUglifyCSS = require('gulp-uglifycss'),
	gulpRename = require('gulp-rename'),

	webpack = require('webpack-stream'),
	//webpack = require('webpack')
	uglify = require("uglifyjs-webpack-plugin"),
    gulpCleanCSS = require('gulp-clean-css'),
	del = require('del'),
	gulpUsemin = require('gulp-usemin'),
	gulpHTMLmin = require('gulp-htmlmin'),
	gulpRev = require('gulp-rev'),
	gulpUtil = require('gulp-util'),

	browserSync = require('browser-sync').create();

var paths = {
	styles: {
		src: './app/assets/styles/less/**/*.less',
		dest: './dist/styles/'
	},
	print: {
		src: './app/assets/styles/less/print/*.less',
		dest: './dist/styles/'
	},
	styleGuide: {
		src: './app/assets/styles/less/style-guide/*.less',
		dest: './dist/styles/'
	},
	scripts: {
		src: './app/assets/scripts/modules/*.js',
		dest: './dist/scripts/'
	},
	scriptsStyleGuide: {
		src: './app/assets/scripts/modules/style-guide/*.js',
		dest: './dist/scripts/'
	}
}

function reload() {
	browserSync.reload();
}

function previewDist() {
	browserSync.init({
		server: {
			baseDir: "./dist"
		}
	});
}

function buildStyle() {
	return gulp
		.src('./app/assets/styles/global.css')
		.pipe(gulpLess())
		.pipe(gulpUglifyCSS())
		.pipe(gulpRename('global.min.css'))
		.pipe(gulp.dest(paths.styleGuide.dest))
}

function buildStyleGuide() {
	return gulp
		.src('./app/assets/styles/styles.css')
		.pipe(gulpLess())
		.pipe(gulpUglifyCSS())
		.pipe(gulpRename('style.min.css'))
		.pipe(gulp.dest(paths.styleGuide.dest))
}

function buildPrintStyle() {
	return gulp
		.src('./app/assets/styles/print.css')
		.pipe(gulpLess())
		.pipe(gulpUglifyCSS())
		.pipe(gulpRename('global.print.min.css'))
		.pipe(gulp.dest(paths.styleGuide.dest))
}

function buildScript() {
	return gulp
	.src('./app/assets/scripts/global.js')
	.pipe(webpack({
		mode: 'production',
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
		},
		optimization: {
			minimizer: [
				  (compiler) => {
					const TerserPlugin = require('terser-webpack-plugin');
					new TerserPlugin({
						terserOptions: {
							ecma: undefined,
							  warnings: "verbose",
						parse: {
							bare_returns: false
						},
						compress: {
							warnings: "verbose",				//default: false -- display warnings when dropping unreachable code or unused declarations etc.
						},
						mangle: true, // Note `mangle.properties` is `false` by default.
						module: false,
						output: null,
						toplevel: false,
						nameCache: null,
						ie8: false,
						keep_classnames: undefined,
						keep_fnames: false,
						safari10: false,
						},
					}).apply(compiler);
				}
			],
		}
	}))
	.on('error', console.log)
	.pipe(gulpRename('global.min.js'))
	.pipe(gulp.dest(paths.scripts.dest))
	.pipe(browserSync.stream());
}

function buildStyleGuideScript() {
	return gulp
		.src('./app/assets/scripts/scripts.js')
		.pipe(webpack({
			mode: 'production',
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
			},
			optimization: {
				minimizer: [
					  (compiler) => {
						const TerserPlugin = require('terser-webpack-plugin');
						new TerserPlugin({
							terserOptions: {
								ecma: undefined,
								  warnings: "verbose",
							parse: {
								bare_returns: false
							},
							compress: {
								warnings: "verbose",				//default: false -- display warnings when dropping unreachable code or unused declarations etc.
							},
							mangle: true, // Note `mangle.properties` is `false` by default.
							module: false,
							output: null,
							toplevel: false,
							nameCache: null,
							ie8: false,
							keep_classnames: undefined,
							keep_fnames: false,
							safari10: false,
							},
						}).apply(compiler);
					}
				],
			}
		}))
		.on('error', console.log)
		.pipe(gulpRename('scripts.min.js'))
		.pipe(gulp.dest(paths.scriptsStyleGuide.dest))
		.pipe(browserSync.stream());
}



function buildHighlightSearchResults() {
	return gulp
	.src('./app/assets/scripts/highlight-search-results.js')
	.pipe(webpack({
		mode: 'production',
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
		},
		optimization: {
			minimizer: [
					(compiler) => {
					const TerserPlugin = require('terser-webpack-plugin');
					new TerserPlugin({
						terserOptions: {
							ecma: undefined,
								warnings: "verbose",
						parse: {
							bare_returns: false
						},
						compress: {
							warnings: "verbose",				//default: false -- display warnings when dropping unreachable code or unused declarations etc.
						},
						mangle: true, // Note `mangle.properties` is `false` by default.
						module: false,
						output: null,
						toplevel: false,
						nameCache: null,
						ie8: false,
						keep_classnames: undefined,
						keep_fnames: false,
						safari10: false,
						},
					}).apply(compiler);
				}
			],
		}
	}))
	.on('error', console.log)
	.pipe(gulpRename('highlight-search-results.min.js'))
	.pipe(gulp.dest(paths.scriptsStyleGuide.dest))
	//.pipe(browserSync.stream());
}



/*
(callback) {
	webpack(require('../../webpack.config.js'), function (err, stats) {
		if (err) {
			console.log(err.toString());
		}
		console.log(stats.toString());
		callback();
	});
}
*/

function deleteDistFolder() {
	return del("./dist");
}

function copyGeneralFiles() {
	var pathsToCopy = [
		'./app/**/*',
		'!./app/sitemap.html',
		'!./app/index.html',
        '!./app/base/**',
        '!./app/components/**',
        '!./app/examples/**',
        '!./app/layouts/**',
        '!./app/modules/**',
        '!./app/states/**',
		'!./app/themes/**',
        '!./app/src/**',
		'!./app/assets/images/**',
		'!./app/assets/styles/**',
		'!./app/assets/scripts/**',
		'!./app/temp/**'
	]
	return gulp
		.src(pathsToCopy)
		.pipe(gulp.dest("./dist"));
}
function usemin() {
	return gulp
	.src([
				'./app/index.html',
				'./app/sitemap.html',
        './app/base/*.html',
        './app/components/*.html',
        './app/examples/*.html',
        './app/layouts/*.html',
        './app/modules/*.html',
        './app/states/*.html',
        './app/themes/*.html',
        '!./app/**/archive/*.*'
    ],  {base: './app'}) 
		//.pipe(gulpUsemin())
		//.pipe(gulp.dest('./dist'));
	.pipe(gulpUsemin({
		css: [gulpRev],
		js: [gulpRev],
		html: [function() { return gulpHTMLmin({ collapseWhitespace: true })}]
	}))
	//.on('error', function(err) { gulpUtil.log(gulpUtil.colors.red('[Error]'), err.toString());
	.pipe(gulp.dest('./dist'));
}

gulp.task('build', gulp.series(deleteDistFolder, usemin, copyGeneralFiles, buildScript, buildStyle, buildStyleGuide, buildPrintStyle, buildStyleGuideScript, buildHighlightSearchResults, previewDist));