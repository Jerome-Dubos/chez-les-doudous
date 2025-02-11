import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/", // Ajoute cette ligne pour gérer les routes sur Vercel
  server: {
    port: 3000
  }
})
