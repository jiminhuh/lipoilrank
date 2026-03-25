import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://lipoilrank.com',
  build: {
    format: 'directory',
  },
});
