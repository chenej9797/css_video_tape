var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
	return gulp.src('source/scss/style.scss')
		.pipe(sass())
		.pipe(gulp.dest('public/stylesheets/'))
});