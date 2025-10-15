import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ashish-portfolio/', // must match the repo name exactly (case-sensitive)
})
