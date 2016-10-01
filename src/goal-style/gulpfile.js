/// <binding BeforeBuild='scriptsNStyles' />
var ts = require('gulp-typescript');
var gulp = require('gulp');
var clean = require('gulp-clean');
var sass = require('gulp-sass');

var destPath = './wwwroot/libs/';

gulp.task('sassCompile', () => {
    var sassResult = gulp.src('css/*.scss')
        .pipe(sass());

    return sassResult.pipe(gulp.dest('./wwwroot/appCss'));
});

gulp.task('watch.sass', function () {
    gulp.watch('css/*.scss', ['sassCompile']);
});

// Delete the dist directory
gulp.task('clean', function () {
    return gulp.src(destPath)
        .pipe(clean());
});

gulp.task("scriptsNStyles", () => {
    gulp.src([
            'core-js/client/**',
            'systemjs/dist/system.src.js',
            'reflect-metadata/**',
            'rxjs/**',
            'zone.js/dist/**',
            '@angular/**',
            "angular2-in-memory-web-api/**",
            'jquery/dist/jquery.*js',
            'bootstrap/dist/js/bootstrap.*js',
            'bootstrap/dist/css/bootstrap.*css',
            'bootstrap/dist/fonts/**'
    ], {
        cwd: "node_modules/**"
    })
        .pipe(gulp.dest("./wwwroot/libs"));
});

var tsProject = ts.createProject('scripts/tsconfig.json');
gulp.task('ts', function (done) {
    var tsResult = gulp.src([
            "scripts/*.ts"
    ])
        .pipe(ts(tsProject), undefined, ts.reporter.fullReporter());
    return tsResult.js.pipe(gulp.dest('./wwwroot/appScripts'));
});

gulp.task('watch', ['watch.ts', "watch.sass"]);

gulp.task('watch.ts', ['ts'], function () {
    return gulp.watch('scripts/*.ts', ['ts']);
});

gulp.task('default', ['scriptsNStyles', 'watch']);