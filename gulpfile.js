'use strict';

/**
 * Dependencies
 * ============
 */

var gulp       = require('gulp');
var concat     = require('gulp-concat');
var less       = require('gulp-less');
var liveReload = require('gulp-livereload');
var notify     = require('gulp-notify');
var plumber    = require('gulp-plumber');
var gulpWatch  = require('gulp-watch');
var path       = require('path');

/**
 * Project Configuration
 * =====================
 */

var config = {

  // Paths for assets & output locations
  paths : {
    less              : './less',
    css               : './assets'
  },

  // Messages to show on error, can be disabled if you hate it but I like it so w/e
  message : {
    enabled      : true,
    less_error   : '🙀  Less error: '
  }

};

/**
 * Project tasks
 * =============
 */

// Compile SCSS to CSS

gulp.task('styles', function () {
  return gulp.src( config.paths.less + '/ideas.less' )
    .pipe(less({ paths: [ path.join(__dirname, 'less', 'includes') ] }))
    .pipe(gulp.dest( config.paths.css ))
    .pipe(liveReload())
  ;
});

// Watch Files (using gulp-watch, has nicer features like watching for new / removed files)

gulp.task('watch', function () {

  liveReload.listen();

  gulpWatch( './**/*.liquid', function () {
    liveReload.reload();
  });

  // Watch for changes to .less files
  gulpWatch( config.paths.scss + '/**/*.less', function () {
    gulp.start('styles');
  });

});

// Default Task (compile SCSS, CoffeeScript, compress images, watch for changes)

gulp.task('default', ['styles', 'watch' ]);
