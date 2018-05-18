module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'asyncy.com2',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Marketing site' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://s.pageclip.co/v1/pageclip.css' }
    ],
    script: [
      { src: 'https://s.pageclip.co/v1/pageclip.js' },
      { src: 'https://embed.typeform.com/embed.js' },
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  modules: [
    ['nuxt-google-maps-module', {
      key: 'AIzaSyDWTrdPlgVur0zs-coQAdNw99FagQ-Rors',
    }],
  ],
  plugins: ['~/plugins/globalComponents.js'],
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
        config.module.rules.push({
          test: /\.svg$/,
          loader: 'svg-inline-loader',
          options: {
            removingTagAttrs: ['stroke', 'fill', 'width', 'height'],
          },
        });
        const urlLoader = config.module.rules.find((loader) => loader.loader === 'url-loader')
        urlLoader.test = /\.(png|jpe?g|gif)$/
      }
    }
  }
}
