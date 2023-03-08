# rehype-permalink

A proof of concept for a helpful `rehype` plugin, discussed in the context of a larger exploration of abstract syntax trees. The code follows the article [_A practical rehype plugin_](https://borntofrappe.netlify.app/a-practical-rehype-plugin).

## plugin

`rehype-permalink` considers the HTML AST to add a permalink to subheading, ranging in level between `<h2>` and `<h4>`.

```js
const md = readFileSync("README.md", "utf-8");

const result = unified()
  .use(remarkParse)
  .use(remarkHtml)
  .use(remarkRehype) // <-- HTML AST
  .use(rehypeStringify)
  .use(rehypePermalink) // <-- the plugin
  .processSync(md);
```

## packages

`script.js` relies on the following to process `README.md` into a veritable HTML docoument:

```bash
npm i -D unified remark-parse remark-html remark-rehype rehype-stringify unist-util-visit slug
```

- `unified`

- `remark-parse`

- `remark-html`

- `remark-rehype`

- `rehype-stringify`

The plugin itself depends on two additional libraries:

- `unist-util-visit`

- `slug`
