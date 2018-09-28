const gulp = require('gulp');
const rename = require('gulp-rename');
const path = require('path');
const del = require('del');
const removeCode = require('gulp-remove-code');

const source ='X:/';
const destination = 'A:/';
// npm run gulp xfer-tables

gulp.task('xfer-tables', ['eia1']);

gulp.task('eia1', ['eia2'], () =>
    gulp.src(source + '/analysis/includes/data_table_excel.inc')
    .pipe(gulp.dest(destination + '/analysis/includes/'))
);
gulp.task('eia2', ['eia3'], () =>
    gulp.src(source + '/analysis/includes/recent-data.inc')
    .pipe(gulp.dest(destination + '/analysis/includes/'))
);
gulp.task('eia3', ['eia4'], () =>
    gulp.src(source + '/coal/includes/data_table1.inc')
    .pipe(gulp.dest(destination + '/coal/includes/'))
);
gulp.task('eia4', ['eia5'], () =>
gulp.src(source + '/coal/includes/recent-data.inc')
.pipe(gulp.dest(destination + '/coal/includes/'))
);
gulp.task('eia5', ['eia6'], () =>
    gulp.src(source + '/consumption/includes/data_table_cbs_ytd.inc')
    .pipe(gulp.dest(destination + '/consumption/includes/'))
);
gulp.task('eia6', ['eia7'], () =>
gulp.src(source + '/consumption/includes/recent-data.inc')
.pipe(gulp.dest(destination + '/consumption/includes/'))
);
gulp.task('eia7', ['eia8'], () =>
    gulp.src(source + '/electricity/includes/table_data.php')
    .pipe(gulp.dest(destination + '/electricity/includes/'))
);
gulp.task('eia8', ['eia9'], () =>
    gulp.src(source + '/electricity/includes/recent-data.inc')
    .pipe(gulp.dest(destination + '/electricity/includes/'))
);
gulp.task('eia9', ['eia10'], () =>
    gulp.src(source + '/environment/includes/data_table.inc')
    .pipe(gulp.dest(destination + '/environment/includes/'))
);
gulp.task('eia10', ['eia11'], () =>
gulp.src(source + '/environment/includes/recent-data.inc')
.pipe(gulp.dest(destination + '/environment/includes/'))
);
gulp.task('eia11', ['eia12'], () =>
    gulp.src(source + '/finance/includes/data_table_excel.inc')
    .pipe(gulp.dest(destination + '/finance/includes/'))
);
gulp.task('eia12', ['eia13'], () =>
    gulp.src(source + '/finance/includes/recent-data.inc')
    .pipe(gulp.dest(destination + '/finance/includes/'))
);
gulp.task('eia13', ['eia14'], () =>
    gulp.src(source + '/naturalgas/includes/data_table.html')
    .pipe(gulp.dest(destination + '/naturalgas/includes/'))
);
gulp.task('eia14', ['eia15'], () =>
    gulp.src(source + '/naturalgas/includes/recent-data.inc')
    .pipe(gulp.dest(destination + '/naturalgas/includes/'))
);
gulp.task('eia15', ['eia16'], () =>
    gulp.src(source + '/analysis/includes/data_table_excel.inc')
    .pipe(gulp.dest(destination + '/analysis/includes/'))
);
gulp.task('eia16', ['eia17'], () =>
    gulp.src(source + '/nuclear/includes/data_table_dupq.inc')
    .pipe(gulp.dest(destination + '/nuclear/includes/'))
);
gulp.task('eia17', ['eia18'], () =>
    gulp.src(source + '/nuclear/includes/recent-data.inc')
    .pipe(gulp.dest(destination + '/nuclear/includes/'))
);
gulp.task('eia18', ['eia19'], () =>
    gulp.src(source + '/petroleum/includes/data_table.html')
    .pipe(gulp.dest(destination + '/petroleum/includes/'))
);
gulp.task('eia19', ['eia20'], () =>
    gulp.src(source + '/petroleum/includes/recent-data.inc')
    .pipe(gulp.dest(destination + '/petroleum/includes/'))
);
gulp.task('eia20', ['eia21'], () =>
    gulp.src(source + '/renewable/includes/data_table.html')
    .pipe(gulp.dest(destination + '/renewable/includes/'))
);
gulp.task('eia21', ['eia22a'], () =>
    gulp.src(source + '/renewable/includes/recent-data.inc')
    .pipe(gulp.dest(destination + '/renewable/includes/'))
);
gulp.task('eia22a', ['eia23'], () =>
    gulp.src(source + '/totalenergy/includes/data_table_peebs.inc')
    .pipe(gulp.dest(destination + '/totalenergy/includes/'))
);
gulp.task('eia23', () =>
    gulp.src(source + '/totalenergy/includes/recent-data.inc')
    .pipe(gulp.dest(destination + '/totalenergy/includes/'))
);
/*
gulp.task('eia23', ['eia24'], () =>
    gulp.src(source + '/renewable/afv/includes/recent-data.inc')
    .pipe(gulp.dest(destination + '/renewable/afv/includes/'))
);
gulp.task('eia24', ['eia25'], () =>
    gulp.src(source + '/totalenergy/data/annual/includes/recent-data.inc')
    .pipe(gulp.dest(destination + '/totalenergy/data/annual/includes/'))
);
gulp.task('eia25', ['eia26'], () =>
    gulp.src(source + '/totalenergy/data/monthly/includes/recent-data.inc')
    .pipe(gulp.dest(destination + '/totalenergy/data/monthly/includes/'))
);
gulp.task('eia26', () =>
    gulp.src(source + '/uranium/production/quarterly/includes/recent-data.inc')
    .pipe(gulp.dest(destination + '/uranium/production/quarterly/includes/'))
);
*/