import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Build output set to docs/ folder for GitHub Pages branch deployment (/docs folder)
  outDir: './docs',
  // Custom domain: GitHub Pages serves at the domain ROOT, so base is '/'
  // (the github.io project URL redirects to the custom domain once DNS is verified)
  site: process.env.SITE_URL || 'https://gajalogic.com',
  base: process.env.BASE_PATH || '/',
  vite: {
    plugins: [tailwindcss()],
  },
});

