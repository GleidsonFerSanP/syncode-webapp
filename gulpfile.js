var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    htmlReplace = require('gulp-html-replace'),
    uglify = require('gulp-uglify'),
    usemin = require('gulp-usemin'),
    cssmin = require('gulp-cssmin'),
    browserSync = require('browser-sync'),
    jshint = require('gulp-jshint'),
    jshintStylish = require('jshint-stylish'),
    csslint = require('gulp-csslint'),
    autoprefixer = require('gulp-autoprefixer')

gulp.task('default', ['copy'], function() {
    gulp.start('build-img', 'usemin');
});

gulp.task('copy', ['clean'], function() {
    return gulp.src('src/**/*')
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', function() {
    return gulp.src('dist')
        .pipe(clean());
});

gulp.task('build-img', function() {

    return gulp.src('dist/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

gulp.task('usemin', function() {
    return gulp.src('dist/**/*.html')
        .pipe(usemin({
            //js: [uglify],
            css: [autoprefixer]
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: 'src'
        }
    });

    gulp.watch('src/**/*').on('change', browserSync.reload);

    gulp.watch(
        [
            "js/libs/angular/angular.min.js",
            "js/libs/angular-ui-mask/dist/mask.min.js",
            "js/libs/angular-input-masks/angular-input-masks-standalone.min.js",
            "js/libs/angular-locale/angular-locale_pt-br.js",
            "js/libs/ngstorage/ngStorage.min.js",
            "js/libs/angular-route/angular-route.min.js",
            "js/libs/jquery/jquery-1.10.2.min.js",
            "js/libs/bootstrap/bootstrap.min.js",
            "js/libs/ng-dialog/js/ngDialog.min.js",
            "js/app.js",
            "js/config/app.config.js",
            "js/services/timestamp.service.js",
            "js/config/interceptors.config.js",
            "js/services/login.service.js",
            "js/services/conta.service.js",
            "js/services/cliente.service.js",
            "js/services/transacao.service.js",
            "js/controllers/login.controller.js",
            "js/controllers/home.controller.js",
            "js/controllers/cliente.controller.js",
            "js/controllers/conta.controller.js",
            "js/directives/transacoes.directive.js",
        ]
    ).on('change', function(event) {
        gulp.src(event.path)
            .pipe(jshint())
            .pipe(jshint.reporter(jshintStylish));
    });

    gulp.watch('src/css/**/*.css').on('change', function(event) {
        console.log("Linting " + event.path);
        gulp.src(event.path)
            .pipe(csslint())
            .pipe(csslint.reporter());
    });

});