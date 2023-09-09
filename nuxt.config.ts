// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["dayjs-nuxt"],
  plugins: [
    {
      src: "@/plugins/lew-ui.ts",
      mode: "client", // client 表示只在客户端渲染时生效
    },
  ],
});
