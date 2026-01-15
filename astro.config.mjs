// @ts-check
import { defineConfig } from 'astro/config'; //astro cms konfigurálása (statikus oldal generátor)

import tailwindcss from "@tailwindcss/vite"; //tailwind konfigurálása (style)

import netlify from "@astrojs/netlify"; //Netlify konfigurálása (publikáláshoz)

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  adapter: netlify(),
});