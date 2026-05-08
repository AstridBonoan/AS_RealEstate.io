import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/** GitHub Project Pages site path; set to '/' if you use a custom domain on this repo. */
const pagesBase = '/AS_RealEstate.io/'

export default defineConfig(({ command }) => ({
  base: command === 'build' ? pagesBase : '/',
  plugins: [react(), tailwindcss()],
}))
