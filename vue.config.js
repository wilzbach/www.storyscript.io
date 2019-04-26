const path = require('path')
const SitemapPlugin = require('sitemap-webpack-plugin').default
const prettydata = require('pretty-data')

const url = process.env.NODE_ENV !== 'production' ? 'http://localhost:8080' : 'https://storyscript.io'
const paths = ['/', '/about', '/contact', '/events']

function resolve (dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  configureWebpack: {
    plugins: [
      new SitemapPlugin(url, paths, {
        changeFreq: 'weekly',
        skipGzip: true,
        formatter: xml => prettydata.pd.xml(xml)
      })
    ]
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [resolve('src/assets/base.scss')]
    }
  },
  devServer: {
    disableHostCheck: true
  }
}
