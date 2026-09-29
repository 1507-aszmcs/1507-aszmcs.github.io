// @ts-check
import { defineConfig } from 'astro/config'; //astro cms konfigurálása (statikus oldal generátor)

import tailwindcss from "@tailwindcss/vite"; //tailwind konfigurálása (style)

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});