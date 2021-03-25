export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'bootstrap-App',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    ['@nuxtjs/proxy', { ws : false}],
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],
  // auth: {
  //   strategies: {
  //     local: {
  //       token: {
  //         property: 'csrf_token'
  //       },
  //       endpoints: {
  //         login: { url: 'api/auth/user/login?_format=hal_json', method: 'post', propertyName: 'csrf_token' },
  //         user: { url: 'api/user/1?_format=json', method: 'get', propertyName: false },
  //         logout: { url: 'api/auth/user/logout?_format=json&token=logout_token', method: 'post' } 
  //       }
  //     }
  //   }
  // },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxyHeaders: false,
    credentials: false,
    proxy:true
  },
  proxy: {
    '/api/': { target: 'http://my-first-drupal8-app.lndo.site:8000', pathRewrite: {'^/api/': ''}, changeOrigin: true }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
