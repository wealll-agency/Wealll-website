import fs from "fs";
import path from "path";
import puppeteer from "puppeteer";

(async () => {
  try {
    console.log("Launching puppeteer...");
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
    );

    console.log("Navigating to npdigital.com...");
    await page.goto("https://npdigital.com/", { waitUntil: "networkidle2" });

    console.log("Extracting SVGs from client grid...");
    const logos = await page.evaluate(() => {
      // Find the logos grid container
      const grid =
        document.querySelector(".logos-grid") ||
        document.querySelector(".client-logos");
      if (!grid) {
        // Return all SVGs on page as fallback
        const allSvgs = Array.from(document.querySelectorAll("svg"));
        return allSvgs.slice(0, 30).map((s) => s.outerHTML);
      }

      const listItems = Array.from(
        grid.querySelectorAll("li, .logo-item, img, svg"),
      );
      return listItems
        .map((item) => {
          if (item.tagName.toLowerCase() === "svg") return item.outerHTML;
          const svg = item.querySelector("svg");
          return svg ? svg.outerHTML : null;
        })
        .filter(Boolean);
    });

    console.log(`Found ${logos.length} logos.`);

    const dir = path.join(
      process.cwd(),
      "src",
      "assets",
      "images",
      "clients",
      "np_logos",
    );
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    logos.forEach((svgHTML, i) => {
      fs.writeFileSync(path.join(dir, `actual_logo_${i}.svg`), svgHTML);
    });

    console.log(`Saved ${logos.length} SVGs to ${dir}`);

    await browser.close();
  } catch (e) {
    console.error("Error:", e);
  }
})();
