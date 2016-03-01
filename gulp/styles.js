'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const uncss = require('gulp-uncss');
const csso = require('gulp-csso');
const shorthand = require('gulp-shortand');
const gzip = require('gulp-gzip');
const base64 = require('gulp-base64');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('styles:development', function () {
    return gulp.src('src/*.scss')
        .pipe(sass())
        .pipe(uncss())
        .pipe(shorthand())
        .pipe(base64())
        .pipe(csso())
        .pipe(sourcemaps.write())
        .pipe(gzip())
        .pipe(gulp.dest('./app/css'));
});



//INTENDED TO RUN AFTER WEBPACK CODE SPLITTING
gulp.task('styles:production', function () {
    return gulp.src('dist/*.css')
        .pipe(uncss())
        .pipe(shorthand())
        .pipe(base64())
        .pipe(csso())
        .pipe(gzip())
        .pipe(gulp.dest('./dist/css'));
});