/* eslint-disable no-undef */
const { src, dest } = require('gulp')
const gulpCached = require('gulp-cached')
const gulpIf = require('gulp-if')
const config = require('../../config')
const ref = config.schema
const browser = config.server

const isEnv = ref.get('env') === 'development'
const destDir = `${ref.get('publicDir')}/assets/images`
const srcDir = `${ref.get('rootDir')}assets/images/**/*.+(png|jpg|gif|svg)`
const baseDir = `${ref.get('rootDir')}assets/images`

const images = () => {
  return src(`${srcDir}`, {
    base: baseDir,
  })
    .pipe(gulpCached(destDir))
    .pipe(dest(destDir))
    .pipe(gulpIf(isEnv, browser.stream()))
}

exports.images = images
