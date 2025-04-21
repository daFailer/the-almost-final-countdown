import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  let base = '/'

  if (mode === 'test') {
    base = '/the-almost-final-countdown/'
  }

  return {
    plugins: [react()],
    base,
  }
})
