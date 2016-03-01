var gulp        = require("gulp");
var sass        = require("gulp-sass");
var browserSync = require("browser-sync").create();

// Static Server + watching scss/html files
gulp.task('serve:dev', ['styles:development', 'scripts:development', 'images', 'fonts'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/scss/*.scss", ['styles:development']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});