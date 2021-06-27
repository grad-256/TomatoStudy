const schema = require('../schema')
const browserSync = require('browser-sync')

schema.load({})

schema.validate({
  allowed: 'strict',
})

module.exports = {
  schema,
  server: browserSync.create(),
}
