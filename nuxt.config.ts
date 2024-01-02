// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    head: {
        link: [
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;407&display=swap',
            },
        ],
    },
    css: ['@/assets/scss/index.scss'],
    modules: ['@nuxt/image'],
})
