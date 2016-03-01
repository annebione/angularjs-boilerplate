var gulp = require('gulp');


gulp.task('index', function() {
    var inject = require('gulp-inject');
    var target = gulp.src('./dist/index.html');

    // Read = false will not read the file contents and make the task faster
    var sources = gulp.src(['./dist/js/index.bundle.js', './dist/css/index.bundle.css'], {
        read: false
    });

    return target
    .pipe(inject(sources, {

        // Do not add a root slash to the beginning of the path
        addRootSlash: false,

        // Remove the `public` from the path when doing the injection
        ignorePath: 'dist'
    }))
    .pipe(gulp.dest('dist'));
});


gulp.task('home', ['index'], function() {
    var inject = require('gulp-inject');
    var target = gulp.src('./dist/views/home.html');

    // Read = false will not read the file contents and make the task faster
    var sources = gulp.src(['./dist/js/home.bundle.js', './dist/css/home.bundle.css'], {
        read: false
    });

    return target
    .pipe(inject(sources, {

        // Do not add a root slash to the beginning of the path
        addRootSlash: false,

        // Remove the `public` from the path when doing the injection
        ignorePath: 'dist'
    }))
    .pipe(gulp.dest('dist/views'));
});



gulp.task('injections', ['index', 'home'], function() {
    gulp.start();
})