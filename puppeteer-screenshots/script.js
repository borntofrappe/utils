import puppeteer from "puppeteer";
import { resolve } from "node:path";

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });

  const page = await browser.newPage();
  await page.setViewport({ width: 600, height: 360 });

  await page.goto(resolve("index.html"));

  await page.screenshot({ path: "screenshot.webp", type: "webp" });
  await page.screenshot({ path: "screenshot.jpeg", type: "jpeg" });

  await browser.close();
})();
