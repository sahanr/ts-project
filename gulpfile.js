var gulp = require('gulp');
var sass = require('gulp-sass');
var clean = require('gulp-clean');;
var browserify = require('gulp-browserify');
var ts = require('gulp-typescript');
var tsProject = ts.createProject("tsconfig.json");

gulp.task('sass', function() {
	gulp.src('public/stylesheets/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('dist/public/stylesheets'));
});

gulp.task('clean', function () {
    return gulp
        .src('dist/public/javascript/**')
        .pipe(clean());
});

gulp.task("typescript", ['clean'],  function () {
    return tsProject.src()
        .pipe(tsProject()).js
        .pipe(gulp.dest("dist"));
});

gulp.task('bundle-js', ['typescript'], function () {
    return gulp
        .src('dist/public/**/*.js')
        .pipe(browserify())
        .pipe(gulp.dest('./dist/public'))
});

gulp.task('default', ['sass', 'bundle-js']);