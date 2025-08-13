import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
import tailwindcss from "tailwindcss";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src')
      // '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
})
