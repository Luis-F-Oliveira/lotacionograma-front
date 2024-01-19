import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/interface/components',
      '@theme': '/src/interface/theme',
      '@pages': '/src/pages',
      '@context': '/src/data/contexts',
      '@hooks': '/src/data/hooks',
    },
  },
})
