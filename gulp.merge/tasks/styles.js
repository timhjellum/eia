const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const less = require('gulp-less');
const rename = require('gulp-rename');
const path = require('path');
const del = require('del');


//const dist = './global/styles';
//const dist = './style-guide/src/css';
const styleGuideDist = './style-guide/src/css';


// this compiles a production CSS from only the required LESS files and makes a pretty and ugly (minified) version in the global folder and style-guide folder
/*

1. Compile NEW EIA Styles [less]
	Output:
		* /global/styles/ compiled but not minimized
		* style-guide/src/css/ compiled but not minimized
		* /global/styles/ compiled and minimized

2. Compile NEW Print Styles [compile-print-less]
	Output:
		* /global/styles/ compiled but not minimized
		* style-guide/src/css/ compiled but not minimized
		* /global/styles/ compiled and minimized

3. Compile OLD Print Styles [legacy-print]
	Output:
		* /global/styles/ compiled but not minimized
		* style-guide/src/css/ compiled but not minimized
		* /global/styles/ compiled and minimized

4. Compile Style Guide Styles [compile-old-style-guide-less]
	Output:
		* style-guide/src/css/ compiled but not minimized
*/

// use for wwwdev: const dist = '//WWWDEV/website/global/styles';

const dist = './global/styles';

gulp.task('styles', ['eia-styles']);

gulp.task('eia-styles', ['eia-style-guide'], () =>
	gulp.src('./style-guide/assets/styles/global.css')
	.pipe(less())
	.pipe(gulp.dest(dist))
	.pipe(cleanCSS())
	.pipe(rename("global.min.css"))
	.pipe(gulp.dest(dist))
);

// $ npm run gulp style-guide

gulp.task('eia-style-guide', () =>
	gulp.src('./style-guide/assets/styles/eia-style-guide.css')
	.pipe(less())
	.pipe(gulp.dest(styleGuideDist))
);


// print specific files
// $ npm run gulp print

gulp.task('print', ['new-print']);

gulp.task('new-print', ['legacy-print'], () =>
	gulp.src('./style-guide/assets/styles/eia-print.css')
	.pipe(less())
	.pipe(gulp.dest(dist))
	.pipe(gulp.dest(styleGuideDist))
	.pipe(cleanCSS())
	.pipe(rename("eia-print.min.css"))
	.pipe(gulp.dest(dist))
);
gulp.task('legacy-print', () =>
	gulp.src('./style-guide/assets/styles/print.css')
	.pipe(less())
	.pipe(gulp.dest(styleGuideDist))
	.pipe(cleanCSS())
	.pipe(gulp.dest(dist))
);


gulp.task('beta', ['beta-feedback']);

gulp.task('beta-feedback', () =>
	gulp.src('./style-guide/assets/styles/beta-feedback.css')
	.pipe(less())
	.pipe(gulp.dest(styleGuideDist))
	.pipe(cleanCSS())
	.pipe(rename("beta-feedback.min.css"))
	.pipe(gulp.dest(styleGuideDist))
);



// print style-guide




// print style-guide
// $ npm run gulp special
/*
gulp.task('special', ['special-winter']);

gulp.task('special-winter', ['special-summer'], () =>
	gulp.src('./style-guide/assets/styles/winter.css')
	.pipe(less())
	.pipe(gulp.dest(styleGuideDist))
	.pipe(cleanCSS())
	.pipe(rename("winter_styles.css"))
	.pipe(gulp.dest('//WWWDEV/website/special/disruptions/socal/css'))
)
gulp.task('special-summer', () =>
	gulp.src('./style-guide/assets/styles/summer.css')
	.pipe(less())
	.pipe(gulp.dest(styleGuideDist))
	.pipe(cleanCSS())
	.pipe(rename("summer_styles.css"))
	.pipe(gulp.dest('//WWWDEV/website/special/disruptions/socal/css'))
)
*/







// this moves any vendor files from their corresponding node folders and moves them into the LESS folder for further compilation

