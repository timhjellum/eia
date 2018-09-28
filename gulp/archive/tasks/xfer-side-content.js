const gulp = require('gulp');
//const cleanCSS = require('gulp-clean-css');
//const less = require('gulp-less');
const rename = require('gulp-rename');
const path = require('path');
const del = require('del');
const removeCode = require('gulp-remove-code');

const server = '//WWWDEV/website/css_rehab/archive/';

const analysis = 'analysis/includes';
const coal = 'coal/includes';
const consumption = 'consumption/includes';
const electricity = 'electricity/includes';
const environment = 'environment/includes';
const finance = 'finance/includes';
const naturalGas = 'naturalgas/includes';
const nuclear = 'nuclear/includes';
const petroleum = 'petroleum/includes';
const renewable = 'renewable/includes';
const totalEnergy = 'totalenergy/includes';
const totalEnergyMonthly = 'totalenergy/data/monthly/includes';
const totalEnergyAnnual = 'totalenergy/data/annua/includes';
//const styleFolder   		= 'style-guide/assets/styles';






// gulp xfer2adaptive


gulp.task('xfer2adaptive', ['xfer-analysis']);

gulp.task('xfer-analysis', ['xfer-coal'], () =>
    gulp.src('./analysis/includes/data-side-content.inc')
    //	.pipe(removeCode({ INCconversion: true }))
    //	.pipe(rename('main-data.inc'))
    .pipe(gulp.dest(server + analysis))
);
gulp.task('xfer-coal', ['xfer-consumption'], () =>
    gulp.src('./coa/includes/data-side-content.inc')
    //	.pipe(removeCode({ INCconversion: true }))
    //	.pipe(rename('main-data.inc'))
    .pipe(gulp.dest(server + coal))
);
gulp.task('xfer-consumption', ['xfer-electricity'], () =>
    gulp.src('./consumption/includes/data-side-content.inc')
    //	.pipe(removeCode({ INCconversion: true }))
    //	.pipe(rename('main-data.inc'))
    .pipe(gulp.dest(server + consumption))
);
gulp.task('xfer-electricity', ['xfer-environment'], () =>
    gulp.src('./electricity/includes/data-side-content.inc')
    //	.pipe(removeCode({ INCconversion: true }))
    //	.pipe(rename('main-data.inc'))
    .pipe(gulp.dest(server + electricity))
);
gulp.task('xfer-environment', ['xfer-finance'], () =>
    gulp.src('./environment/includes/data-side-content.inc')
    //	.pipe(removeCode({ INCconversion: true }))
    //	.pipe(rename('main-data.inc'))
    .pipe(gulp.dest(server + environment))
);
gulp.task('xfer-finance', ['xfer-natural-gas'], () =>
    gulp.src('./finance/includes/data-side-content.inc')
    //	.pipe(removeCode({ INCconversion: true }))
    //	.pipe(rename('main-data.inc'))
    .pipe(gulp.dest(server + finance))
);
gulp.task('xfer-natural-gas', ['xfer-nuclear'], () =>
    gulp.src('./naturalgas/includes/data-side-content.inc')
    //	.pipe(removeCode({ INCconversion: true }))
    //	.pipe(rename('main-data.inc'))
    .pipe(gulp.dest(server + naturalGas))
);
gulp.task('xfer-nuclear', ['xfer-petroleum'], () =>
    gulp.src('./nuclear/includes/data-side-content.inc')
    //	.pipe(removeCode({ INCconversion: true }))
    //	.pipe(rename('main-data.inc'))
    .pipe(gulp.dest(server + nuclear))
);
gulp.task('xfer-petroleum', ['xfer-renewable'], () =>
    gulp.src('./petroleum/includes/data-side-content.inc')
    //	.pipe(removeCode({ INCconversion: true }))
    //	.pipe(rename('main-data.inc'))
    .pipe(gulp.dest(server + petroleum))
);
gulp.task('xfer-renewable', ['xfer-total-energy-monthly'], () =>
    gulp.src('./renewable/includes/data-side-content.inc')
    //	.pipe(removeCode({ INCconversion: true }))
    //	.pipe(rename('main-data.inc'))
    .pipe(gulp.dest(server + renewable))
);
/*
gulp.task('xfer-total-energy', () =>
gulp.src('./totalenergy/includes/data-side-content.inc')
.pipe(removeCode({ INCconversion: true }))
//	.pipe(rename('main-data.inc'))
.pipe(gulp.dest('//WWWDEV/website/css_rehab/archive/totalEnergy/includes'))
);
*/
gulp.task('xfer-total-energy-monthly', ['xfer-total-energy-annual'], () =>
    gulp.src('./totalenergy/data/monthly/includes/data-side-content.inc')
    //	.pipe(removeCode({ INCconversion: true }))
    //	.pipe(rename('main-data.inc'))
    .pipe(gulp.dest(server + totalEnergyMonthly))
);
gulp.task('xfer-total-energy-annual', () =>
    gulp.src('./totalenergy/data/annua/includes/data-side-content.inc')
    //	.pipe(removeCode({ INCconversion: true }))
    //	.pipe(rename('main-data.inc'))
    .pipe(gulp.dest(server + totalEnergyAnnual))
);

