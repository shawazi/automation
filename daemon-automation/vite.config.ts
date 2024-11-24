import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import process from 'process'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/daemon-automation/' : '/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})
