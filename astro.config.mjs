import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Build output set to docs/ folder for GitHub Pages branch deployment (/docs folder)
  outDir: './docs',
  // Site URL and base path support GitHub Pages repository subpaths or custom domains
  site: process.env.SITE_URL || 'https://gajalogic.github.io',
  base: process.env.BASE_PATH || '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
