import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: ['index.html', 'cenik.html', 'kontakt.html'],
    },
  },
})
