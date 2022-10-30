import react from '@vitejs/plugin-react'
import {defineConfig} from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/pokemon-boost-emblems/',
  plugins: [react()],
})
