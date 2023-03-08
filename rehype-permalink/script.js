import { readFileSync, writeFileSync } from "fs";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

const md = readFileSync("README.md", "utf-8");

const result = unified()
  .use(remarkParse)
  .use(remarkHtml)
  .use(remarkRehype)
  .use(rehypeStringify)
  .processSync(md);

const html = result.value;
writeFileSync("index.html", html);
