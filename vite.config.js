import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    port: 5188,
    open: true,
    host: true
  },
  build: {
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
            return 'vendor';
          }
          if (id.includes('src/data/grade12/math') || id.includes('src/data/grade12/physics') || id.includes('src/data/grade12/chemistry') || id.includes('src/data/grade12/biology') || id.includes('src/data/grade12/informatics') || id.includes('src/data/grade12/technology')) {
            return 'grade12-stem';
          }
          if (id.includes('src/data/grade12/literature') || id.includes('src/data/grade12/english') || id.includes('src/data/grade12/history') || id.includes('src/data/grade12/geography') || id.includes('src/data/grade12/econ_law')) {
            return 'grade12-social';
          }
          if (id.includes('src/data/grade11')) {
            return 'grade11-data';
          }
          if (id.includes('src/data/grade10')) {
            return 'grade10-data';
          }
          if (id.includes('src/data/grade9')) {
            return 'grade9-data';
          }
          if (id.includes('src/data/grade8')) {
            return 'grade8-data';
          }
          if (id.includes('src/data/grade7')) {
            return 'grade7-data';
          }
          if (id.includes('src/data/grade6')) {
            return 'grade6-data';
          }
          if (id.includes('src/data/grade5')) {
            return 'grade5-data';
          }
          if (id.includes('src/data/questionBank') || id.includes('src/data/tiengviet')) {
            return 'grade4-data';
          }
          if (id.includes('src/data/grade3')) {
            return 'grade3-data';
          }
          if (id.includes('src/data/grade2')) {
            return 'grade2-data';
          }
          if (id.includes('src/data/grade1')) {
            return 'grade1-data';
          }
        }
      }
    }
  }
});
