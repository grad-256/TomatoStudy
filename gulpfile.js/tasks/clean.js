const del = require('del')
const config = require('../../config')
const ref = config.schema

const clean = () => {
  return del(ref.get('publicDir') + '/assets')
}

exports.clean = clean
