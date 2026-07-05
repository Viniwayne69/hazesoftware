import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        parceiros: 'parceiros.html',
        solucoes: 'solucoes.html'
      }
    }
  },
  plugins: [react()]
});
