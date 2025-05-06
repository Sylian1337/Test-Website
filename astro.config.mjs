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

  site: 'https://sylcore.org',

  integrations: [
    react(), 
    starlight({
      favicon: '/SylCore-LogoOnly-Without-BG.png',
      title: 'SylCore Docs',
      description: 'Documentation for SylCore',
      
      sidebar: [
        {
          label: 'SylCore Installation [Windows]',
          items: [
            { label: 'Requirements', link: 'guides/windows/requirements' },
            //{ label: 'Requirements', link: 'Test-Website/guides/requirements' },
            { label: 'Installation', link: 'guides/windows/installation' },
            //{ label: 'Installation', link: 'Test-Website/guides/installation' },
            { label: 'Server Setup', link: 'guides/windows/server-setup' },
            //{ label: 'Server Setup', link: 'Test-Website/guides/server-setup' },
            { label: 'Final Server Steps', link: 'guides/windows/final-server-steps' },
            //{ label: 'Final Server Steps', link: 'Test-Website/guides/final-server-steps' },
            //{ label: 'Troubleshooting', link: 'guides/troubleshooting' },
          ],
        },

        {
          label: 'SylCore Installation [Linux]',
          items: [
            { label: 'Requirements', link: 'guides/linux/requirements' },
            //{ label: 'Requirements', link: 'Test-Website/guides/requirements' },
            { label: 'Installation', link: 'guides/linux/installation' },
            //{ label: 'Server Setup', link: 'Test-Website/guides/server-setup' },
            { label: 'Final Server Steps', link: 'guides/linux/final-server-steps' },

            { label: 'Optional', link: 'guides/linux/update' },
            
          ],
        },
      ],
    }),
  ]
});