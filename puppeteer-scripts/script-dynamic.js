import puppeteer from "puppeteer";
import posts from "./dynamic/posts.js";
import template from "./dynamic/template.js";

const width = 1000;
const height = 500;
const { length } = posts;

(async () => {
  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();
  await page.setViewport({
    width,
    height: height * length,
  });

  const html = template(posts);

  await page.setContent(html, { waitUntil: "networkidle0" });

  for (let i = 0; i < posts.length; i++) {
    const path = `./dynamic/post-${posts[i].title
      .replace(/ /g, "-")
      .toLowerCase()}.png`;
    const y = height * i;

    await page.screenshot({
      path,
      clip: {
        x: 0,
        y,
        width,
        height,
      },
    });
  }

  await browser.close();
})();
