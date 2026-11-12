import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Build output set to docs/ folder for GitHub Pages branch deployment (/docs folder)
  outDir: './docs',
  // GitHub Pages project site: https://sanjibparida.github.io/gajalogic/
  // Env overrides exist for CI (deploy.yml passes configure-pages outputs);
  // defaults match this repository's actual Pages URL so local builds are correct too.
  site: process.env.SITE_URL || 'https://sanjibparida.github.io',
  base: process.env.BASE_PATH || '/gajalogic',
  vite: {
    plugins: [tailwindcss()],
  },
});

