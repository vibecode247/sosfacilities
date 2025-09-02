import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import viteImagemin from "vite-plugin-imagemin";
import mozjpeg from "imagemin-mozjpeg";
import pngquant from "imagemin-pngquant";
import webp from "imagemin-webp";
import { execSync } from "child_process";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    headers: mode === 'development' ? {
      'X-Content-Type-Options': 'nosniff',
      'X-XSS-Protection': '1; mode=block',
      'Content-Security-Policy': "frame-ancestors 'self' *.lovable.dev *.sandbox.lovable.dev;"
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
    // Generate static HTML files for social media previews
    mode === 'production' && {
      name: 'generate-static-pages',
      writeBundle() {
        try {
          execSync('node scripts/generate-static-pages.js', { stdio: 'inherit' });
        } catch (error: any) {
          console.warn('Failed to generate static pages:', error.message);
        }
      }
    }
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
