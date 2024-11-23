import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: '/Portfolio/',
  // base: '/',
  plugins: [react(),viteTsconfigPaths()],
  server: {
    host: true,
    port: 5173,
  },
});