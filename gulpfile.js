var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass')(require('sass'));

// Static Server + watching scss/html files
function watch () {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./blocks/**/*.scss", style);
    gulp.watch("./*.html").on('change', browserSync.reload);
};

// Compile sass into CSS & auto-inject into browsers
function style() {
    return gulp.src("./blocks/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./css"))
        .pipe(browserSync.stream());
};
 exports.style = style;
 exports.watch = watch;