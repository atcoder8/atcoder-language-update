// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],

  app: {
    head: {
      title: "AtCoder言語アップデート",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [{ rel: "icon", type: "image/jpeg", href: "favicon.ico" }],
      htmlAttrs: {
        lang: "ja",
      },
    },
  },

  typescript: {
    strict: true,
  },

  imports: {
    dirs: ["./types"],
  },
});
