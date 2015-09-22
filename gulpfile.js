var gulp = require('gulp'),
  gutil = require('gulp-util'),
  webserver = require('gulp-webserver');

gulp.task('js', function() {
  gulp.src('builds/angularvalidation/js/**/*');
});

gulp.task('html', function() {
  gulp.src('builds/angularvalidation/*.html');
});

gulp.task('css', function() {
  gulp.src('builds/angularvalidation/css/*.css');
});

gulp.task('watch', function() {
  gulp.watch('builds/angularvalidation/js/**/*', ['js']);
  gulp.watch('builds/angularvalidation/css/*.css', ['css']);
  gulp.watch(['builds/angularvalidation/*.html',
    'builds/angularvalidation/views/*.html'], ['html']);
});

gulp.task('webserver', function() {
  gulp.src('builds/angularvalidation/')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['watch', 'html', 'js', 'css', 'webserver']);
