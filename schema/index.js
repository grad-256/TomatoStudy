/* eslint-disable no-undef */
const convict = require('convict')

const configSchema = convict({
  env: {
    doc: 'The applicaton environment.',
    format: ['production', 'development', 'test'],
    default: 'production',
    env: 'NODE_ENV',
  },
  srcDir: {
    doc: 'The source srcDir.',
    format: String,
    default: './src',
  },
  rootDir: {
    doc: 'The source rootDir. ./',
    format: String,
    default: './',
  },
  publicDir: {
    doc: 'The source publicDir. out',
    format: String,
    default: 'www/html',
  },
})

configSchema.validate({
  allowed: 'strict',
})

module.exports = configSchema
