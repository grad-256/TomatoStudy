require('dotenv').config()

const path = require('path')
const gulp = require('gulp')

const { clean } = require('./tasks/clean')
const { images } = require('./tasks/images')
const { styles } = require('./tasks/styles')

const config = require('../config')
const ref = config.schema

const srcDist = {
  images: path.posix.join(ref.get('rootDir'), '/assets/images'),
  styles: path.posix.join(ref.get('rootDir'), '/assets/styles'),
}

function watch(done) {
  gulp.watch(srcDist.images, images)
  gulp.watch(srcDist.styles, styles)
  done()
}

const build = gulp.series(clean, gulp.parallel(images, styles))
const start = gulp.series(build, gulp.parallel(watch))

exports.build = build
exports.default = start
