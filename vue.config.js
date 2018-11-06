const path = require('path')

function resolve (dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [resolve('src/assets/*.scss')]
    }
  }
}
