export default {
  ssr: false,
  head: {
    title: 'Xmas Event',
    htmlAttrs: {
      lang: 'en',
      class: 'geekoutevent',
    },
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, user-scalable=no, user-scalable=0, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0 user-scalable=0',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Xmas Event',
      },
      {
        name: 'format-detection',
        content: 'telephone=no',
      },
      {
        hid: 'theme-color',
        name: 'theme-color',
        content: '#e41f30',
      },
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Commissioner:wght@100;200;300;400;500;600;700;800;900&display=swap',
      },
    ],
    script: []
  },
  css: [
    '@/assets/styles/reset.scss',
    '@/assets/styles/main.scss',
    '@/assets/styles/event/christmas.scss',
  ],
  plugins: [
    { src: '~/plugins/vue-tiny-slider.js', mode: 'client' },
    { src: '~/plugins/events.js', mode: 'client' },
    { src: '~/plugins/gsap.js', mode: 'client' },
    { src: '~/plugins/viewport.js', mode: 'client' },
    { src: '~/plugins/frame.js', mode: 'client' },
    { src: '~/plugins/use-webgl.js', mode: 'client' },
    { src: '~/plugins/mouse.js', mode: 'client' },
  ],
  components: true,
  buildModules: [
    '@nuxt/image',
    '@nuxtjs/svg',
    'nuxt-gsap-module',
  ],
  gsap: {},
  modules: ['@nuxtjs/style-resources'],
  styleResources: {
    scss: [
      '@/assets/styles/helper/_vars-style.scss',
      '@/assets/styles/helper/_vars-helper.scss',
      '@/assets/styles/helper/_mixins.scss',
    ],
  },
  router: {
    base: '/xmas-event/',
    mode: 'history',
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'error',
        path: '*',
        component: resolve(__dirname, 'pages/index.vue'),
      })
    },
  },
  generate: {
    dir: './dist',
  },
  build: {
    target: 'static',
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      })
      config.module.rules.push({
        test: /\.(glsl|vs|fs|vert|frag)$/,
        loader: 'raw-loader',
      })
    },
  },
}
