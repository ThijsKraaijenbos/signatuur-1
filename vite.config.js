import { defineConfig } from 'vite';

export default defineConfig({
    // root: 'src',  // Specify 'src' as the root folder
    // Base URL for GitHub Pages
    base: '/signatuur-1/', // Replace 'your-repo-name' with your actual repo name

    // Build configuration
    build: {
        outDir: 'docs', // Change the output directory to 'public/build'
        emptyOutDir: true, // Ensure the output directory is emptied before the build
        rollupOptions: {
            input: {
                main: './index.html', // Your entry HTML file (if it's different, adjust accordingly)
            },
        },
    },

    // Other configurations (e.g., plugins, server settings)
    server: {
        open: true, // Automatically open the app in the browser on `npm run dev`
    },
});