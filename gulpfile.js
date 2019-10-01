const gulp = require('gulp');
const sass = require('gulp-sass');
const removeFiles = require('gulp-remove-files');

gulp.task('clean', function () {
  gulp.src('./dist/*')
    .pipe(removeFiles());
});
 
gulp.task('sass', () => {
  gulp.src('assets/scss/main.scss')
  	.pipe(sass())
    .pipe(gulp.dest('./dist'));
});
 
gulp.task('watch', () => {
  gulp.watch('assets/scss/**/*.{scss,css}', ['sass']);
});


gulp.task('dev', ['clean', 'sass', 'watch']);
gulp.task('default', ['sass']);