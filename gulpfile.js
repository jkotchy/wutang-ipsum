    var gulp = require('gulp');
    var gutil = require('gulp-util');
	var uglify = require('gulp-uglify');
	var imagemin = require('gulp-imagemin');
	var pngquant = require('imagemin-pngquant');
	var minifyHTML = require('gulp-minify-html');
	var sass = require('gulp-sass');

gulp.task('img', function () {
    return gulp.src('images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('gulp-img'));
});

gulp.task('compress', function() {
	  gulp.src('js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('gulp-js'))
	});
       

gulp.task('minify-html', function() {
    var opts = {comments:true,spare:true};
    
  gulp.src('*.html')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest(''))
});

 
gulp.task('sass', function () {
    gulp.src('*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./gulp-css'));
});