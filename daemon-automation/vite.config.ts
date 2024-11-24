import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/daemon-automation/', // Updated for GitHub Pages
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})
