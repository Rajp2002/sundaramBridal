import { defineConfig } from 'vite';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    root: '.',
    base: '/',
    publicDir: 'public',

    build: {
        outDir: 'dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                services: resolve(__dirname, 'services.html'),
                gallery: resolve(__dirname, 'gallery.html'),
                about: resolve(__dirname, 'about.html'),
                contact: resolve(__dirname, 'contact.html'),
            },
        },
        // Optimize for performance
        minify: 'esbuild',
    },

    server: {
        port: 3000,
        open: true,
        // Hot module replacement
        hmr: true,
    },

    preview: {
        port: 4173,
    },

    css: {
        devSourcemap: true,
    },

    // Optimize dependencies
    optimizeDeps: {
        include: [],
    },
});
