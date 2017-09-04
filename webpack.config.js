var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: {
    'potato-core': './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].common.js'
  }
}
