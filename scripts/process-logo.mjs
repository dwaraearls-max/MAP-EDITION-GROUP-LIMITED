import sharp from "sharp";
import { renameSync, unlinkSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

async function removeBlackBackground(input, output) {
  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const saturation = max === 0 ? 0 : (max - min) / max;
    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

    if ((r < 45 && g < 45 && b < 45) || (luminance < 55 && saturation < 0.28)) {
      data[i + 3] = 0;
    } else if (luminance < 70 && saturation < 0.2) {
      data[i + 3] = Math.min(data[i + 3], Math.round(((luminance - 20) / 50) * 255));
    }
  }

  await sharp(data, { raw: { width, height, channels } }).png().toFile(output);
}

const assetsDir = join(
  root,
  "..",
  "..",
  ".cursor",
  "projects",
  "c-Users-USER-Desktop-NEW-EDITION-GROUP-LIMITED",
  "assets",
);

// Find source file in assets or fall back to existing logo
import { readdirSync, existsSync } from "fs";
let source = join(root, "public", "logo.png");
if (existsSync(assetsDir)) {
  const asset = readdirSync(assetsDir).find((f) => f.includes("69522ff6") || f.includes("ChatGPT_Image"));
  if (asset) {
    const assetPath = join(assetsDir, asset);
    try {
      await sharp(assetPath).metadata();
      source = assetPath;
      console.log("Using source:", asset);
    } catch {
      /* use existing logo */
    }
  }
}

const tempPath = join(root, "public", "logo-transparent.png");
await removeBlackBackground(source, tempPath);

const transparentOpts = { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } };
const faviconBg = { r: 10, g: 22, b: 40, alpha: 1 };

await sharp(tempPath).png().toFile(join(root, "public", "logo-new.png"));
await sharp(tempPath)
  .resize(420, 420, transparentOpts)
  .extend({ top: 46, bottom: 46, left: 46, right: 46, background: faviconBg })
  .resize(512, 512)
  .png()
  .toFile(join(root, "public", "favicon-new.png"));
await sharp(tempPath)
  .resize(420, 420, transparentOpts)
  .extend({ top: 46, bottom: 46, left: 46, right: 46, background: faviconBg })
  .resize(512, 512)
  .png()
  .toFile(join(root, "src", "app", "icon-new.png"));
await sharp(tempPath)
  .resize(140, 140, transparentOpts)
  .extend({ top: 20, bottom: 20, left: 20, right: 20, background: faviconBg })
  .resize(180, 180)
  .png()
  .toFile(join(root, "src", "app", "apple-icon-new.png"));

for (const [from, to] of [
  [join(root, "public", "logo-new.png"), join(root, "public", "logo.png")],
  [join(root, "public", "favicon-new.png"), join(root, "public", "favicon.png")],
  [join(root, "src", "app", "icon-new.png"), join(root, "src", "app", "icon.png")],
  [join(root, "src", "app", "apple-icon-new.png"), join(root, "src", "app", "apple-icon.png")],
]) {
  try {
    unlinkSync(to);
  } catch {
    /* ignore */
  }
  renameSync(from, to);
}

try {
  unlinkSync(tempPath);
} catch {
  /* ignore */
}

console.log("Logo assets updated");
