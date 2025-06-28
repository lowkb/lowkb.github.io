import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig({
  base: '/',
  plugins: [preact()],
  resolve: {
    alias: {
      '@': '/src',
      '@assets': '/assets',
      '@style': '/assets/css',
      '@layouts': '/src/layouts',
      '@pages': '/src/pages',
    }
  }
});
