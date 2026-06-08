const https = require("https");
const fs = require("fs");
const path = require("path");

const prompts = [
  "Minimalist_corporate_identity_brand_strategy_presentation_slide_mockup_dark_theme",
  "Startup_pitch_deck_investment_financial_growth_presentation_slide",
  "B2B_sales_strategy_presentation_modern_dark_abstract_layout",
  "TEDx_speaker_keynote_speech_stage_presentation_blueprint_design",
  "Modern_product_showcase_event_design_presentation_slide_3D",
  "Marketing_campaign_strategy_proposal_presentation_slide_modern_geometric",
];

async function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          return downloadImage(res.headers.location, filename)
            .then(resolve)
            .catch(reject);
        }
        if (res.statusCode !== 200) {
          reject(new Error(`Status Code: ${res.statusCode}`));
          return;
        }
        const stream = fs.createWriteStream(filename);
        res.pipe(stream);
        stream.on("finish", () => {
          stream.close();
          console.log(`Downloaded: ${filename}`);
          resolve();
        });
        stream.on("error", (err) => reject(err));
      })
      .on("error", (err) => reject(err));
  });
}

(async () => {
  for (let i = 0; i < prompts.length; i++) {
    const url = `https://image.pollinations.ai/prompt/${prompts[i]}?width=1200&height=800&nologo=true`;
    const filename = path.join(
      "d:",
      "Kaustav",
      "Projects",
      "wealll_company_website",
      "WeAlll_React",
      "src",
      "assets",
      "images",
      "presentation",
      `port${i + 1}.jpg`,
    );
    console.log(`Requesting ${url}`);
    try {
      await downloadImage(url, filename);
    } catch (e) {
      console.error(`Failed to downlod ${filename}:`, e.message);
    }
  }
})();
