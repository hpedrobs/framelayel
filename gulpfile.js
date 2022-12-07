const sass = require('gulp-sass')(require('sass'))
const gulp = require('gulp')
const uglify = require('gulp-uglify')
const cleanCSS = require('gulp-clean-css')

const pathjs = 'src/javascripts/**/*.js'
const pathscss = 'src/scss/**/*.scss'
const pathcomponents = 'src/components/**/*.vue'
const pathimages = 'src/images/**/*'
const pathfavicon = 'src/favicon.ico'

function scripts () {
    return gulp.src(pathjs)
        .pipe(uglify())
        .pipe(gulp.dest('dist/javascripts/'))
}

function stylesheets () {
    return gulp.src(pathscss)
        .pipe(sass())
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('dist/stylesheets/'))
}

function images () {
    return gulp.src(pathimages)
        .pipe(gulp.dest('dist/images/'))
}

function favicon () {
    return gulp.src(pathfavicon)
        .pipe(gulp.dest('dist/'))
}

async function build () {
    scripts()
    stylesheets()
    // images()
    // favicon()
}

exports.scripts = scripts
exports.stylesheets = stylesheets
exports.images = images
exports.favicon = favicon
exports.build = build

exports.watch = function () {
    gulp.watch(pathjs, scripts)
    gulp.watch(pathscss, stylesheets)
    gulp.watch(pathimages, images)
    gulp.watch(pathfavicon, favicon)
}