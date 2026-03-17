// vite.config.ts
import { defineConfig } from 'vite'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import React from '@vitejs/plugin-react'

export default defineConfig({
  css: {
    postcss: {
      plugins: [
    
        tailwindcss(), 
        autoprefixer(),
      ],
    },
  },
  plugins: [
    React(),
  ],
})