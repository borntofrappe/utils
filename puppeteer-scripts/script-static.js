import puppeteer from "puppeteer";
import path from "path";

(async () => {
  console.log("Launching puppeteer");
  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  await page.setViewport({
    width: 1000,
    height: 500,
  });

  console.log("Rendering `./static/index.html`");
  await page.goto(path.resolve("./static/index.html"), {
    waitUntil: "networkidle0",
  });

  console.log("Taking a picture of `./static/index.html`");
  await page.screenshot({ path: "./static/index.png" });

  console.log("\nDone.\nRefer to the document `./static/index.png`");
  await browser.close();
})();
