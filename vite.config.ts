import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import browserslist from 'browserslist';
import { browserslistToTargets } from 'lightningcss';

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact()],
  css: {
    transformer: 'lightningcss', // Use lightningcss for CSS processing
    lightningcss: {
      targets: browserslistToTargets(browserslist('>= 0.25%')),
    },
  },
  build: {
    cssMinify: 'lightningcss', // Use lightningcss for minification
  },
})
