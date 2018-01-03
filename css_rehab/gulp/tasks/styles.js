var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var less = require('gulp-less');
var rename = require('gulp-rename');
var path = require('path');


gulp.task('less', ['copy-global-scripts'], function() {
  // compile the .less files
  return gulp.src('./app/assets/styles/eia-styles.css')
  .pipe(less())
  .pipe(gulp.dest('../global/styles'))
  .pipe(gulp.dest('app/style-guide/css'))

  .pipe(cleanCSS({debug: true}, function(details) {
    console.log(details.name + ': ' + details.stats.originalSize);
    console.log(details.name + ': ' + details.stats.minifiedSize);
  }))
  .pipe(rename("eia-styles.min.css"))
  .pipe(gulp.dest('../global/styles'))
//  .on(error, function swallowError (error) {
//      console.log(error.toString())
//      this.emit('end')
//    });
});




// run this to import the latest vendor css from the node_modules

gulp.task('import-vendor-css', ['import-vendor-js'], function() {
  return gulp.src([
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
  .pipe(gulp.dest('./app/assets/styles/less/vendor'));
});


gulp.task('import-vendor-js', ['import-vendor-images'], function() {
  return gulp.src([
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/jquery/jquery.js',
    './node_modules/bxslider/dist/jquery.bxslider.js',
//    './node_modules/jquery-ui/ui/widgets/accordion.js',
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
    */
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
  ])
  // move them to vendor so they can be processed with the other .less files
  .pipe(gulp.dest('./app/global/vendor'));
});

//, function() {
// gulp.src('./node_modules/fancybox/**/*.{gif,png}')
//  .pipe(gulp.dest('./fancybox/img'));
//});

// import the latest vendor images from the node_modules
// even if the images are not used we should keep them to avoid any missing file errors

gulp.task('import-vendor-images', function() {
  return gulp.src([
    './node_modules/fancybox/dist/img/*.*'
  ])
  .pipe(gulp.dest('../global/img'));
});











/*
gulp.task('base', function () {
  // compile the .less files
  return gulp.src('./app/assets/styles/base.css')
  .pipe(less({
    paths: [ path.join(__dirname, './app/temp/styles') ]
  }))
  .pipe(cleanCSS({debug: true}, function(details) {
    console.log(details.name + ': ' + details.stats.originalSize);
    console.log(details.name + ': ' + details.stats.minifiedSize);
  }))
  .pipe(rename("base.css"))
  .pipe(gulp.dest('./app/temp/styles/'));
});

gulp.task('header', function () {
  // compile the .less files
  return gulp.src('./app/assets/styles/header.css')
  .pipe(less({
    paths: [ path.join(__dirname, './app/temp/styles') ]
  }))
  .pipe(rename("header.css"))
  .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('stickers', function () {
  // compile the .less files
  return gulp.src('./app/assets/styles/sticker.css')
  .pipe(less({
    paths: [ path.join(__dirname, './app/temp/styles') ]
  }))
  .pipe(rename("sticker.css"))
  .pipe(gulp.dest('./app/temp/styles'));
});
*/














//postcss = require('gulp-postcss'),
//autoprefixer = require('autoprefixer'),
//cssvars = require('postcss-simple-vars'),
//nested = require('postcss-nested'),
//cssImport = require('postcss-import'),
//mixins = require('postcss-mixins'),
//hexrgba = require('postcss-hexrgba');
/*
gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer]))
    .on('error', function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
});
*/
