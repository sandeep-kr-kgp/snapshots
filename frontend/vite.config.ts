import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/snapshots/',
    build: { outDir: '../docs', emptyOutDir: true },
    server: {
        proxy: {
            '/backend': {
                target: 'http://localhost:3000/',
                changeOrigin: true,
                secure: false,
            },
        },
    },
});
