var gulp = require('gulp'),
    imageMin = require('gulp-imagemin')
    
gulp.task('build-img', function(){

    gulp.src('src/img/**/*')
        .pipe(imageMin())
        .pipe(gulp.dest('src/img'));
});