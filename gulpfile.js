const gulp = require('gulp-help')(require('gulp'));
const fs = require('fs');
const del = require('del');
const concatCss = require('gulp-concat-css');
const mustache = require('gulp-mustache');
const rename = require('gulp-rename');
const chug = require('gulp-chug');


gulp.task('clean', 'Clean the dist folder', function() {
  del.sync(['./dist'])
});


gulp.task('build:semantic', 'Call the build command of semantic', function() {
  return gulp
    .src('./semantic/gulpfile.js')
    .pipe(chug({ tasks: ['build'] }));
});


gulp.task('images:copy', 'Copy the images to dist', function() {
  return gulp
    .src('./assets/images/*')
    .pipe(gulp.dest('./dist/assets/images'));
});


gulp.task('build:css', 'Compat the assets', function() {
  return gulp
    .src(['./assets/css/*', './semantic/dist/semantic.min.css'])
    .pipe(concatCss('style.css'))
    .pipe(gulp.dest('./dist/assets'));
});


gulp.task('build:html', 'Build the HTML from mustache', ['build:css'], function() {
  return gulp.src('./src/*.mustache')
    .pipe(mustache('./src/data.json',{},{}))
    .pipe(rename({ extname: '.html' }))
    .pipe(gulp.dest('./dist'));
});


gulp.task('build',
  'Build the website',
  ['build:semantic', 'clean', 'images:copy', 'build:html'],
  function() {}
);


gulp.task('watch',
  'Rebuild the website on file change',
  ['build'],
  function() {
    gulp.watch('./src/*.mustache', ['build:html']);
    gulp.watch(['./assets/css/*', './semantic/dist/semantic.min.css'], ['build:css']);
    gulp.watch('./assets/images/*', ['images:copy']);

    gulp
      .src('./semantic/gulpfile.js')
      .pipe(chug({ tasks: ['watch'] }));
  }
);


gulp.task('default', false, [ 'watch' ]);
