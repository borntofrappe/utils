# puppeteer-script

Puppeteer script to take a screenshot of an `.html` document.

## index.html

Use `puppeteer` to take a screenshot of the visual included through `index.html`.

```bash
# npm run screenshot
node script
```

Script saves the file locally as `index.png`.

Set `headless` to `false` to visualize puppeteer's function.

```js
const browser = await puppeteer.launch({ headless: false });
```
