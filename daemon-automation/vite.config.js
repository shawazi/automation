import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Load env file based on mode in development
  const env = process.env.GITHUB_ACTIONS
    ? process.env  // Use process.env directly in GitHub Actions
    : loadEnv(mode, process.cwd(), '')  // Use loadEnv in development
  
  // Debug environment variables during build
  console.log('Build Environment:', {
    GITHUB_ACTIONS: process.env.GITHUB_ACTIONS,
    Mode: mode,
    CALENDLY_URL: env.VITE_CALENDLY_URL ? 'Set' : 'Not Set',
    EMAILJS_SERVICE_ID: env.VITE_EMAILJS_SERVICE_ID ? 'Set' : 'Not Set',
    EMAILJS_TEMPLATE_ID: env.VITE_EMAILJS_TEMPLATE_ID ? 'Set' : 'Not Set',
    EMAILJS_PUBLIC_KEY: env.VITE_EMAILJS_PUBLIC_KEY ? 'Set' : 'Not Set',
    CONTACT_EMAIL: env.VITE_CONTACT_EMAIL ? 'Set' : 'Not Set',
  })

  return {
    plugins: [react()],
    base: '/',  // Using root path since we have a custom domain
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
    define: {
      // Ensure environment variables are properly stringified
      'import.meta.env.VITE_CALENDLY_URL': JSON.stringify(env.VITE_CALENDLY_URL || ''),
      'import.meta.env.VITE_EMAILJS_SERVICE_ID': JSON.stringify(env.VITE_EMAILJS_SERVICE_ID || ''),
      'import.meta.env.VITE_EMAILJS_TEMPLATE_ID': JSON.stringify(env.VITE_EMAILJS_TEMPLATE_ID || ''),
      'import.meta.env.VITE_EMAILJS_PUBLIC_KEY': JSON.stringify(env.VITE_EMAILJS_PUBLIC_KEY || ''),
      'import.meta.env.VITE_CONTACT_EMAIL': JSON.stringify(env.VITE_CONTACT_EMAIL || ''),
    }
  }
})
