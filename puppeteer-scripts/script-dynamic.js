import puppeteer from "puppeteer";
import posts from "./dynamic/posts.js";
import template from "./dynamic/template.js";

const width = 1000;
const height = 500;
const { length } = posts;

(async () => {
  console.log("Launching puppeteer");
  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  await page.setViewport({
    width,
    height: height * length,
  });

  const html = template(posts);

  console.log(`Rendering a page for ${posts.length} posts.`);
  await page.setContent(html, { waitUntil: "networkidle0" });

  console.log("Taking one picture for each post.");
  console.log();
  for (let i = 0; i < posts.length; i++) {
    const { title } = posts[i];
    const path = `./dynamic/post-${title.replace(/ /g, "-").toLowerCase()}.png`;
    const y = height * i;

    console.log(`${title}`);
    await page.screenshot({
      path,
      clip: {
        x: 0,
        y,
        width,
        height,
      },
    });
    console.log(` -> \`${path}\``);
  }

  console.log("\nDone.\nRefer to the documents in the `./dynamic` folder");
  await browser.close();
})();
