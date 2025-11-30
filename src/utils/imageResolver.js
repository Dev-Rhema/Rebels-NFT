/**
 * Utility to resolve image URLs from Cloudinary mapping or fallback to local assets.
 *
 * Usage:
 *   import { getImageUrl } from '../utils/imageResolver';
 *   const url = getImageUrl('mav.png');  // Returns Cloudinary URL or local fallback
 */

let mapping = null;
let loadingPromise = null;

// Preload the mapping once
if (typeof window !== "undefined") {
  loadingPromise = import("../cloudinary-mapping.json")
    .then((m) => {
      mapping = m.default || m;
    })
    .catch(() => {
      mapping = null;
    });
}

export function getImageUrl(filename) {
  // If mapping is loaded, use it
  if (mapping && mapping[filename]) {
    return mapping[filename];
  }
  // Fallback to local asset
  return new URL(`../assets/${filename}`, import.meta.url).href;
}

// For async scenarios where you need to wait for mapping to load
export function waitForMapping() {
  return loadingPromise || Promise.resolve(null);
}
