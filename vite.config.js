import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import eslint from 'vite-plugin-eslint'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  define: {
    // eslint-disable-next-line no-undef
    'process.env': process.env
  },
  optimizeDeps: {
    include: ['@emotion/react', '@emotion/styled', '@mui/material/Tooltip']
  },
  plugins: [
    react(),
    eslint(),
    svgr()
  ],
  resolve: {
    alias: [
      { find: '~', replacement: '/src' }
    ]
  }
})
