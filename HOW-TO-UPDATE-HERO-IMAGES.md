# How to Update Product Detail Page Hero Images

All hero images for product detail pages have been renamed with the `hero-` prefix for easy identification.

## Image Locations

All hero images are located in: `/public/images/`

### Current Hero Images

**Fabricated Channel Letters:**
- `hero-lp1.jpg` - EdgeLuxe LP1 (FCO Flat Cutout Letters)
- `hero-lp31.jpg` - EdgeLuxe LP3.1 (Halo-Lit Standoff Mount)
- `hero-lp32.jpg` - EdgeLuxe LP3.2 (Halo-Lit Flush Mount)
- `hero-lp5.jpg` - EdgeLuxe LP5 (Trimless Face-Lit)

**Cast Block Acrylic:**
- `hero-lp11-f.jpg` - EdgeLuxe LP11-F (Face-Lit)
- `hero-lp11-b.jpg` - EdgeLuxe LP11-B (Back-Lit/Halo)
- `hero-lp11-fb.jpg` - EdgeLuxe LP11-FB (Face & Halo Combo)
- `hero-lp11-bs.jpg` - EdgeLuxe LP11-BS (Back & Side-Lit)
- `hero-lp11-fs.jpg` - EdgeLuxe LP11-FS (Front & Side-Lit)
- `hero-lp11-s.jpg` - EdgeLuxe LP11-S (Full Side-Lit)
- `hero-lp11-n.jpg` - EdgeLuxe LP11-N (Faux Neon)

## How to Replace Hero Images

### Option 1: Replace Existing Files (Easiest)
1. Prepare your new image (recommended: 800x600px, JPG format)
2. Rename it to match the hero image you want to replace (e.g., `hero-lp5.jpg`)
3. Upload it to `/public/images/` and overwrite the existing file
4. The change will be immediate - no code changes needed!

### Option 2: Use Different Filename
1. Upload your new image to `/public/images/`
2. Open `app/config/site.js`
3. Find the product in the `images.products` section
4. Update the path to your new image

Example:
```javascript
products: {
  lp5: "/images/hero-lp5.jpg",  // Change this to your new filename
}
```

## Image Requirements

- **Format:** JPG or PNG (JPG recommended for smaller file size)
- **Dimensions:** 800x600px (4:3 aspect ratio) recommended
- **File Size:** Keep under 500KB for fast loading
- **Naming:** Use descriptive names with `hero-` prefix

## Where These Images Appear

Hero images appear on the top split-screen section of individual product detail pages:
- `/products/edgeluxe-lp1`
- `/products/edgeluxe-lp5`
- `/products/edgeluxe-lp11-f`
- etc.

The image displays on the right side with product information on the left in a glass-styled card.
