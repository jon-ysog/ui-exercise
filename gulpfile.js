var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var newer = require('gulp-newer');

var folder = {
    src: 'app/',
    build: 'dist/'
}

// tasks
gulp.task('html', function() {
	return gulp.src(folder.src + '**/*.html')
		.pipe(newer(folder.build))
		.pipe(gulp.dest(folder.build));
});

gulp.task('sass', function() {
	return gulp.src(folder.src + 'scss/**/*.scss')
		.pipe(concat('test.css'))
		.pipe(sass())
		.pipe(gulp.dest(folder.build + 'css'))
});

gulp.task('js', function() {
	return gulp.src(folder.src + 'js/**/*.js')
    	.pipe(concat('test.js'))
		.pipe(uglify())
		.pipe(gulp.dest(folder.build + 'js/'))
});

gulp.task('images', function() {
  return gulp.src(folder.src + 'images/**/*')
    .pipe(newer(folder.build + 'images/'))
    .pipe(gulp.dest(folder.build + 'images/'));
});

// run all
gulp.task('run', ['html', 'sass', 'js', 'images']);

// watch
gulp.task('watch', function() {
	gulp.watch(folder.src + '**/*.html', ['html']);
	gulp.watch(folder.src + 'scss/**/*', ['sass']);
	gulp.watch(folder.src + 'js/**/*', ['js']);
	gulp.watch(folder.src + 'images/**/*', ['images']);
});

gulp.task('default', ['run', 'watch']);