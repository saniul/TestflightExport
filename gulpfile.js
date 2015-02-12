var gulp = require('gulp'),
    clipboard = require('gulp-clipboard'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    artoo = require('gulp-artoo');

gulp.task('default', function() {
  return gulp.src('./index.js')
    .pipe(uglify())
    .pipe(rename('testflightexport.bookmark.js'))
    .pipe(artoo())
    .pipe(clipboard())
    .pipe(gulp.dest('./build'));
});
