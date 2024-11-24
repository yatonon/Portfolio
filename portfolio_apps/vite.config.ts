import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import * as dotenv from 'dotenv';

const env = dotenv.config({ path: './.env.production' }).parsed;

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? env?.VITE_BASE_PATH : '/',
  plugins: [react(), viteTsconfigPaths()],
  server: {
    host: true,
    port: 5173,
  },
}));
