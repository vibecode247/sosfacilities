import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import viteImagemin from "vite-plugin-imagemin";
import mozjpeg from "imagemin-mozjpeg";
import pngquant from "imagemin-pngquant";
import webp from "imagemin-webp";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    headers: mode === 'development' ? {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block'
    } : undefined,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    mode === 'production' && viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      mozjpeg: { quality: 80 },
      pngquant: { quality: [0.65, 0.8] },
      webp: { quality: 80 }
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
