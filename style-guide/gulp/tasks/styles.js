let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let less = require('gulp-less');
let rename = require('gulp-rename');
let path = require('path');
let del = require('del');


// this compiles a production CSS from only the required LESS files and makes a pretty and ugly (minified) version in the global folder and style-guide folder
/*

1. Compile NEW EIA Styles [less]
  Output:
    * /global/styles/ compiled but not minimized
    * app/style-guide/css/ compiled but not minimized
    * /global/styles/ compiled and minimized

2. Compile NEW Print Styles [compile-print-less]
  Output:
    * /global/styles/ compiled but not minimized
    * app/style-guide/css/ compiled but not minimized
    * /global/styles/ compiled and minimized

3. Compile OLD Print Styles [compile-old-print-less]
  Output:
    * /global/styles/ compiled but not minimized
    * app/style-guide/css/ compiled but not minimized
    * /global/styles/ compiled and minimized

4. Compile Style Guide Styles [compile-old-style-guide-less]
  Output:
    * app/style-guide/css/ compiled but not minimized
*/

gulp.task('compile-eia-styles-less', ['compile-print-less'], () =>
  gulp.src('./app/assets/styles/eia-styles.css')
  .pipe(less())
  .pipe(gulp.dest('../global/styles'))
  .pipe(gulp.dest('app/style-guide/css'))
  .pipe(cleanCSS({debug: true}, (details) => {
    console.log(`${details.name}: ${details.stats.originalSize}`);
    console.log(`${details.name}: ${details.stats.minifiedSize}`);
  }))
  .pipe(rename("eia-styles.min.css"))
  .pipe(gulp.dest('../global/styles'))
);

gulp.task('compile-print-less', ['compile-old-print-less'], () =>
  gulp.src('./app/assets/styles/eia-print.css')
  .pipe(less())
  .pipe(gulp.dest('../global/styles'))
  .pipe(gulp.dest('app/style-guide/css'))
  .pipe(cleanCSS({debug: true}, (details) => {
    console.log(`${details.name}: ${details.stats.originalSize}`);
    console.log(`${details.name}: ${details.stats.minifiedSize}`);
  }))
  .pipe(rename("eia-print.min.css"))
  .pipe(gulp.dest('../global/styles'))
);

gulp.task('compile-old-print-less', ['compile-style-guide-less'], () =>
  gulp.src('../global/styles/print.css')
//  .pipe(less())
//  .pipe(gulp.dest('../global/styles'))
  .pipe(gulp.dest('app/style-guide/css'))
  .pipe(cleanCSS({debug: true}, (details) => {
    console.log(`${details.name}: ${details.stats.originalSize}`);
    console.log(`${details.name}: ${details.stats.minifiedSize}`);
  }))
//  .pipe(rename("print.min.css"))
  .pipe(gulp.dest('../global/styles'))
);

// this compiles a working CSS from ALL the LESS files and makes a pretty version for the global folder and style-guide folder

gulp.task('compile-style-guide-less', () =>
  // compile the .less files
  gulp.src('./app/assets/styles/eia-style-guide.css')
  .pipe(less())
  .pipe(gulp.dest('app/style-guide/css'))
);













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
  .pipe(gulp.dest('./app/assets/styles/less/vendor'))
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
  .pipe(gulp.dest('./app/global/vendor'))
);

// import the latest vendor images from the node_modules
// even if the images are not used we should keep them to avoid any missing file errors

gulp.task('import-vendor-images', () =>
  gulp.src([
    './node_modules/fancybox/dist/img/*.*'
  ])
  .pipe(gulp.dest('../global/img'))
);