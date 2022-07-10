---
title: Blog Kit
---

A SvelteKit app for a basic website with a markdown blog.

The setup with the `routes` and `lib` folders means:

- `routes/index.svelte` creates a landing page

- `routes/blog.svelte` creates a page to list blog posts

- `routes/blog.js` creates an endpoint, a _named endpoint_ so that the `get` request is immediately available to `routes/blog.svelte` as a property.

  The endpoint looks for files with the `.md` and `.svx` extension in the `routes/blog` directory.

- documents in the `routes/blog` directory with the `.md` or `.svx` extension create a page matching the file's name

  `mdsvex` processes both in the same manner, but the distinction is kept as a matter of preference: use `.md` when you just want to write markdown, use `.svx` when you want to incorporate Svelte syntax as well.

- `lib/layout/blog.svelte` creates a _named layout_ for `mdsvex` to mark up the front matter before the actual content

## npm

Instructions run in the command line to set up the application.

Initialize SvelteKit.

```bash
npm create svelte blog-kit
cd blog-kit
npm install

npm run dev
```

Install `mdsvex`.

```bash
npm i -D mdsvex
```

Install `rehype-*` packages to add a permalink next to headings.

```bash
npm i -D rehype-slug rehype-autolink-headings
```

Install `shiki` toreplace the default syntax highlighting.

```bash
npm i -D shiki
```
