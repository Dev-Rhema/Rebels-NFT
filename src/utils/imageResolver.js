/**
 * Utility to resolve image URLs from Cloudinary mapping or fallback to local assets.
 * Automatically applies optimization transforms (quality, format, sizing).
 *
 * Usage:
 *   import { getImageUrl } from '../utils/imageResolver';
 *   const url = getImageUrl('mav.png');  // Returns optimized Cloudinary URL
 */

import mapping from "../cloudinary-mapping.json";

/**
 * Get optimized Cloudinary URL with auto compression and format conversion
 * @param {string} filename - Image filename
 * @param {object} options - Optional transformations (width, quality, etc)
 */
export function getImageUrl(filename, options = {}) {
  // If mapping exists and has the file, use Cloudinary URL with optimizations
  if (mapping && mapping[filename]) {
    const baseUrl = mapping[filename];

    // Extract the upload part from the URL
    // Example: https://res.cloudinary.com/dwzojroob/image/upload/v.../rebels/file.jpg
    if (baseUrl.includes("/upload/")) {
      const uploadIndex = baseUrl.indexOf("/upload/") + "/upload/".length;
      const beforeUpload = baseUrl.substring(0, uploadIndex);
      const afterUpload = baseUrl.substring(uploadIndex);

      // Default transformations: auto quality, auto format (WebP for modern browsers)
      const transforms = [];
      transforms.push("q_auto"); // Auto quality (reduces file size 20-40%)
      transforms.push("f_auto"); // Auto format (WebP, etc for modern browsers)

      // Add custom width if specified (useful for responsive images)
      if (options.width) {
        transforms.push(`w_${options.width}`);
      }

      // Add custom quality if specified
      if (options.quality) {
        transforms.push(`q_${options.quality}`);
      }

      // Reconstruct URL with transformations
      const transformString = transforms.join(",");
      return `${beforeUpload}${transformString}/${afterUpload}`;
    }

    return baseUrl;
  }

  // Fallback to local asset (for development without mapping)
  return new URL(`../assets/${filename}`, import.meta.url).href;
}
