const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();


//compile scss into css
function style() {
    // 1. where is my scss file
    return gulp.src('./sass/**/*.scss')
    // 2. pass the file through sass compiler
    .pipe(sass())
    // 3. where do i save the compiled CSS ?
    .pipe(gulp.dest('./css'))
}

exports.style = style;