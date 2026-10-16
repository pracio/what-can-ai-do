// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // pages.dev 根路径。若要同步到本机 Caddy 的 /wcad/ 预览，改成 '/wcad' 再 build
    base: '/wcad',
});
