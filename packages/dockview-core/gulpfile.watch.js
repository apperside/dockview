const gulp = require('gulp');
const gulpSass = require('gulp-dart-sass');
const concat = require('gulp-concat');

// Import the sass task definition to keep it DRY
gulp.task('sass', () => {
    return gulp
        .src('./src/**/*.scss')
        .pipe(gulpSass().on('error', gulpSass.logError))
        .pipe(concat('dockview.css'))
        .pipe(gulp.dest('./dist/styles/'));
});

gulp.task('watch', () => {
    return gulp.watch('./src/**/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series(['sass', 'watch'])); 