import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    origin: 'https://apirestpruebatecnica.somee.com',
    
  },
  plugins: [vue()],
});

