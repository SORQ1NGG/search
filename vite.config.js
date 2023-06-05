import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import createSvgSpritePlugin from 'vite-plugin-svg-sprite';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
    plugins: [vue(),
        createSvgSpritePlugin({
            symbolId: 'icon-[name]-[hash]',
        })],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                    @import "@/assets/css/variables-sass.scss";
                    `,
            },
        },
    },

    test: {
        globals: true,
        environment: 'jsdom',
        coverage: {
            reporter: ['text', 'json', 'html'],
        },
    },
});
