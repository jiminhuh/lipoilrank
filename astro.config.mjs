import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://example.com', // Agent replaces with actual domain
  build: {
    format: 'directory',
  },
});
