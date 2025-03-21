// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  site: 'https://sylian1337.github.io/',
  base: 'Test-Website',
  integrations: [
    react(), 
    starlight({
      favicon: '/src/assets/SylCore-LogoOnly-Without-BG.png',
      title: 'SylCore Docs',
      description: 'Documentation for SylCore',
      
      sidebar: [
        {
          label: 'SylCore Installation',
          items: [
            { label: 'Requirements', link: 'guides/requirements' },
            { label: 'Installation', link: 'guides/installation' },
            { label: 'Server Setup', link: 'guides/server-setup' },
            { label: 'Final Server Steps', link: 'guides/final-server-steps' },
            //{ label: 'Troubleshooting', link: 'guides/troubleshooting' },
          ],
        },
      ],
    }),
  ]
});