# Product Images Guide

## Image Requirements

Each product needs TWO images:
- **Day Image**: Product photo showing how it looks during daytime (not illuminated)
- **Night Image**: Product photo showing illuminated/lit up version

## Image Specifications

- **Dimensions**: 1200x800px minimum (3:2 aspect ratio)
- **Format**: JPG or PNG
- **Quality**: High resolution, clear product photography
- **Background**: Clean, preferably white or neutral

## Required Images by Product

Upload these images to `/public/images/products/` folder:

### Fabricated Channel Letters

1. **EdgeLuxe LP1 - Flat Cutout Letters**
   - `lp1-day.jpg` - Non-illuminated flat letters
   - `lp1-night.jpg` - Same letters (no illumination for this product)

2. **EdgeLuxe LP3.1 - Halo-Lit Standoff**
   - `lp31-day.jpg` - Standoff mounted letters (daylight)
   - `lp31-night.jpg` - Standoff letters with halo glow

3. **EdgeLuxe LP3.2 - Halo-Lit Flush**
   - `lp32-day.jpg` - Flush mounted letters (daylight)
   - `lp32-night.jpg` - Flush letters with halo glow

4. **EdgeLuxe LP5 - Trimless Channel Letters**
   - `lp5-day.jpg` - Trimless letters (daylight)
   - `lp5-night.jpg` - Trimless letters illuminated

### Cast Block Acrylic Letters

5. **EdgeLuxe LP11-F - Face-Lit**
   - `lp11-f-day.jpg` - Face-lit letters (daylight)
   - `lp11-f-night.jpg` - Face-lit letters illuminated

6. **EdgeLuxe LP11-B - Back-Lit (Halo)**
   - `lp11-b-day.jpg` - Back-lit letters (daylight)
   - `lp11-b-night.jpg` - Back-lit halo glow

7. **EdgeLuxe LP11-FB - Combo Face+Back**
   - `lp11-fb-day.jpg` - Combo lit letters (daylight)
   - `lp11-fb-night.jpg` - Combo illuminated (face + halo)

8. **EdgeLuxe LP11-BS - Back-Lit Colored Acrylic**
   - `lp11-bs-day.jpg` - Colored acrylic (daylight)
   - `lp11-bs-night.jpg` - Colored acrylic with backlight glow

9. **EdgeLuxe LP11-FS - Face-Lit Colored Acrylic**
   - `lp11-fs-day.jpg` - Colored face-lit (daylight)
   - `lp11-fs-night.jpg` - Colored face-lit illuminated

10. **EdgeLuxe LP11-S - Side-Lit**
    - `lp11-s-day.jpg` - Side-lit letters (daylight)
    - `lp11-s-night.jpg` - Side-lit edge glow

11. **EdgeLuxe LP11-N - Neon Effect**
    - `lp11-n-day.jpg` - Neon-style letters (daylight)
    - `lp11-n-night.jpg` - Neon-style illuminated

## Total Images Needed

**22 images total** (11 products × 2 images each)

## After Uploading Images

Once you've uploaded all images to `/public/images/products/`, the website will automatically use them. The configuration file has been updated to point to these new image paths.

## Current Status

❌ All images currently using placeholders
✅ Configuration ready for your images
✅ Image paths configured for all 11 products

## Next Steps

1. Prepare 22 product photos (day + night for each product)
2. Resize/optimize to 1200x800px
3. Name them according to the list above
4. Upload to `/public/images/products/`
5. Refresh the website to see your images!
