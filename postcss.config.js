//postcss-preset-env
//postcss-custom-properties
//postcss-import
const autoprefixer = require('autoprefixer')
const mqpacker = require('css-mqpacker')
const post100vhFix = require('postcss-100vh-fix')
const tailwindcss = require('tailwindcss')

const plugins = [post100vhFix(), autoprefixer(), mqpacker(), tailwindcss()]

if (process.env.NODE_ENV === 'production') {
  plugins.push(require('cssnano'))
}

module.exports = {
  plugins: plugins,
}
