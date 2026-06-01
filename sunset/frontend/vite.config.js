import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Local dev proxy (only used when running `vite` locally, not in production)
  server: {
    proxy: {
      '/api': 'http://localhost:5000'
    }
  }
})
