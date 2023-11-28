import adapter from '@sveltejs/adapter-auto';
import { importAssets } from 'svelte-preprocess-import-assets'

const config = {
  preprocess: [importAssets()],
  kit: {
    adapter: adapter(),
  },
};

export default config;
