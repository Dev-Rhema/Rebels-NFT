#!/usr/bin/env node
/**
 * Upload all images from src/assets to Cloudinary
 * Outputs a mapping file: src/cloudinary-mapping.json
 *
 * Usage:
 *   1. npm install cloudinary fast-glob
 *   2. Set env vars: CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET
 *   3. node scripts/upload-to-cloudinary.js
 */

import path from "path";
import fs from "fs";
import fg from "fast-glob";
import { fileURLToPath } from "url";
import { v2 as cloudinary } from "cloudinary";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_DIR = path.join(__dirname, "../src/assets");
const OUT_FILE = path.join(__dirname, "../src/cloudinary-mapping.json");

function configureCloudinary() {
  const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } =
    process.env;
  if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
    console.error("❌ Missing Cloudinary credentials.");
    console.error("Set environment variables:");
    console.error("  CLOUDINARY_CLOUD_NAME");
    console.error("  CLOUDINARY_API_KEY");
    console.error("  CLOUDINARY_API_SECRET");
    process.exit(1);
  }
  cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
  });
  console.log(`✓ Configured Cloudinary (${CLOUDINARY_CLOUD_NAME})`);
}

async function uploadFile(file) {
  const relative = path.relative(ASSETS_DIR, file).replace(/\\/g, "/");
  try {
    const res = await cloudinary.uploader.upload(file, {
      folder: "rebels",
      use_filename: true,
      unique_filename: false,
      resource_type: "auto",
    });
    console.log(`✓ Uploaded: ${relative} → ${res.secure_url}`);
    return { filename: relative, url: res.secure_url };
  } catch (err) {
    console.error(`✗ Failed to upload ${relative}:`, err.message);
    return null;
  }
}

async function main() {
  configureCloudinary();

  const patterns = ["**/*.{png,jpg,jpeg,webp,svg,gif}"];
  const files = await fg(patterns, { cwd: ASSETS_DIR, absolute: true });

  if (!files.length) {
    console.error("❌ No image files found in src/assets");
    process.exit(1);
  }

  console.log(`\nFound ${files.length} image(s) to upload...\n`);

  const mapping = {};
  for (const file of files) {
    const res = await uploadFile(file);
    if (res) mapping[res.filename] = res.url;
  }

  fs.writeFileSync(OUT_FILE, JSON.stringify(mapping, null, 2));
  console.log(`\n✓ Mapping saved to ${OUT_FILE}`);
  console.log(`\nNow you can:`);
  console.log(`  1. Restart your dev server`);
  console.log(`  2. Verify images load from Cloudinary`);
  console.log(`  3. Delete src/assets folder`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
