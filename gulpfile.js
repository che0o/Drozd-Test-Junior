const { series, src, dest, watch, parallel } = require('gulp');
const del = require('del');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

function clean(cb) {
    return del('./prod');
    cb();
}


function css() {
    return src('dev/css/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(dest('prod/'))
}

function html() {
    return src('dev/index.html')
        .pipe(dest('prod/'))
}

function js() {
    return src('dev/scripts/*.js')
        .pipe(dest('prod/scripts/'))
}

function img() {
    return src('dev/img/**/*')
        .pipe(dest('prod/img/'))
}

function watcher() {
    watch('dev/css/**/*.scss', css)
    watch('dev/scripts/**/*.js', js)
    watch('dev/index.html', html)
}

exports.clean = clean;
exports.default = parallel(watcher, series(clean, css, html, js, img));