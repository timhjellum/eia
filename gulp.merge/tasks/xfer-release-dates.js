const gulp = require('gulp');
const rename = require('gulp-rename');
const path = require('path');
const del = require('del');
const removeCode = require('gulp-remove-code');

const source = '.';

const destination = '//WWWdev/website';


gulp.task('xfer-release-dates', ['eia1']);

gulp.task('eia1', ['eia2'], () =>
    gulp.src(source + '/biofuels/biomass/includes/releasedate.inc')
    .pipe(gulp.dest(destination + '/biofuels/biomass/includes/'))
);
gulp.task('eia2', ['eia3'], () =>
    gulp.src(source + '/coal/annual/includes/releasedate.inc')
    .pipe(gulp.dest(destination + '/coal/annual/includes/'))
);
gulp.task('eia3', ['eia4'], () =>
    gulp.src(source + '/coal/distribution/quarterly/includes/releasedate.inc')
    .pipe(gulp.dest(destination + '/coal/distribution/quarterly/includes/'))
);
gulp.task('eia4', ['eia5'], () =>
    gulp.src(source + '/coal/distribution/annual/includes/releasedate.inc')
    .pipe(gulp.dest(destination + '/coal/distribution/annual/includes/'))
);
gulp.task('eia5', ['eia6'], () =>
    gulp.src(source + '/coal/production/quarterly/includes/releasedate.inc')
    .pipe(gulp.dest(destination + '/coal/production/quarterly/includes/'))
);
gulp.task('eia6', ['eia7'], () =>
    gulp.src(source + '/coal/production/annual/includes/releasedate.inc')
    .pipe(gulp.dest(destination + '/coal/production/annual/includes/'))
);
gulp.task('eia7', ['eia8'], () =>
    gulp.src(source + '/dnav/ng/includes_ng/releasedate_ngmer.inc')
    .pipe(gulp.dest(destination + '/dnav/ng/includes_ng/'))
);
gulp.task('eia8', ['eia9'], () =>
    gulp.src(source + '/dnav/ng/includes_ng/releasedate_wngmsr.inc')
    .pipe(gulp.dest(destination + '/dnav/ng/includes_ng/'))
);
gulp.task('eia9', ['eia10'], () =>
    gulp.src(source + '/dnav/pet/includes/releasedate.inc')
    .pipe(gulp.dest(destination + '/dnav/pet/includes/'))
);
gulp.task('eia10', ['eia11'], () =>
    gulp.src(source + '/electricity/annual/includes/releasedate.inc')
    .pipe(gulp.dest(destination + '/electricity/annual/includes/'))
);
gulp.task('eia11', ['eia12'], () =>
    gulp.src(source + '/electricity/monthly/includes/electricity-data-browser.inc')
    .pipe(gulp.dest(destination + '/electricity/monthly/includes/'))
);
gulp.task('eia12', ['eia13'], () =>
    gulp.src(source + '/electricity/monthly/includes/releasedate.inc')
    .pipe(gulp.dest(destination + '/electricity/monthly/includes/'))
);
gulp.task('eia13', ['eia14'], () =>
    gulp.src(source + '/electricity/sales_revenue_price/includes/releasedate.inc')
    .pipe(gulp.dest(destination + '/electricity/sales_revenue_price/includes/'))
);
gulp.task('eia14', ['eia15'], () =>
    gulp.src(source + '/naturalgas/annual/includes/releasedate.inc')
    .pipe(gulp.dest(destination + '/naturalgas/annual/includes/'))
);
gulp.task('eia15', ['eia16'], () =>
    gulp.src(source + '/naturalgas/fieldcode/includes/releasedate.inc')
    .pipe(gulp.dest(destination + '/naturalgas/fieldcode/includes/'))
);
gulp.task('eia16', ['eia17'], () =>
    gulp.src(source + '/naturalgas/monthly/includes/releasedate.inc')
    .pipe(gulp.dest(destination + '/naturalgas/monthly/includes/'))
);
gulp.task('eia17', ['eia18'], () =>
    gulp.src(source + '/outlooks/steo/includes/releasedate.inc')
    .pipe(gulp.dest(destination + '/outlooks/steo/includes/'))
);
gulp.task('eia18', ['eia19'], () =>
    gulp.src(source + '/petroleum/gasdiesel/includes/releasedate.inc')
    .pipe(gulp.dest(destination + '/petroleum/gasdiesel/includes/'))
);
gulp.task('eia19', ['eia20'], () =>
    gulp.src(source + '/petroleum/marketing/prime/includes/releasedate.inc')
    .pipe(gulp.dest(destination + '/petroleum/marketing/prime/includes/'))
);
gulp.task('eia20', ['eia21'], () =>
    gulp.src(source + '/petroleum/production/includes/releasedate.inc')
    .pipe(gulp.dest(destination + '/petroleum/production/includes/'))
);
gulp.task('eia21', ['eia22a'], () =>
    gulp.src(source + '/petroleum/supply/monthly/includes/releasedate.inc')
    .pipe(gulp.dest(destination + '/petroleum/supply/monthly/includes/'))
);
gulp.task('eia22a', ['eia22b'], () =>
    gulp.src(source + '/petroleum/supply/weekly/includes/releasedate_wpsr.inc')
    .pipe(gulp.dest(destination + '/petroleum/supply/weekly/includes/'))
);
gulp.task('eia22b', ['eia23'], () =>
    gulp.src(source + '/petroleum/supply/weekly/includes/releasedate_wpsr_shopp.inc')
    .pipe(gulp.dest(destination + '/petroleum/supply/weekly/includes/'))
);
gulp.task('eia23', ['eia24'], () =>
    gulp.src(source + '/renewable/afv/includes/releasedate.inc')
    .pipe(gulp.dest(destination + '/renewable/afv/includes/'))
);
gulp.task('eia24', ['eia25'], () =>
    gulp.src(source + '/totalenergy/data/annual/includes/releasedate.inc')
    .pipe(gulp.dest(destination + '/totalenergy/data/annual/includes/'))
);
gulp.task('eia25', ['eia26'], () =>
    gulp.src(source + '/totalenergy/data/monthly/includes/releasedate.inc')
    .pipe(gulp.dest(destination + '/totalenergy/data/monthly/includes/'))
);
gulp.task('eia26', () =>
    gulp.src(source + '/uranium/production/quarterly/includes/releasedate.inc')
    .pipe(gulp.dest(destination + '/uranium/production/quarterly/includes/'))
);