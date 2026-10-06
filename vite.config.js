import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Redirige /api al backend de Django (evita problemas de CORS en desarrollo)
    proxy: {
      '/api': 'http://127.0.0.1:8000',
    },
  },
})
