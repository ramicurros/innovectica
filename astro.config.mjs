import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://ramicurros.github.io/innovectica/',
    base: '/innovectica/',
    integrations: [mdx(), sitemap()],
    build: {
        inlineStylesheets: 'always', // Set to always inline stylesheets
    },
});