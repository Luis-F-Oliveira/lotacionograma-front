import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/interface/components',
      '@partials': '/src/interface/partials',
      '@pages': '/src/pages',
      '@context': '/src/data/contexts',
      '@services': '/src/data/services',
      '@hooks': '/src/data/hooks',
    },
  },
})
