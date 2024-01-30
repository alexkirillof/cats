import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/cats/',
  plugins: [react()],
  server: {
    port: 3000,
    host: true
  },
  resolve: {
    alias: {
      src: '/src'
    }
  }
})
