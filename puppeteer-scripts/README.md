# puppeteer-scripts

Puppeteer scripts to take screenshots of `.html` documents.

## static

Use `puppeteer` to take a screenshot of the visual included through `./static/index.html`.

```bash
# node script-static
npm run screenshot
```

The script saves the file locally as `./static/index.png`.

## dynamic

Use `puppeteer` to take multiple screenshots of a page marked with a templating function and on the basis of hard-coded data.

```bash
# node script-dynamic
npm run screenshots
```

The script saves the files locally as `./dynamic/post-${post-title}.png`.
