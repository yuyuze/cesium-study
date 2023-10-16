import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import htmlConfig from 'vite-plugin-html-config';
import { viteExternalsPlugin } from 'vite-plugin-externals';

// https://vitejs.dev/config/
export default defineConfig(function ({ mode }) {
  const env = loadEnv(mode, process.cwd());
  const externalConfig = viteExternalsPlugin({
    cesium: 'Cesium',
  });
  const plugins = [vue()];
  const htmlConfigs = htmlConfig({
    headScripts: [
      {
        src: './lib/cesium/Cesium.js',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: './lib/cesium/Widgets/widgets.css',
      },
    ],
  });
  plugins.push(externalConfig, htmlConfigs);
  return {
    root: './',
    build: {
      assetsDir: './',
      minify: ['false'].includes(env.VITE_IS_MINIFY) ? false : true,
    },
    plugins: plugins,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  };
});
