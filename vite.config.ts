import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { analyzer } from 'vite-bundle-analyzer'
import { imagetools } from 'vite-imagetools'


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
		react(), 
		analyzer({
			analyzerPort: 3005
		}),
		imagetools()
	],
    build: {
        outDir: 'build',
    },
})
