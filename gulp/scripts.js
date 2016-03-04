'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const modernizr = require('gulp-modernizr');
const gzip = require('gulp-gzip');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('scripts:development', function () {
    return gulp.src('src/*.js')
        .pipe(babel({
            presets: ['es2015']
        })
        .pipe(modernizr())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gzip())
        .pipe(gulp.dest('./app/js'));
});



//INTENDED TO RUN AFTER WEBPACK CODE SPLITTING
gulp.task('scripts:production', function () {
    return gulp.src('src/*.js')
        .pipe(babel({
            presets: ['es2015']
        })
        .pipe(modernizr())
        .pipe(uglify())
        .pipe(gzip())
        .pipe(gulp.dest('./dist/js'));
});
