'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');


gulp.paths = {
  src: 'src',
  dist: 'dist',
  tmp: '.tmp'
};

require('require-dir')('./gulp');

gulp.task('development', ['styles:development', 'scripts:development', 'images', 'fonts' 'misc'], function () {
    gulp.start();
});

gulp.task('production', ['styles:production', 'scripts:production', 'injecting', 'images', 'fonts' 'misc'], function () {
    gulp.start();
});


//IF ABOVE FAILS, TRY METHOD BELOW
/* gulp.task('production', function(callback) {
  runSequence('delete',
  [
    'styles:production',
    'scripts:production',
    'images',
    'fonts',
    'misc'
  ],
  'revision',
  'rev:collect',
  callback);
}); */