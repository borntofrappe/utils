import adapter from '@sveltejs/adapter-auto';
import { escapeSvelte, mdsvex } from 'mdsvex';
import slug from 'rehype-slug';
import autolinkHeadings from 'rehype-autolink-headings';
import { getHighlighter } from 'shiki';

const highlighter = async (code, lang) => {
	const shikiHighlighter = await getHighlighter({ theme: 'github-dark' });
	const shikiCode = shikiHighlighter.codeToHtml(code, { lang });

	return escapeSvelte(shikiCode);
};

const mdsvexConfig = {
	extensions: ['.svelte', '.md', '.svx'],
	smartypants: false,
	layout: {
		blog: 'src/lib/layout/blog.svelte'
	},
	highlight: {
		highlighter
	},
	rehypePlugins: [slug, autolinkHeadings]
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [...mdsvexConfig.extensions],
	preprocess: mdsvex(mdsvexConfig),
	kit: {
		adapter: adapter()
	}
};

export default config;
