import puppeteer from "puppeteer";
import path from "path";

(async () => {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  await page.setViewport({
    width: 1000,
    height: 500,
  });

  await page.goto(path.resolve("./static/index.html"), {
    waitUntil: "networkidle0",
  });
  await page.screenshot({ path: "./static/index.png" });
  await browser.close();
})();
