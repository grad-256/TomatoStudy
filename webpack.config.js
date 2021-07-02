require('dotenv').config()

const { fdir } = require('fdir')
const fs = require('fs')
const path = require('path')
const ignore = require('ignore')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const { SourceMapDevToolPlugin } = require('webpack')

const config = require('./config')
const ref = config.schema
const ig = ignore().add(fs.readFileSync('.ignore', 'utf8'))

const crawler = new fdir()
  .withBasePath()
  .filter(
    (dir) => !ig.ignores(dir) && !dir.startsWith('.') && dir.endsWith('.ts')
  )
  .crawl(path.join(ref.get('srcDir')))

module.exports = (_ = {}, arg) => {
  return {
    mode: arg.mode === 'development' ? 'development' : 'production',
    async entry() {
      const filePaths = await crawler.withPromise()
      const enrties = Object.fromEntries(
        filePaths.map((file) => [
          path
            .relative(path.join(ref.get('srcDir')), file)
            .replace(/\.[^.]+$/, ''),
          `./${file}`,
        ])
      )

      return enrties
    },
    target: ['web', 'es5'],
    watch: arg.mode === 'development' ? true : false,
    output: {
      filename: './[name].js',
      chunkFilename: '[name].js',
      path: path.resolve(__dirname, `${ref.get('publicDir')}/assets/scripts/`),
    },
    devtool: false,
    resolve: {
      plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
      extensions: ['.ts', '.tsx', '.js', '.json'],
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      alias: {
        vue: 'vue/dist/vue.esm.js',
        axios: 'axios/dist/axios.js',
      }
    },
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            minSize: 0,
          },
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          options: {
            configFile: path.resolve(__dirname, 'tsconfig.json'),
          },
        },
      ],
    },
    plugins: [
      arg.mode === 'development'
        ? new SourceMapDevToolPlugin({
            filename: '[name].js.map',
            exclude: ['vendor.js'],
          })
        : '',
    ].filter(Boolean),
    context: __dirname,
  }
}
