import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'esbuild',
    cssCodeSplit: true,
    reportCompressedSize: false,
    rollupOptions: {
      output: {
        manualChunks: {
          // Split React core into a vendor chunk for long-term caching
          vendor: ['react', 'react-dom'],
          // Split routing separately so it's cached independently
          router: ['react-router-dom'],
        },
      },
    },
  },
})
