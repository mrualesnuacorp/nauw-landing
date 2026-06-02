import { Jimp } from "jimp";
import { join } from "path";

const images = [
  "prod-proteina-chocolate.png",
  "prod-proteina-fresa.png",
  "prod-proteina-vainilla.png",
  "prod-electrolito-coco.png",
  "prod-electrolito-frutilla.png",
  "prod-electrolito-mandarina.png",
  "prod-gel-mango.png",
  "prod-gel-sandia.png",
  "prod-gel-neutral.png",
  "prod-creatina.png",
];

const publicDir = join(process.cwd(), "public", "images");

function colorDiff(c1, c2) {
  const r1 = (c1 >>> 24) & 0xff, g1 = (c1 >>> 16) & 0xff, b1 = (c1 >>> 8) & 0xff;
  const r2 = (c2 >>> 24) & 0xff, g2 = (c2 >>> 16) & 0xff, b2 = (c2 >>> 8) & 0xff;
  return Math.sqrt((r1 - r2) ** 2 + (g1 - g2) ** 2 + (b1 - b2) ** 2);
}

function removeBg(image, tolerance = 50) {
  const width = image.width;
  const height = image.height;

  const bgColor = image.getPixelColor(0, 0);
  const visited = new Uint8Array(width * height);
  const queue = [];

  function enqueue(x, y) {
    if (x < 0 || x >= width || y < 0 || y >= height) return;
    const idx = y * width + x;
    if (visited[idx]) return;
    const diff = colorDiff(image.getPixelColor(x, y), bgColor);
    if (diff > tolerance) return;
    visited[idx] = 1;
    queue.push(x, y);
  }

  // Seed from corners and edges
  enqueue(0, 0);
  enqueue(width - 1, 0);
  enqueue(0, height - 1);
  enqueue(width - 1, height - 1);
  for (let x = 0; x < width; x += 3) { enqueue(x, 0); enqueue(x, height - 1); }
  for (let y = 0; y < height; y += 3) { enqueue(0, y); enqueue(width - 1, y); }

  let i = 0;
  while (i < queue.length) {
    const x = queue[i++];
    const y = queue[i++];
    image.setPixelColor(0x00000000, x, y);
    enqueue(x + 1, y);
    enqueue(x - 1, y);
    enqueue(x, y + 1);
    enqueue(x, y - 1);
  }
}

for (const name of images) {
  const filePath = join(publicDir, name);
  console.log(`Procesando ${name}...`);
  try {
    const image = await Jimp.fromFile(filePath);
    removeBg(image, 50);
    await image.write(filePath);
    console.log(`  ✓ ${name}`);
  } catch (e) {
    console.error(`  ✗ ${name}: ${e.message}`);
  }
}

console.log("Listo.");
