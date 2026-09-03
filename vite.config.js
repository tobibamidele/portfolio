import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vercel from 'vite-plugin-vercel/vite';

export default defineConfig({
    vercel: {
        rewrites: [
            {
                source: '/(.*)',
                destination: '/index.html',
            },
        ],
    },
    plugins: [react(), vercel()],
});
