/* eslint-disable no-undef */
const sass = require('sass')
const csso = require('csso')
const Fiber = require('fibers')
const CleanCSS = require('clean-css')
const transform = require('stream-transform')
const { src, dest } = require('gulp')
const gulpCached = require('gulp-cached')
const gulpIf = require('gulp-if')
const gulpSass = require('gulp-sass')
const gulpPostcss = require('gulp-postcss')
const sourcemaps = require('gulp-sourcemaps')
const config = require('../../config')
gulpSass.compiler = sass

const ref = config.schema
const browser = config.server

const isEnv = ref.get('env') === 'development'
const destDir = `${ref.get('publicDir')}/assets/styles`
const srcDir = `${ref.get('rootDir')}assets/styles/**/*.scss`
const baseDir = `${ref.get('rootDir')}assets/styles`
const cleanCss = new CleanCSS({
  level: 2,
})

console.log(srcDir)

const styles = () => {
  return src(`${srcDir}`, {
    base: baseDir,
  })
    .pipe(gulpIf(isEnv, sourcemaps.init()))
    .pipe(
      gulpSass({
        outputStyle: 'expanded',
        fiber: Fiber,
      }).on('error', gulpSass.logError)
    )
    .pipe(gulpIf(isEnv, gulpCached('styles')))
    .pipe(gulpPostcss())
    .pipe(
      gulpIf(
        isEnv,
        sourcemaps.write({
          sourceRoot: '.',
        })
      )
    )
    .pipe(
      gulpIf(
        !isEnv,
        transform(function (data) {
          const result = csso.minify(data.contents.toString(), {
            forceMediaMerge: true,
          })

          data.contents = Buffer.from(result.css)
          return data
        })
      )
    )
    .pipe(
      gulpIf(
        !isEnv,
        transform(function (data) {
          const result = cleanCss.minify(data.contents.toString())
          data.contents = Buffer.from(result.styles)
          return data
        })
      )
    )
    .pipe(dest(destDir))
    .pipe(gulpIf(isEnv, browser.stream()))
}

exports.styles = styles
