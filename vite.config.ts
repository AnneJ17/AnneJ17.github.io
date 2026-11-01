import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Your site lives at https://annej17.github.io/ (the root), so the base is '/'
  base: '/',
  plugins: [react(), tailwindcss()],
})