gulp.task('import-vendor-css', ['import-vendor-js'], () =>
	gulp.src([
		'./node_modules/fancybox/dist/css/jquery.fancybox.css',
		'./node_modules/normalize.css/normalize.css'
	])
	.pipe(rename(function(opt) {
		// strip the jquery. from jquery.fancybox
		opt.basename = opt.basename.replace(/^jquery+./, '');
		// make the .css files .less files
		opt.extname = opt.extname.replace('css', 'less');
		return opt;
	}))
	// move them to vendor so they can be processed with the other .less files
	.pipe(gulp.dest('./style-guide/assets/styles/less/vendor'))
);


gulp.task('import-vendor-js', ['import-vendor-images'], () =>
	gulp.src([
		'./node_modules/jquery/dist/jquery.min.js',
		'./node_modules/jquery/jquery.js',
		'./node_modules/bxslider/dist/jquery.bxslider.js',
		'./node_modules/jquery.scrollto/jquery.scrollTo.js',
		'./node_modules/jquery.localscroll/jquery.localScroll.js',
		/*    
		'./node_modules/jquery-ui/ui/core.js',
		'./node_modules/jquery-ui/ui/data.js',
		'./node_modules/jquery-ui/ui/disable-selection.js',
		'./node_modules/jquery-ui/ui/effect.js',
		'./node_modules/jquery-ui/ui/escape-selector.js',
		'./node_modules/jquery-ui/ui/focusable.js',
		'./node_modules/jquery-ui/ui/form-reset-mixin.js',
		'./node_modules/jquery-ui/ui/form.js',
		'./node_modules/jquery-ui/ui/ie.js',
		'./node_modules/jquery-ui/ui/keycode.js',
		'./node_modules/jquery-ui/ui/labels.js',
		'./node_modules/jquery-ui/ui/plugin.js',
		'./node_modules/jquery-ui/ui/position.js',
		'./node_modules/jquery-ui/ui/safe-active-element.js',
		'./node_modules/jquery-ui/ui/safe-blur.js',
		'./node_modules/jquery-ui/ui/scroll-parent.js',
		'./node_modules/jquery-ui/ui/scroll-parent.js',
		'./node_modules/jquery-ui/ui/tabbable.js',
		'./node_modules/jquery-ui/ui/unique-id.js',
		'./node_modules/jquery-ui/ui/version.js',
		'./node_modules/jquery-ui/ui/widget.js',
		'./node_modules/jquery-ui/ui/widgets/accordion.js',
		'./node_modules/jquery-ui/ui/widgets/autocomplete.js',
		'./node_modules/jquery-ui/ui/widgets/button.js',
		'./node_modules/jquery-ui/ui/widgets/button.js',
		'./node_modules/jquery-ui/ui/widgets/checkboxradio.js',
		'./node_modules/jquery-ui/ui/widgets/controlgroup.js',
		'./node_modules/jquery-ui/ui/widgets/datepicker.js',
		'./node_modules/jquery-ui/ui/widgets/dialog.js',
		'./node_modules/jquery-ui/ui/widgets/draggable.js',
		'./node_modules/jquery-ui/ui/widgets/droppable.js',
		'./node_modules/jquery-ui/ui/widgets/menu.js',
		'./node_modules/jquery-ui/ui/widgets/mouse.js',
		'./node_modules/jquery-ui/ui/widgets/progressbar.js',
		'./node_modules/jquery-ui/ui/widgets/resizable.js',
		'./node_modules/jquery-ui/ui/widgets/selectable.js',
		'./node_modules/jquery-ui/ui/widgets/selectmenu.js',
		'./node_modules/jquery-ui/ui/widgets/slider.js',
		'./node_modules/jquery-ui/ui/widgets/sortable.js',
		'./node_modules/jquery-ui/ui/widgets/spinner.js',
		'./node_modules/jquery-ui/ui/widgets/tabs.js',
		'./node_modules/jquery-ui/ui/widgets/tooltip.js',
		*/
	])
	// move them to vendor so they can be processed with the other .less files
	.pipe(gulp.dest('./style-guide/global/vendor'))
);

// import the latest vendor images from the node_modules
// even if the images are not used we should keep them to avoid any missing file errors

gulp.task('import-vendor-images', () =>
	gulp.src([
		'./node_modules/fancybox/dist/img/*.*'
	])
	.pipe(gulp.dest('../global/img'))
);