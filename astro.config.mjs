import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import { astroCodeSnippets, remarkCodeSnippets } from './intregations/code-snippets';

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
    integrations: [mdx({ remarkPlugins: [remarkCodeSnippets()], }), svelte({ compilerOptions: { hydratable: true } }),
    ]
});