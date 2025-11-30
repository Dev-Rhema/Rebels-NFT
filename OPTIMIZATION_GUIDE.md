# Performance Optimization Guide

## ✅ Implemented Optimizations

### 1. **Cloudinary Image Optimization**
- Automatic quality adjustment with `q_auto` (reduces file size 20-40%)
- Automatic format conversion with `f_auto` (WebP for modern browsers)
- Support for responsive images with custom width parameter

**Usage:**
```javascript
getImageUrl("banner.jpg")  // Auto-optimized
getImageUrl("banner.jpg", { width: 800 })  // Responsive with width
getImageUrl("banner.jpg", { quality: 75 })  // Custom quality
```

### 2. **Code Splitting (Route-based)**
- Gallery component lazy loaded only when needed
- MobileGallery lazy loaded conditionally
- Suspense boundary with loading state prevents layout shift

**Impact:** Reduces initial bundle by ~50KB (reduces to ~284KB from 334KB)

### 3. **CSS Containment**
- Added `contain: layout style paint` to ChromaGrid
- Prevents layout recalculations from spreading to parent elements
- Improves animation performance

### 4. **Dependency Cleanup**
- Moved `cloudinary` and `fast-glob` to devDependencies
- Removed unused `lucide-react` package
- Reduces production bundle size

## 📊 Current Performance Metrics

**Before optimizations:**
- JS Bundle: 334 KB (109 KB gzip)
- CSS: 43.58 KB (8.48 KB gzip)
- Font: 86.58 KB
- Total: ~460 KB

**After optimizations (estimated):**
- JS Bundle: ~284 KB (95 KB gzip) - 15% reduction
- CSS: 43.58 KB (8.48 KB gzip)
- Font: 86.58 KB (unchanged)
- Images: Compressed 20-40% via Cloudinary
- **Total: ~410 KB**

## 🚀 Additional Optimization Opportunities

### High Priority
1. **Image Preloading**
   ```javascript
   // In App.jsx, preload critical images
   useEffect(() => {
     const link = document.createElement('link');
     link.rel = 'preload';
     link.as = 'image';
     link.href = getImageUrl('banner.jpg');
     document.head.appendChild(link);
   }, []);
   ```

2. **SVG Optimization**
   - Optimize peak*.svg and Roadmap.svg for size
   - Remove unnecessary attributes, comments
   - Use SVGO tool

3. **Font Subsetting**
   - Current font is 86.58 KB (full character set)
   - Subset to only needed glyphs (~40-60% reduction possible)
   - Use online tools like `fonttools` or `glyphanger`

### Medium Priority
4. **DomeGallery Performance**
   - Debounce `onMouseMove` to reduce handler calls
   - Consider `IntersectionObserver` for render only when visible
   - Memoize component to prevent unnecessary re-renders

5. **Animation Optimization**
   - Use CSS animations instead of JS where possible
   - Reduce GSAP instances (currently multiple animation states)
   - Use `requestAnimationFrame` batching

6. **Vite Configuration**
   - Enable code splitting for routes
   - Configure asset size warnings
   - Add modern/legacy build output

### Low Priority
7. **Bundle Analysis**
   ```bash
   npm install --save-dev vite-plugin-visualizer
   # Add to vite.config.js and run build
   ```

8. **Caching Strategy**
   - Set long cache expiry for images (365 days)
   - Set short cache for HTML/JS (1 day)
   - Enable browser caching headers

## 🔍 Monitoring

### Lighthouse Metrics to Track
- **First Contentful Paint (FCP):** Target < 2.5s
- **Largest Contentful Paint (LCP):** Target < 2.5s
- **Cumulative Layout Shift (CLS):** Target < 0.1
- **Time to Interactive (TTI):** Target < 5s

### How to Test
```bash
npm run build
npm run preview
# Open in Chrome DevTools > Lighthouse
```

## 📝 Implementation Checklist

- [x] Move cloudinary/fast-glob to devDependencies
- [x] Remove unused lucide-react
- [x] Add Cloudinary image optimization (q_auto, f_auto)
- [x] Implement lazy loading for Gallery components
- [x] Add CSS containment to animated elements
- [ ] Subset Space Grotesk font
- [ ] Optimize SVG files (peak, roadmap)
- [ ] Add image preloading for hero banner
- [ ] Debounce ChromaGrid mouse handlers
- [ ] Set up bundle analysis tool
- [ ] Implement caching headers for production

## 💡 Notes

- The app is already well-optimized for an interactive animation site
- Current 109KB gzip is reasonable for feature richness (React 19, GSAP, custom animations)
- Most gains will come from image optimization and font subsetting
- DomeGallery is the heaviest component; consider lazy loading if page gets slower

