import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️  GitHub Pages config:
//   - If deploying to  username.github.io          → base: '/'
//   - If deploying to  username.github.io/my-repo  → base: '/my-repo/'
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})
