// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxt/image',
    '@nuxt/content',
    '@formkit/nuxt',
    '@nuxtjs/seo',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],

  css: ['~/assets/css/main.css'],

  // Google Fonts configuration
  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700],
      'Playfair Display': [400, 500, 600, 700]
    },
    display: 'swap'
  },

  // Image optimization
  image: {
    quality: 80,
    format: ['webp', 'jpg'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  },

  // SEO configuration
  site: {
    url: 'https://tak-taby.com',
    name: 'Tak Taby - Professional Roofing Services',
    description: 'Professional roofing services including installation, repair, and maintenance. Quality craftsmanship and reliable service.',
    defaultLocale: 'en'
  },

  // Content configuration
  content: {
    highlight: {
      theme: 'github-light'
    }
  },

  // FormKit configuration
  formkit: {
    autoImport: true
  },

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-11-27'
})