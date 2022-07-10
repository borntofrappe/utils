import { extname } from "path";
import { writeFileSync, readFileSync, readdirSync } from "fs";

const folder = "svg";
const files = readdirSync(folder);

const icons = {};
files
  .filter((file) => extname(file) === ".svg")
  .forEach((file) => {
    const [key] = file.split(".");
    const value = readFileSync(`${folder}/${file}`, "utf-8");
    icons[key] = value.replace(/[\n\r]/g, "").replace(/\>\s+\</g, "><");
  });

const entries = Object.entries(icons);

writeFileSync(
  "icons.js",
  `export default {${entries
    .map(([key, value]) => `\n\t'${key}': '${value}',`)
    .join("")}\n};`
);

writeFileSync(
  "index.html",
  `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>svg-icons</title>
    <style>
      main {
        max-width: 42rem;
        margin: 1rem auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));
        gap: 1rem;
        font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue,
		helvetica, Ubuntu, roboto, noto, arial, sans-serif;
      }

      main h1 {
        grid-column: 1/-1;
      }

      article {
        padding: 0.5rem;
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: space-between;
        gap: 0.5rem 0;
      }

      h2 {
        text-align: center;
        font-size: 1rem;
        font-weight: initial;
      }

      article svg {
        display: block;
        max-width: 2rem;
        width: 100%;
        height: auto;
      }
    </style>
  </head>
  <body>
    <main>
      <h1>Icons</h1>
      ${entries
        .map(([key, value]) => `<article><h2>${key}</h2>${value}</article>`)
        .join("")}
    </main>
  </body>
</html>
`
);
