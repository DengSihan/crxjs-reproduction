import { crx } from '@crxjs/vite-plugin';
import vue from '@vitejs/plugin-vue';
import manifest from './manifest.json';
import path from 'path';
import { ManifestV3Export } from '@crxjs/vite-plugin/dist/index.d';

export default {
        
    resolve: {
        alias: {
            '~': path.resolve(__dirname, `./src/`),
        }
    },

    plugins: [
        vue(),
        crx({ manifest: manifest as ManifestV3Export }),
    ],

    build: {
        rollupOptions: {
            input: {
                popup: path.resolve(__dirname, 'src/popup/index.html'),
                bootstrap: path.resolve(__dirname, 'src/bootstrap/index.html'),
            },
        },
    }
}
