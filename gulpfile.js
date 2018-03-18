var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var csso = require('gulp-csso');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('sass', function() {
    gulp.src([
        'public/**/*.scss'
    ])
        //.pipe(concat('style.js'))
        .pipe(plumber())
        .pipe(sass())
        //.pipe(concat('style.css'))
        .pipe(gulp.dest('build'));
});

gulp.task('compress-dev', function() {
    gulp.src([
        'node_modules/angular/angular.js',
        'node_modules/angular-ui-router/release/angular-ui-router.js',
        'node_modules/angular-animate/angular-animate.js',
        'bower_components/oclazyload/dist/ocLazyLoad.min.js'
    ])
        .pipe(concat('script.min.js'))
        .pipe(gulp.dest('build/scripts'));
});

gulp.task('main-script', function() {
    gulp.src([
        'app.js',
        'src/main/**/*.js',
        'src/main/*.js'
    ])
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest('build/scripts'));
    gulp.src([
        'admin/scripts/*.js',
    ])
        .pipe(concat('adminapp.min.js'))
        .pipe(gulp.dest('build/admin'));
});

gulp.task('controllers', function() {
    gulp.src([
        'src/controller/*.js',
        'src/controller/**/*.js',
    ])
        .pipe(gulp.dest('build/scripts/controller'));
    gulp.src([
        'admin/scripts/controller/*.js'
    ])
        .pipe(gulp.dest('build/admin/controller'));
});

/*gulp.task('main-css', function() {
    gulp.src([
        
    ])  .pipe(sass())
        .pipe(concat('main-css.css'))
        .pipe(gulp.dest('build/styles'));
});
*/

gulp.task('compress-prod', function() {
    gulp.src([
        'node_modules/angular/angular.js',
        'node_modules/angular-ui-router/release/angular-ui-router.js',
        'node_modules/angular-animate/angular-animate.js',
        'app.js',
        'src/**/*.js',
    ])
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build'));
});

gulp.task('watch', function() {
    gulp.watch('public/styles/*.scss', ['sass']);
    gulp.watch('src/modules/**/*.scss', ['sass']);
    gulp.watch('src/**/*.js', ['main-script']);
    gulp.watch('src/*.js', ['main-script']);
    gulp.watch('app.js', ['main-script']);
    gulp.watch('admin/scripts/*.js', ['main-script']); //admin
    gulp.watch('src/controller/*.js', ['controllers']);
    gulp.watch('src/controller/**/*.js', ['controllers']);
    gulp.watch('admin/scripts/controller/*.js', ['controllers']);
});

gulp.task('dev',  ['sass', 'compress-dev','main-script','controllers' , 'watch']);
gulp.task('build', ['sass', 'compress-prod']);