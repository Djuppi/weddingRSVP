import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@components',
        replacement: path.resolve(__dirname, './src/components'),
      },
      {
        // This alias maps "themes" to the index.js file inside the "src/themes" directory
        find: "@themes",
        replacement: path.resolve(__dirname, 'src/themes.js')
      }
    ]
  },
  optimizeDeps: {
    force: true,
    esbuildOptions: {
        loader: {
            '.js': 'jsx'
        },
    },
},
  base: "/",
  server: {
    port: 1337,
  },

})
