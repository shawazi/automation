const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react-swc');

module.exports = defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/automation/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
}));
