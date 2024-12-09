import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ jsxRuntime: 'automatic' })],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setup-tests.js',
    css: false,
  },
});