/*
gulp.task('pmm-release-date', ['biofuels-release-date'], () =>
gulp.src('/petroleum/marketing/monthly/includes/pmm-release-date.inc')
.pipe(gulp.dest('//WWWDEV/website/css_rehab/archive/server + '/petroleum/marketing/monthly/includes'/includes'))
);
gulp.task('biofuels-release-date', ['ngmer-release-date'], () =>
gulp.src('/biofuels/biomass/includes/biofuels-release-date.inc')
.pipe(gulp.dest('//WWWDEV/website/css_rehab/archive/server + '/biofuels/biomass/includes'/includes'))
);
gulp.task('ngmer-release-date', ['wngsr-release-date'], () =>
gulp.src('/dnav/ng/includes_ng/ngmer-release-date.inc')
.pipe(gulp.dest('//WWWDEV/website/css_rehab/archive/server + '/dnav/ng/includes_ng'/includes'))
);
gulp.task('wngsr-release-date', ['petmer-release-date'], () =>
gulp.src('/dnav/ng/includes_ng/includes/wngsr-release-date.inc')
.pipe(gulp.dest('//WWWDEV/website/css_rehab/archive/server + '/dnav/ng/includes_ng/includes'/includes'))
);
gulp.task('petmer-release-date', ['epa-release-date'], () =>
gulp.src('/dnav/pet/includes/petmer-release-date.inc')
.pipe(gulp.dest('//WWWDEV/website/css_rehab/archive/server + '/dnav/pet/includes'/includes'))
);
gulp.task('epa-release-date', ['electricity-data-browser'], () =>
gulp.src('/electricity/annua/includes/epa-release-date.inc')
.pipe(gulp.dest('//WWWDEV/website/css_rehab/archive/server + '/electricity/annua/includes'/includes'))
);
gulp.task('electricity-data-browser', ['epm-release-date'], () =>
gulp.src('/electricity/monthly/includes/electricity-data-browser.inc')
.pipe(gulp.dest('//WWWDEV/website/css_rehab/archive/server + '/electricity/monthly/includes'/includes'))
);
gulp.task('epm-release-date', ['esr-header'], () =>
gulp.src('/electricity/monthly/includes/epm-release-date.inc')
.pipe(gulp.dest('//WWWDEV/website/css_rehab/archive/server + '/electricity/monthly/includes'/includes'))
);
gulp.task('esr-header', ['annual-release-date'], () =>
gulp.src('/electricity/sales_revenue_price/includes/esr-header.inc')
.pipe(gulp.dest('//WWWDEV/website/css_rehab/archive/server + '/electricity/sales_revenue_price/includes'/includes'))
);
gulp.task('annual-release-date', ['fcml-release-date'], () =>
gulp.src('/naturalgas/annua/includes/annual-release-date.inc')
.pipe(gulp.dest('//WWWDEV/website/css_rehab/archive/server + '/naturalgas/annua/includes'/includes'))
);
gulp.task('fcml-release-date', ['monthly-release-date'], () =>
gulp.src('/naturalgas/fieldcode/includes/fcml-release-date.inc')
.pipe(gulp.dest('//WWWDEV/website/css_rehab/archive/server + '/naturalgas/fieldcode/includes'/includes'))
);
gulp.task('monthly-release-date', ['steo-release-date'], () =>
gulp.src('/naturalgas/monthly/includes/monthly-release-date.inc')
.pipe(gulp.dest('//WWWDEV/website/css_rehab/archive/server + '/naturalgas/monthly/includes'/includes'))
);
gulp.task('steo-release-date', ['gdu-release-date'], () =>
gulp.src('/outlooks/steo/includes/steo-release-date.inc')
.pipe(gulp.dest('//WWWDEV/website/css_rehab/archive/server + '/outlooks/steo/includes'/includes'))
);
gulp.task('gdu-release-date', ['release-date_pmm'], () =>
gulp.src('/petroleum/gasdiese/include/gdu-release-date.inc')
.pipe(gulp.dest('//WWWDEV/website/css_rehab/archive/server + '/petroleum/gasdiese/includes'/includes'))
);
gulp.task('release-date_pmm', ['psr-release-date'], () =>
gulp.src('/petroleum/marketing/monthly/includes/release-date_pmm.inc')
.pipe(gulp.dest('//WWWDEV/website/css_rehab/archive/server + '/petroleum/marketing/monthly/includes'/includes'))
);
gulp.task('psr-release-date', ['914-release-date'], () =>
gulp.src('/petroleum/marketing/prime/includes/psr-release-date.inc')
.pipe(gulp.dest('//WWWDEV/website/css_rehab/archive/server + '/petroleum/marketing/prime/includes'/includes'))
);
gulp.task('914-release-date', ['psa-release-date'], () =>
gulp.src('/petroleum/production/includes/914-release-date.inc')
.pipe(gulp.dest('//WWWDEV/website/css_rehab/archive/server + '/petroleum/production/includes'/includes'))
);
gulp.task('psa-release-date', ['psm-release-date'], () =>
gulp.src('/petroleum/supply/annua/volume1/includes/psa-release-date.inc')
.pipe(gulp.dest('//WWWDEV/website/css_rehab/archive/server + '/petroleum/supply/annua/volume1/includes'/includes'))
);
gulp.task('psm-release-date', ['release-date_wpsrshopp'], () =>
gulp.src('/petroleum/supply/monthly/includes/psm-release-date.inc')
.pipe(gulp.dest('//WWWDEV/website/css_rehab/archive/server + '/petroleum/supply/monthly/includes/psm-release-date.inc'/includes'))
);
gulp.task('release-date_wpsrshopp', ['wpsr-release-date'], () =>
gulp.src('/petroleum/supply/weekly/includes/release-date_wpsrshopp.inc')
.pipe(gulp.dest('//WWWDEV/website/css_rehab/archive/server + '/petroleum/supply/weekly/includes'/includes'))
);
gulp.task('wpsr-release-date', ['wpsrshopp-release-date'], () =>
gulp.src('/petroleum/supply/weekly/includes/wpsr-release-date.inc')
.pipe(gulp.dest('//WWWDEV/website/css_rehab/archive/server + '/petroleum/supply/weekly/includes'/includes'))
);
gulp.task('wpsrshopp-release-date', ['wspr-release-date'], () =>
gulp.src('/petroleum/supply/weekly/includes/wpsrshopp-release-date.inc')
.pipe(gulp.dest('//WWWDEV/website/css_rehab/archive/server + '/petroleum/supply/weekly/includes'/includes'))
);
gulp.task('wspr-release-date', ['afv-release-date'], () =>
gulp.src('/petroleum/supply/weekly/includes/wspr-release-date.inc')
.pipe(gulp.dest('//WWWDEV/website/css_rehab/archive/server + '/petroleum/supply/weekly/includes'/includes'))
);
gulp.task('afv-release-date', ['renewable-header'], () =>
gulp.src('/renewable/afv/includes/afv-release-date.inc')
.pipe(gulp.dest('//WWWDEV/website/css_rehab/archive/server + '/renewable/afv/includes'/includes'))
);
gulp.task('renewable-header', ['new-aer-header'], () =>
gulp.src('/renewable/monthly/solar_photo/includes/renewable-header.inc')
.pipe(gulp.dest('//WWWDEV/website/css_rehab/archive/server + '/renewable/monthly/solar_photo/includes'/includes'))
);
gulp.task('new-aer-header', ['new-mer-header'], () =>
gulp.src('/totalenergy/data/annua/includes/new-aer-header.inc')
.pipe(gulp.dest('//WWWDEV/website/css_rehab/archive/server + '/totalenergy/data/annua/includes'/includes'))
);
gulp.task('new-mer-header', ['uma-new-header'], () =>
gulp.src('/totalenergy/data/monthly/includes/new-mer-header.inc')
.pipe(gulp.dest('//WWWDEV/website/css_rehab/archive/server + '/totalenergy/data/monthly/includes'/includes'))
);
gulp.task('uma-new-header', () =>
gulp.src('/uranium/production/quarterly/htm/uma-new-header.inc')
.pipe(gulp.dest('//WWWDEV/website/css_rehab/archive/server + '/uranium/production/quarterly/includes'/includes'))
);
gulp.task('uma-new-header', () =>
gulp.src('/uranium/marketing/quarterly/htm/uma-new-header.inc')
.pipe(gulp.dest('//WWWDEV/website/css_rehab/archive/server + '/uranium/marketing/quarterly/includes'/includes'))
);
*/