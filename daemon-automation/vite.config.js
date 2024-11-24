import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

// Debug environment variables during build
console.log('Vite Build Environment Variables:');
console.log('VITE_CALENDLY_URL:', process.env.VITE_CALENDLY_URL);
console.log('VITE_EMAILJS_SERVICE_ID:', process.env.VITE_EMAILJS_SERVICE_ID);
console.log('VITE_EMAILJS_TEMPLATE_ID:', process.env.VITE_EMAILJS_TEMPLATE_ID);
console.log('VITE_EMAILJS_PUBLIC_KEY:', process.env.VITE_EMAILJS_PUBLIC_KEY);
console.log('VITE_CONTACT_EMAIL:', process.env.VITE_CONTACT_EMAIL);

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // Load env file based on mode
  const env = loadEnv(mode, process.cwd(), '')
  
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
      'import.meta.env.VITE_CALENDLY_URL': JSON.stringify(env.VITE_CALENDLY_URL),
      'import.meta.env.VITE_EMAILJS_SERVICE_ID': JSON.stringify(env.VITE_EMAILJS_SERVICE_ID),
      'import.meta.env.VITE_EMAILJS_TEMPLATE_ID': JSON.stringify(env.VITE_EMAILJS_TEMPLATE_ID),
      'import.meta.env.VITE_EMAILJS_PUBLIC_KEY': JSON.stringify(env.VITE_EMAILJS_PUBLIC_KEY),
      'import.meta.env.VITE_CONTACT_EMAIL': JSON.stringify(env.VITE_CONTACT_EMAIL),
    }
  }
})
