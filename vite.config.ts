import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/aunty-shade-stitches/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});