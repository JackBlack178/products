import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        autoprefixer({})
      ]
    }
  },
  server: {
    port: 80,
    strictPort: true,
  }
});
