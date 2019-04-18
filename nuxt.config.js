import pkg from './package'

export default {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  router: {
    base: '/reiss-leads/'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/style.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    'plugins/fa',
    'plugins/charts.js',
    'plugins/events.js',
    'plugins/components.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/toast'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  toast: {
    position: 'top-left',
    register: [
      {
        name: 'error',
        message: 'Oops... Something went wrong',
        options: {
          type: 'error'
        }
      }
    ]
  },
  bootstrapVue: {
    bootstrapCSS: false
  },
  /*
  ** Build configuration
  */
  build: {
    babel: {
      plugins: [
        "@babel/plugin-proposal-optional-chaining",
        "@babel/plugin-syntax-dynamic-import"
      ]
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
