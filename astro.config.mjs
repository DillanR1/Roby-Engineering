import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    assetsInclude: ['**/*.css'] // Force Vite to bundle src/styles
  }
});