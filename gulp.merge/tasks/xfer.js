const gulp = require('gulp');
const del = require('del');
const path = require('path');
const rename = require('gulp-rename');

//const source = '.';
//const destination = '//WWWdev/website';

// dev to adaptive
const source = 'A:/';
const destination = 'Z:/';

// adaptive to production
//const source = 'W:/';
//const destination = 'X:/';

gulp.task('xfer', function() {
    
    /*
    gulp.src('index.php')
    .pipe(gulp.dest(destination)),

    gulp.src(source + 'global/header/includes/header.inc')
    .pipe(gulp.dest(destination + 'global/header/includes/'))

    gulp.src(source + 'global/footer/includes/footer.inc')
    .pipe(gulp.dest(destination + 'global/footer/includes/')),

    gulp.src(source + 'global/head/includes/head.inc')
    .pipe(gulp.dest(destination + 'global/head/includes/')),
    */
    
    
    
    
    
    gulp.src(source + 'global/scripts/global.min.js')
    .pipe(gulp.dest(destination + 'global/scripts/')),
    gulp.src(source + 'global/scripts/modernizr.min.js')
    .pipe(gulp.dest(destination + 'global/scripts/')),
    gulp.src(source + 'global/styles/global.min.css')
    .pipe(gulp.dest(destination + 'global/styles/'))





    /*





    gulp.src(source + 'global/images/consumption/*.png')
    .pipe(gulp.dest(destination + 'global/images/consumption/')),

    gulp.src(source + 'global/images/energy-education/*.png')
    .pipe(gulp.dest(destination + 'global/images/energy-education/')),

    gulp.src(source + 'global/images/interactive/*.png')
    .pipe(gulp.dest(destination + 'global/images/interactive/')),

    gulp.src(source + 'global/images/energy-education/*.png')
    .pipe(gulp.dest(destination + 'global/images/energy-education/')),

    gulp.src(source + 'global/analysis-projections/*.inc')
    .pipe(gulp.dest(destination + 'global/analysis-projections/')),

    //gulp.src(source + 'homepage/includes/data-highlights.inc')
    //.pipe(rename('energy-kids.inc'))
    //.pipe(gulp.dest(destination + 'homepage/includes/')),
    gulp.src(source + 'homepage/includes/energy-kids.inc')    
//    .pipe(rename('energy-kids.inc'))
    .pipe(gulp.dest(destination + 'homepage/includes/')),

    // home
    // home
    // home

    gulp.src(source + 'homepage/includes/especially-for.inc')   
//    .pipe(rename('especially-for.inc'))
    .pipe(gulp.dest(destination + 'homepage/includes/')),

    gulp.src(source + 'homepage/includes/whats-new.inc')    
//    .pipe(rename('whats-new.inc'))
    .pipe(gulp.dest(destination + 'homepage/includes/')),

    gulp.src(source + 'homepage/includes/top-picks.inc')    
//    .pipe(rename('top-picks.inc'))
    .pipe(gulp.dest(destination + 'homepage/includes/')),

    //gulp.src(source + 'homepage/includes/today-in-energy.inc')    
    //.pipe(rename('today-in-energy.inc'))
    //.pipe(gulp.dest(destination + 'homepage/includes/')),

    gulp.src(source + 'homepage/includes/outlooks.inc')    
//    .pipe(rename('outlooks.inc'))
    .pipe(gulp.dest(destination + 'homepage/includes/')),

    gulp.src(source + 'homepage/includes/our-experts-speak.inc')    
//    .pipe(rename('our-experts-speak.inc'))
    .pipe(gulp.dest(destination + 'homepage/includes/')),

    gulp.src(source + 'homepage/includes/learn-about-energy.inc')    
//    .pipe(rename('learn-about-energy.inc'))
    .pipe(gulp.dest(destination + 'homepage/includes/')),

    // analysis
    // analysis
    // analysis

    gulp.src(source + 'analysis/includes/weeklies.inc')
    .pipe(gulp.dest(destination + 'analysis/includes/')),
    gulp.src(source + 'analysis/includes/visualizations.inc')
    .pipe(gulp.dest(destination + 'analysis/includes/')),
    gulp.src(source + 'analysis/includes/updated-data-series.inc')
    .pipe(gulp.dest(destination + 'analysis/includes/')),
    gulp.src(source + 'analysis/includes/upcoming-releases.inc')
    .pipe(gulp.dest(destination + 'analysis/includes/')),
    gulp.src(source + 'analysis/includes/sub-navigation.inc')
    .pipe(gulp.dest(destination + 'analysis/includes/')),
    gulp.src(source + 'analysis/includes/recent-data.inc')
    .pipe(gulp.dest(destination + 'analysis/includes/')),
    gulp.src(source + 'analysis/includes/presentations.inc')
    .pipe(gulp.dest(destination + 'analysis/includes/')),
    gulp.src(source + 'analysis/includes/interactive-table-viewer.inc')
    .pipe(gulp.dest(destination + 'analysis/includes/')),
    gulp.src(source + 'analysis/includes/energy-education.inc')
    .pipe(gulp.dest(destination + 'analysis/includes/')),
    gulp.src(source + 'analysis/includes/data.inc')
    .pipe(gulp.dest(destination + 'analysis/includes/')),
    gulp.src(source + 'analysis/includes/data-table.inc')
    .pipe(gulp.dest(destination + 'analysis/includes/')),
    gulp.src(source + 'analysis/includes/data-side-content.inc')
    .pipe(gulp.dest(destination + 'analysis/includes/')),

    gulp.src(source + 'analysis/projection-data.php')
//    .pipe(rename('projection-data.php'))
    .pipe(gulp.dest(destination + 'analysis/')),

    gulp.src(source + 'analysis/index.php')
//    .pipe(rename('index.php'))
    .pipe(gulp.dest(destination + 'analysis/')),

    // coal
    // coal
    // coal

    gulp.src(source + 'coal/includes/weeklies.inc')
    .pipe(gulp.dest(destination + 'coal/includes/')),
    gulp.src(source + 'coal/includes/visualizations.inc')
    .pipe(gulp.dest(destination + 'coal/includes/')),
    gulp.src(source + 'coal/includes/updated-data-series.inc')
    .pipe(gulp.dest(destination + 'coal/includes/')),
    gulp.src(source + 'coal/includes/upcoming-releases.inc')
    .pipe(gulp.dest(destination + 'coal/includes/')),
    gulp.src(source + 'coal/includes/sub-navigation.inc')
    .pipe(gulp.dest(destination + 'coal/includes/')),
    gulp.src(source + 'coal/includes/recent-data.inc')
    .pipe(gulp.dest(destination + 'coal/includes/')),
    gulp.src(source + 'coal/includes/presentations.inc')
    .pipe(gulp.dest(destination + 'coal/includes/')),
    gulp.src(source + 'coal/includes/energy-education.inc')
    .pipe(gulp.dest(destination + 'coal/includes/')),
    gulp.src(source + 'coal/includes/data.inc')
    .pipe(gulp.dest(destination + 'coal/includes/')),
    gulp.src(source + 'coal/includes/data-side-content.inc')
    .pipe(gulp.dest(destination + 'coal/includes/')),

    gulp.src(source + 'coal/data.php')
//    .pipe(rename('data.php'))
    .pipe(gulp.dest(destination + 'coal/')),

    gulp.src(source + 'coal/index.php')
//    .pipe(rename('index.php'))
    .pipe(gulp.dest(destination + 'coal/')),

    // consumption
    // consumption
    // consumption

    gulp.src(source + 'consumption/includes/visualizations.inc')
    .pipe(gulp.dest(destination + 'consumption/includes/')),
    gulp.src(source + 'consumption/includes/updated-data-series.inc')
    .pipe(gulp.dest(destination + 'consumption/includes/')),
    gulp.src(source + 'consumption/includes/upcoming-releases.inc')
    .pipe(gulp.dest(destination + 'consumption/includes/')),
    gulp.src(source + 'consumption/includes/sub-navigation.inc')
    .pipe(gulp.dest(destination + 'consumption/includes/')),
    gulp.src(source + 'consumption/includes/recent-data.inc')
    .pipe(gulp.dest(destination + 'consumption/includes/')),
    gulp.src(source + 'consumption/includes/consumption-survey.inc')
    .pipe(gulp.dest(destination + 'consumption/includes/')),
    gulp.src(source + 'consumption/includes/energy-education.inc')
    .pipe(gulp.dest(destination + 'consumption/includes/')),
    gulp.src(source + 'consumption/includes/data.inc')
    .pipe(gulp.dest(destination + 'consumption/includes/')),
    gulp.src(source + 'consumption/includes/data-table.inc')
    .pipe(gulp.dest(destination + 'consumption/includes/')),
    gulp.src(source + 'consumption/includes/data-side-content.inc')
    .pipe(gulp.dest(destination + 'consumption/includes/')),

    gulp.src(source + 'consumption/data.php')
//    .pipe(rename('data.php'))
    .pipe(gulp.dest(destination + 'consumption/')),

    gulp.src(source + 'consumption/index.php')
//    .pipe(rename('index.php'))
    .pipe(gulp.dest(destination + 'consumption/')),

    // electricity
    // electricity
    // electricity

    gulp.src(source + 'electricity/includes/beta.inc')
    .pipe(gulp.dest(destination + 'electricity/includes/')),
    gulp.src(source + 'electricity/includes/hourly-electric-data.inc')
    .pipe(gulp.dest(destination + 'electricity/includes/')),
    gulp.src(source + 'electricity/includes/table-data.inc')
    .pipe(gulp.dest(destination + 'electricity/includes/')),
    gulp.src(source + 'electricity/includes/visualizations.inc')
    .pipe(gulp.dest(destination + 'electricity/includes/')),
    gulp.src(source + 'electricity/includes/updated-data-series.inc')
    .pipe(gulp.dest(destination + 'electricity/includes/')),
    gulp.src(source + 'electricity/includes/upcoming-releases.inc')
    .pipe(gulp.dest(destination + 'electricity/includes/')),
    gulp.src(source + 'electricity/includes/sub-navigation.inc')
    .pipe(gulp.dest(destination + 'electricity/includes/')),
    gulp.src(source + 'electricity/includes/recent-data.inc')
    .pipe(gulp.dest(destination + 'electricity/includes/')),
    gulp.src(source + 'electricity/includes/survey-forms-changes-announcements.inc')
    .pipe(gulp.dest(destination + 'electricity/includes/')),
    gulp.src(source + 'electricity/includes/energy-education.inc')
    .pipe(gulp.dest(destination + 'electricity/includes/')),
    gulp.src(source + 'electricity/includes/data.inc')
    .pipe(gulp.dest(destination + 'electricity/includes/')),
    gulp.src(source + 'electricity/includes/data-side-content.inc')
    .pipe(gulp.dest(destination + 'electricity/includes/')),

    gulp.src(source + 'electricity/data.php')
//    .pipe(rename('data.php'))
    .pipe(gulp.dest(destination + 'electricity/')),

    gulp.src(source + 'electricity/index.php')
//    .pipe(rename('index.php'))
    .pipe(gulp.dest(destination + 'electricity/')),

    // environment
    // environment
    // environment

    gulp.src(source + 'environment/includes/visualizations.inc')
    .pipe(gulp.dest(destination + 'environment/includes/')),
    gulp.src(source + 'environment/includes/updated-data-series.inc')
    .pipe(gulp.dest(destination + 'environment/includes/')),
    gulp.src(source + 'environment/includes/upcoming-releases.inc')
    .pipe(gulp.dest(destination + 'environment/includes/')),
    gulp.src(source + 'environment/includes/sub-navigation.inc')
    .pipe(gulp.dest(destination + 'environment/includes/')),
    gulp.src(source + 'environment/includes/recent-data.inc')
    .pipe(gulp.dest(destination + 'environment/includes/')),
    gulp.src(source + 'environment/includes/energy-education.inc')
    .pipe(gulp.dest(destination + 'environment/includes/')),
    gulp.src(source + 'environment/includes/data.inc')
    .pipe(gulp.dest(destination + 'environment/includes/')),
    gulp.src(source + 'environment/includes/data-side-content.inc')
    .pipe(gulp.dest(destination + 'environment/includes/')),

    gulp.src(source + 'environment/data.php')
//    .pipe(rename('data.php'))
    .pipe(gulp.dest(destination + 'environment/')),

    gulp.src(source + 'environment/index.php')
//    .pipe(rename('index.php'))
    .pipe(gulp.dest(destination + 'environment/')),

    // finance
    // finance
    // finance

    gulp.src(source + 'finance/includes/table-data.inc')
    .pipe(gulp.dest(destination + 'finance/includes/')),
    gulp.src(source + 'finance/includes/visualizations.inc')
    .pipe(gulp.dest(destination + 'finance/includes/')),
    gulp.src(source + 'finance/includes/updated-data-series.inc')
    .pipe(gulp.dest(destination + 'finance/includes/')),
    gulp.src(source + 'finance/includes/sub-navigation.inc')
    .pipe(gulp.dest(destination + 'finance/includes/')),
    gulp.src(source + 'finance/includes/recent-data.inc')
    .pipe(gulp.dest(destination + 'finance/includes/')),
    gulp.src(source + 'finance/includes/presentations.inc')
    .pipe(gulp.dest(destination + 'finance/includes/')),
    gulp.src(source + 'finance/includes/energy-education.inc')
    .pipe(gulp.dest(destination + 'finance/includes/')),
    gulp.src(source + 'finance/includes/data.inc')
    .pipe(gulp.dest(destination + 'finance/includes/')),
    gulp.src(source + 'finance/includes/data-side-content.inc')
    .pipe(gulp.dest(destination + 'finance/includes/')),

    gulp.src(source + 'finance/data.php')
//    .pipe(rename('data.php'))
    .pipe(gulp.dest(destination + 'finance/')),

    gulp.src(source + 'finance/index.php')
//    .pipe(rename('index.php'))
    .pipe(gulp.dest(destination + 'finance/')),

    // naturalgas
    // naturalgas
    // naturalgas

    gulp.src(source + 'naturalgas/includes/weeklies.inc')
    .pipe(gulp.dest(destination + 'naturalgas/includes/')),
    gulp.src(source + 'naturalgas/includes/visualizations.inc')
    .pipe(gulp.dest(destination + 'naturalgas/includes/')),
    gulp.src(source + 'naturalgas/includes/updated-data-series.inc')
    .pipe(gulp.dest(destination + 'naturalgas/includes/')),
    gulp.src(source + 'naturalgas/includes/upcoming-releases.inc')
    .pipe(gulp.dest(destination + 'naturalgas/includes/')),
    gulp.src(source + 'naturalgas/includes/sub-navigation.inc')
    .pipe(gulp.dest(destination + 'naturalgas/includes/')),
    gulp.src(source + 'naturalgas/includes/recent-data.inc')
    .pipe(gulp.dest(destination + 'naturalgas/includes/')),
    gulp.src(source + 'naturalgas/includes/energy-education.inc')
    .pipe(gulp.dest(destination + 'naturalgas/includes/')),
    gulp.src(source + 'naturalgas/includes/data.inc')
    .pipe(gulp.dest(destination + 'naturalgas/includes/')),
    gulp.src(source + 'naturalgas/includes/data-side-content.inc')
    .pipe(gulp.dest(destination + 'naturalgas/includes/')),

    gulp.src(source + 'naturalgas/data.php')
//    .pipe(rename('data.php'))
    .pipe(gulp.dest(destination + 'naturalgas/')),

    gulp.src(source + 'naturalgas/index.php')
//    .pipe(rename('index.php'))
    .pipe(gulp.dest(destination + 'naturalgas/')),

    // nuclear
    // nuclear
    // nuclear

    gulp.src(source + 'nuclear/includes/visualizations.inc')
    .pipe(gulp.dest(destination + 'nuclear/includes/')),
    gulp.src(source + 'nuclear/includes/updated-data-series.inc')
    .pipe(gulp.dest(destination + 'nuclear/includes/')),
    gulp.src(source + 'nuclear/includes/sub-navigation.inc')
    .pipe(gulp.dest(destination + 'nuclear/includes/')),
    gulp.src(source + 'nuclear/includes/recent-data.inc')
    .pipe(gulp.dest(destination + 'nuclear/includes/')),
    gulp.src(source + 'nuclear/includes/survey-forms-changes-announcements.inc')
    .pipe(gulp.dest(destination + 'nuclear/includes/')),
    gulp.src(source + 'nuclear/includes/energy-education.inc')
    .pipe(gulp.dest(destination + 'nuclear/includes/')),
    gulp.src(source + 'nuclear/includes/data.inc')
    .pipe(gulp.dest(destination + 'nuclear/includes/')),
    gulp.src(source + 'nuclear/includes/data-side-content.inc')
    .pipe(gulp.dest(destination + 'nuclear/includes/')),
    gulp.src(source + 'nuclear/includes/released-daily.inc')
    .pipe(gulp.dest(destination + 'nuclear/includes/')),

    gulp.src(source + 'nuclear/data.php')
//    .pipe(rename('data.php'))
    .pipe(gulp.dest(destination + 'nuclear/')),

    gulp.src(source + 'nuclear/index.php')
//    .pipe(rename('index.php'))
    .pipe(gulp.dest(destination + 'nuclear/')),

    // petroleum
    // petroleum
    // petroleum

    gulp.src(source + 'petroleum/includes/weeklies.inc')
    .pipe(gulp.dest(destination + 'petroleum/includes/')),
    gulp.src(source + 'petroleum/includes/visualizations.inc')
    .pipe(gulp.dest(destination + 'petroleum/includes/')),
    gulp.src(source + 'petroleum/includes/updated-data-series.inc')
    .pipe(gulp.dest(destination + 'petroleum/includes/')),
    gulp.src(source + 'petroleum/includes/upcoming-releases.inc')
    .pipe(gulp.dest(destination + 'petroleum/includes/')),
    gulp.src(source + 'petroleum/includes/sub-navigation.inc')
    .pipe(gulp.dest(destination + 'petroleum/includes/')),
    gulp.src(source + 'petroleum/includes/recent-data.inc')
    .pipe(gulp.dest(destination + 'petroleum/includes/')),
    gulp.src(source + 'petroleum/includes/energy-education.inc')
    .pipe(gulp.dest(destination + 'petroleum/includes/')),
    gulp.src(source + 'petroleum/includes/data.inc')
    .pipe(gulp.dest(destination + 'petroleum/includes/')),
    gulp.src(source + 'petroleum/includes/survey-forms-changes-announcements.inc')
    .pipe(gulp.dest(destination + 'petroleum/includes/')),
    gulp.src(source + 'petroleum/includes/data-side-content.inc')
    .pipe(gulp.dest(destination + 'petroleum/includes/')),

    gulp.src(source + 'petroleum/data.php')
//    .pipe(rename('data.php'))
    .pipe(gulp.dest(destination + 'petroleum/')),

    gulp.src(source + 'petroleum/index.php')
//    .pipe(rename('index.php'))
    .pipe(gulp.dest(destination + 'petroleum/')),

    // renewable
    // renewable
    // renewable

    gulp.src(source + 'renewable/includes/visualizations.inc')
    .pipe(gulp.dest(destination + 'renewable/includes/')),
    gulp.src(source + 'renewable/includes/updated-data-series.inc')
    .pipe(gulp.dest(destination + 'renewable/includes/')),
    gulp.src(source + 'renewable/includes/upcoming-releases.inc')
    .pipe(gulp.dest(destination + 'renewable/includes/')),
    gulp.src(source + 'renewable/includes/sub-navigation.inc')
    .pipe(gulp.dest(destination + 'renewable/includes/')),
    gulp.src(source + 'renewable/includes/recent-data.inc')
    .pipe(gulp.dest(destination + 'renewable/includes/')),
    gulp.src(source + 'renewable/includes/survey-forms-changes-announcements.inc')
    .pipe(gulp.dest(destination + 'renewable/includes/')),
    gulp.src(source + 'renewable/includes/energy-education.inc')
    .pipe(gulp.dest(destination + 'renewable/includes/')),
    gulp.src(source + 'renewable/includes/data.inc')
    .pipe(gulp.dest(destination + 'renewable/includes/')),
    gulp.src(source + 'renewable/includes/data-side-content.inc')
    .pipe(gulp.dest(destination + 'renewable/includes/')),

    gulp.src(source + 'renewable/data.php')
//    .pipe(rename('data.php'))
    .pipe(gulp.dest(destination + 'renewable/')),

    gulp.src(source + 'renewable/index.php')
//    .pipe(rename('index.php'))
    .pipe(gulp.dest(destination + 'renewable/')),

    // totalenergy/monthly
    // totalenergy/monthly
    // totalenergy/monthly

    gulp.src(source + 'totalenergy/data/monthly/includes/data.inc')
    .pipe(gulp.dest(destination + 'totalenergy/data/monthly/includes/')),
    gulp.src(source + 'totalenergy/data/monthly/includes/data-side-content.inc')
    .pipe(gulp.dest(destination + 'totalenergy/data/monthly/includes/')),
    gulp.src(source + 'totalenergy/data/monthly/includes/data-call-out.inc')
    .pipe(gulp.dest(destination + 'totalenergy/data/monthly/includes/')),

    gulp.src(source + 'totalenergy/data/monthly/index.php')
//    .pipe(rename('index.php'))
    .pipe(gulp.dest(destination + 'totalenergy/data/monthly/')),

    // totalenergy/annual
    // totalenergy/annual
    // totalenergy/annual

    gulp.src(source + 'totalenergy/data/annual/includes/data.inc')
    .pipe(gulp.dest(destination + 'totalenergy/data/annual/includes/')),
    gulp.src(source + 'totalenergy/data/annual/includes/report-header.inc')
    .pipe(gulp.dest(destination + 'totalenergy/data/annual/includes/')),
    gulp.src(source + 'totalenergy/data/annual/includes/data-side-content.inc')
    .pipe(gulp.dest(destination + 'totalenergy/data/annual/includes/')),
  
    gulp.src(source + 'totalenergy/data/annual/index.php')
//    .pipe(rename('index.php'))
    .pipe(gulp.dest(destination + 'totalenergy/data/annual/')),

    // totalenergy
    // totalenergy
    // totalenergy

    gulp.src(source + 'totalenergy/includes/visualizations.inc')
    .pipe(gulp.dest(destination + 'totalenergy/includes/')),
    gulp.src(source + 'totalenergy/includes/updated-data-series.inc')
    .pipe(gulp.dest(destination + 'totalenergy/includes/')),
    gulp.src(source + 'totalenergy/includes/upcoming-releases.inc')
    .pipe(gulp.dest(destination + 'totalenergy/includes/')),
    gulp.src(source + 'totalenergy/includes/sub-navigation.inc')
    .pipe(gulp.dest(destination + 'totalenergy/includes/')),
    gulp.src(source + 'totalenergy/includes/recent-data.inc')
    .pipe(gulp.dest(destination + 'totalenergy/includes/')),
    gulp.src(source + 'totalenergy/includes/energy-education.inc')
    .pipe(gulp.dest(destination + 'totalenergy/includes/')),

    gulp.src(source + 'totalenergy/index.php')
//    .pipe(rename('index.php'))
    .pipe(gulp.dest(destination + 'totalenergy/')),

    // release dates
    // release dates
    // release dates

    gulp.src(source + 'petroleum/supply/annual/volume1/includes/releasedate.inc')
    .pipe(gulp.dest(destination + 'petroleum/supply/annual/volume1/includes')),
    gulp.src(source + 'petroleum/marketing/monthly/includes/releasedate.inc')
    .pipe(gulp.dest(destination + 'petroleum/marketing/monthly/includes/')),
    gulp.src(source + 'biofuels/biodiesel/production/includes/releasedate.inc')
    .pipe(gulp.dest(destination + 'biofuels/biodiesel/production/includes')),
    gulp.src(source + 'petroleum/fueloilkerosene/includes/releasedate.inc')
    .pipe(gulp.dest(destination + 'petroleum/fueloilkerosene/includes/')),

    gulp.src(source + 'coal/annual/includes/releasedate.inc')
    .pipe(gulp.dest(destination + 'coal/annual/includes/')),
    gulp.src(source + 'coal/distribution/quarterly/includes/releasedate.inc')
    .pipe(gulp.dest(destination + 'coal/distribution/quarterly/includes/')),
    gulp.src(source + 'coal/distribution/annual/includes/releasedate.inc')
    .pipe(gulp.dest(destination + 'coal/distribution/annual/includes/')),
    gulp.src(source + 'coal/production/quarterly/includes/releasedate.inc')
    .pipe(gulp.dest(destination + 'coal/production/quarterly/includes/')),
    gulp.src(source + 'coal/production/annual/includes/releasedate.inc')
    .pipe(gulp.dest(destination + 'coal/production/annual/includes/')),
    gulp.src(source + 'dnav/ng/includes_ng/includes/releasedate_ngmer.inc')
    .pipe(gulp.dest(destination + 'dnav/ng/includes_ng/includes/')),
    gulp.src(source + 'dnav/ng/includes_ng/includes/releasedate_wngsr.inc')
    .pipe(gulp.dest(destination + 'dnav/ng/includes_ng/includes/')),
    gulp.src(source + 'dnav/pet/includes/releasedate.inc')
    .pipe(gulp.dest(destination + 'dnav/pet/includes/')),
    gulp.src(source + 'electricity/annual/includes/releasedate.inc')
    .pipe(gulp.dest(destination + 'electricity/annual/includes/')),
    gulp.src(source + 'electricity/monthly/includes/electricity-data-browser.inc')
    .pipe(gulp.dest(destination + 'electricity/monthly/includes/')),
    gulp.src(source + 'electricity/monthly/includes/releasedate.inc')
    .pipe(gulp.dest(destination + 'electricity/monthly/includes/')),
    gulp.src(source + 'electricity/sales_revenue_price/includes/releasedate.inc')
    .pipe(gulp.dest(destination + 'electricity/sales_revenue_price/includes/')),
    gulp.src(source + 'naturalgas/annual/includes/releasedate.inc')
    .pipe(gulp.dest(destination + 'naturalgas/annual/includes/')),
    gulp.src(source + 'naturalgas/fieldcode/includes/releasedate.inc')
    .pipe(gulp.dest(destination + 'naturalgas/fieldcode/includes/')),
    gulp.src(source + 'naturalgas/monthly/includes/releasedate.inc')
    .pipe(gulp.dest(destination + 'naturalgas/monthly/includes/')),
    gulp.src(source + 'outlooks/steo/includes/releasedate.inc')
    .pipe(gulp.dest(destination + 'outlooks/steo/includes/')),
    gulp.src(source + 'petroleum/gasdiesel/includes/releasedate.inc')
    .pipe(gulp.dest(destination + 'petroleum/gasdiesel/includes/')),
    gulp.src(source + 'petroleum/marketing/prime/includes/releasedate.inc')
    .pipe(gulp.dest(destination + 'petroleum/marketing/prime/includes/')),
    gulp.src(source + 'petroleum/production/includes/releasedate.inc')
    .pipe(gulp.dest(destination + 'petroleum/production/includes/')),
    gulp.src(source + 'petroleum/supply/monthly/includes/releasedate.inc')
    .pipe(gulp.dest(destination + 'petroleum/supply/monthly/includes/')),
    gulp.src(source + 'petroleum/supply/weekly/includes/releasedate_wpsr.inc')
    .pipe(gulp.dest(destination + 'petroleum/supply/weekly/includes/')),
    gulp.src(source + 'petroleum/supply/weekly/includes/releasedate_wpsr_shopp.inc')
    .pipe(gulp.dest(destination + 'petroleum/supply/weekly/includes/')),
    gulp.src(source + 'renewable/afv/includes/releasedate.inc')
    .pipe(gulp.dest(destination + 'renewable/afv/includes/')),
    gulp.src(source + 'totalenergy/data/annual/includes/releasedate.inc')
    .pipe(gulp.dest(destination + 'totalenergy/data/annual/includes/')),
    gulp.src(source + 'totalenergy/data/monthly/includes/releasedate.inc')
    .pipe(gulp.dest(destination + 'totalenergy/data/monthly/includes/')),
    gulp.src(source + 'uranium/marketing/includes/releasedate.inc')
    .pipe(gulp.dest(destination + 'uranium/marketing/includes')),
    gulp.src(source + 'uranium/production/quarterly/includes/releasedate.inc')
    .pipe(gulp.dest(destination + 'uranium/production/quarterly/includes/'))
    */
});
//gulp.task('delete',  function() {
//    return del(source + 'electricity/includes/weeklies.inc');
//});