import fs from "fs";
import path from "path";

const dir = path.join(
  process.cwd(),
  "src",
  "assets",
  "images",
  "clients",
  "np_logos",
);

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const brands = [
  "hp",
  "SoFi",
  "Intuit",
  "Mitsubishi",
  "Adobe",
  "Nissan",
  "Marriott",
  "LOreal",
  "Kumon",
  "Cartier",
  "DHL",
  "Clarins",
  "Unilever",
  "Canon",
  "Prudential",
  "Church",
  "WesternUnion",
  "SonyMusic",
  "Dominos",
  "Levis",
];

brands.forEach((brand) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" width="100%" height="100%">
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="28" font-weight="bold">${brand}</text>
  </svg>`;
  fs.writeFileSync(path.join(dir, brand + ".svg"), svg);
});

console.log("Successfully created 20 white text SVGs in", dir);
