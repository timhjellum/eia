const gulp = require('gulp');
//const cleanCSS = require('gulp-clean-css');
//const less = require('gulp-less');
const rename = require('gulp-rename');
const path = require('path');
const del = require('del');
const removeCode = require('gulp-remove-code');

const server = '//WWWDEV/website/adaptive/';

const analysis      		= 'analysis/includes';
const coal          		= 'coa/includes';
const consumption   		= 'consumption/includes';
const electricity   		= 'electricity/includes';
const environment   		= 'environment/includes';
const finance       		= 'finance/includes';
const naturalGas    		= 'naturalgas/includes';
const nuclear       		= 'nuclear/includes';
const petroleum     		= 'petroleum/includes';
const renewable     		= 'renewable/includes';
const totalEnergy   		= 'totalenergy/includes';
const totalEnergyMonthly  	= 'totalenergy/data/monthly/includes';
const totalEnergyAnnual  	= 'totalenergy/data/annua/includes';






gulp.task('xfer-data-html', ['xfer-analysis']);

gulp.task('xfer-analysis', ['xfer-coal'], () =>
	gulp.src('./analysis/includes/data.html')
//	.pipe(removeCode({ INCconversion: true }))
	.pipe(rename('data.inc'))
	.pipe(gulp.dest(server + analysis))
);
gulp.task('xfer-coal', ['xfer-consumption'], () =>
	gulp.src('./coa/includes/data.html')
//	.pipe(removeCode({ INCconversion: true }))
	.pipe(rename('data.inc'))
	.pipe(gulp.dest(server + coal))
);
gulp.task('xfer-consumption', ['xfer-electricity'], () =>
	gulp.src('./consumption/includes/data.html')
//	.pipe(removeCode({ INCconversion: true }))
	.pipe(rename('data.inc'))
	.pipe(gulp.dest(server + consumption))
);
gulp.task('xfer-electricity', ['xfer-environment'], () =>
	gulp.src('./electricity/includes/data.html')
//	.pipe(removeCode({ INCconversion: true }))
	.pipe(rename('data.inc'))
	.pipe(gulp.dest(server + electricity))
);
gulp.task('xfer-environment', ['xfer-finance'], () =>
	gulp.src('./environment/includes/data.html')
//	.pipe(removeCode({ INCconversion: true }))
	.pipe(rename('data.inc'))
	.pipe(gulp.dest(server + environment))
);
gulp.task('xfer-finance', ['xfer-natural-gas'], () =>
	gulp.src('./finance/includes/data.html')
//	.pipe(removeCode({ INCconversion: true }))
	.pipe(rename('data.inc'))
	.pipe(gulp.dest(server + finance))
);
gulp.task('xfer-natural-gas', ['xfer-nuclear'], () =>
	gulp.src('./naturalgas/includes/data.html')
//	.pipe(removeCode({ INCconversion: true }))
	.pipe(rename('data.inc'))
	.pipe(gulp.dest(server + naturalGas))
);
gulp.task('xfer-nuclear', ['xfer-petroleum'], () =>
	gulp.src('./nuclear/includes/data.html')
//	.pipe(removeCode({ INCconversion: true }))
	.pipe(rename('data.inc'))
	.pipe(gulp.dest(server + nuclear))
);
gulp.task('xfer-petroleum', ['xfer-renewable'], () =>
	gulp.src('./petroleum/includes/data.html')
//	.pipe(removeCode({ INCconversion: true }))
	.pipe(rename('data.inc'))
	.pipe(gulp.dest(server + petroleum))
);
gulp.task('xfer-renewable', ['xfer-total-energy-monthly'], () =>
	gulp.src('./renewable/includes/data.html')
//	.pipe(removeCode({ INCconversion: true }))
	.pipe(rename('data.inc'))
	.pipe(gulp.dest(server + renewable))
);

gulp.task('xfer-total-energy-monthly', ['xfer-total-energy-annual'], () =>
	gulp.src('./totalenergy/data/monthly/includes/data.html')
//	.pipe(removeCode({ INCconversion: true }))
	.pipe(rename('data.inc'))
	.pipe(gulp.dest(server + totalEnergyMonthly))
);
gulp.task('xfer-total-energy-annual', () =>
	gulp.src('./totalenergy/data/annua/includes/data.html')
//	.pipe(removeCode({ INCconversion: true }))
	.pipe(rename('data.inc'))
	.pipe(gulp.dest(server + totalEnergyAnnual))
);
