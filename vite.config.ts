
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  // Define process.env.API_KEY para que esteja disponível no bundle do cliente
  define: {
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY)
  }
});
