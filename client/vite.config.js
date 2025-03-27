import { defineConfig } from 'vite'
import ssr from 'vite-plugin-ssr/plugin'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
    // ssr(),
  ],
})