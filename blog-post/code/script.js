import { marked } from "marked";
import { readFileSync, writeFileSync } from "fs";
import { getHighlighter } from "shiki";

const icons = {
  bug: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="none" stroke="currentColor" stroke-width="14" stroke-linejoin="round" stroke-linecap="round"><g transform="translate(0 12)"><path d="M 33 0 h 10" /><path transform="rotate(30)" d="M 33 0 h 10" /><path transform="rotate(-30)" d="M 33 0 h 10" /><g transform="scale(-1 1)"><path d="M 33 0 h 10" /><path transform="rotate(30)" d="M 33 0 h 10" /><path transform="rotate(-30)" d="M 33 0 h 10" /></g></g></g><g fill="currentColor"><ellipse rx="24" ry="22" cy="-28" /><ellipse rx="36" ry="38" cy="12" /></g></svg>',
  css: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="currentColor" stroke="none"><path d="M-40.002-50l5.005 85.002 35 15.002 35.001-15.002L40.01-50h-80.002zM-26-32.5h52.002l-3.25 55.263L0 32.516l-22.75-9.753-.651-11.05h11.05l.325 5.524 12.027 5.2 12.026-5.2.977-16.574h-37.049l-.646-11.05h38.358l.65-11.055h-39.643l-.65-11.05z"/></g></svg>',
  html: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="currentColor" stroke="none"><path d="M-40.002-50l5.004 85L.001 50.001l34.998-15.003L40.003-50h-80.007zm14.003 17.5h52l-.65 11.049h-39.649l.651 11.054H24.7L22.751 22.75 0 32.503l-22.75-9.752-.65-11.05h11.049l.325 5.525 12.026 5.2 12.026-5.2.977-16.574H-24.05L-25.998-32.5z"/></g></svg>',
  js: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="1em" height="1em"><g fill="currentColor" stroke="none"><path d="M-50-50V50.8h38.4c-8.88 0-16.08-7.2-16.08-16.08v-5.04h10.08v5.04c0 3.36 2.64 6 6 6s6-2.64 6-6V.88H4.48v33.84c0 8.88-7.2 16.08-16.08 16.08H9.52V40.72H24.64c2.88 0 5.04-2.208 5.04-5.04s-2.184-5.04-5.04-5.04c-8.4 0-15.12-6.72-15.12-15.12S16.24.4 24.64.4h13.2v10.08h-13.2c-2.88 0-5.04 2.208-5.04 5.04s2.184 5.04 5.04 5.04c8.4 0 15.12 6.72 15.12 15.12S33.04 50.8 24.64 50.8h24V-50h-100.8z"/></g></svg>',
};

(async () => {
  console.log("Loading `shiki` highlighter");
  const highlighter = await getHighlighter({ theme: "material-palenight" });

  marked.use({
    renderer: {
      code(code, infostring) {
        const lang = infostring || "code";
        const icon = icons[lang] || icons.bug;
        return `<div class="code">
    <span class="visually-hidden">${lang}</span> 
    ${icon}
    ${highlighter.codeToHtml(code, { lang })}
    </div>`;
      },
    },
  });

  console.log("Processing `index.md` with `marked`");
  const content = readFileSync("index.md", "utf-8");
  const markup = marked(content);

  console.log("Writing `index.html` locally");
  writeFileSync(
    "index.html",
    `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>code</title>
    <link rel="stylesheet" href="../global.css" />
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <main>${markup}</main>
  </body>
</html>`
  );

  console.log("\nDone\nRefer to `index.html`");
})();
