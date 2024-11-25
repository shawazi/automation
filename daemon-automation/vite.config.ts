import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/automation/',
  build: {
    outDir: 'dist',
    sourcemap: true,
    // Ensure environment variables are replaced during build
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'calendly': ['react-calendly'],
        },
      },
    },
  },
  define: {
    // Ensure these are replaced at build time
    'import.meta.env.VITE_CALENDLY_URL': JSON.stringify(process.env.VITE_CALENDLY_URL),
    'import.meta.env.VITE_CONTACT_EMAIL': JSON.stringify(process.env.VITE_CONTACT_EMAIL),
    'import.meta.env.VITE_EMAILJS_PUBLIC_KEY': JSON.stringify(process.env.VITE_EMAILJS_PUBLIC_KEY),
    'import.meta.env.VITE_EMAILJS_SERVICE_ID': JSON.stringify(process.env.VITE_EMAILJS_SERVICE_ID),
    'import.meta.env.VITE_EMAILJS_TEMPLATE_ID': JSON.stringify(process.env.VITE_EMAILJS_TEMPLATE_ID),
  },
})
