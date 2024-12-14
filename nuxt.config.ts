// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'url';
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  rootDir: 'src/',
  buildDir: 'nuxt-build',
  // エイリアス設定
  alias: {
    pages: fileURLToPath(new URL('./src/pages', import.meta.url)),
    components: fileURLToPath(new URL('./src/components', import.meta.url)),
    layouts: fileURLToPath(new URL('./src/layouts', import.meta.url)),
    utils: fileURLToPath(new URL('./src/utils', import.meta.url)),
    // images: fileURLToPath(new URL('./assets/images', import.meta.url)),
    // style: fileURLToPath(new URL('./assets/style', import.meta.url)),
    // data: fileURLToPath(new URL('./assets/other/data', import.meta.url)),
  },
});
