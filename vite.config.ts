import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { analyzer, visualizer } from 'vite-bundle-analyzer'


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
		react(), 
		analyzer({
			analyzerPort: 3005
		}),
	],
    build: {
        outDir: 'build',
    },
})
