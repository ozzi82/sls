# EdgeLuxe Product Catalog - Content Update Guide

## 🎯 Your Updated Website

Your website now features the complete **EdgeLuxe product line** with German-engineered precision signage:

- ✅ **13 EdgeLuxe Products** from your spec guide
- ✅ **3 Product Categories**: Fabricated Channel Letters, Cast Block Acrylic, Cabinet Signs
- ✅ **Updated Hero Section** highlighting German engineering & UL listing
- ✅ **SEO Optimized** for EdgeLuxe product names and specifications

---

## 📁 File Structure

All editable content is centralized in one file:
```
app/config/site.js    ← Edit this file to update content
```

Images go here:
```
public/images/        ← Upload EdgeLuxe product images here
public/logo.png       ← Company logo
public/og.jpg         ← Social media preview image
```

---

## 📦 **Current EdgeLuxe Product Catalog**

### **Category 1: Fabricated Channel Letters (4 products)**

1. **EdgeLuxe LP1** - Flat Cutout Letters (FCO)
   - Image needed: `/public/images/lp1-fco.jpg`
   - Non-illuminated, multiple materials

2. **EdgeLuxe LP3.1** - Halo-Lit Standoff Mount
   - Image needed: `/public/images/lp31-halo-standoff.jpg`
   - Halo illumination with standoffs

3. **EdgeLuxe LP3.2** - Halo-Lit Flush Mount
   - Image needed: `/public/images/lp32-halo-flush.jpg`
   - Partial side-lit halo flush-mount

4. **EdgeLuxe LP5** - Trimless Face-Lit Channel Letters
   - Image needed: `/public/images/lp5-trimless.jpg`
   - Trimless stainless steel face-lit

### **Category 2: Cast Block Acrylic (7 products)**

5. **EdgeLuxe LP11-F** - Face-Lit Acrylic
   - Image needed: `/public/images/lp11-f-face.jpg`

6. **EdgeLuxe LP11-B** - Back-Lit (Halo) Acrylic
   - Image needed: `/public/images/lp11-b-back.jpg`

7. **EdgeLuxe LP11-FB** - Face & Halo Combo
   - Image needed: `/public/images/lp11-fb-combo.jpg`

8. **EdgeLuxe LP11-BS** - Back & Side-Lit
   - Image needed: `/public/images/lp11-bs-backside.jpg`

9. **EdgeLuxe LP11-FS** - Front & Side-Lit
   - Image needed: `/public/images/lp11-fs-frontside.jpg`

10. **EdgeLuxe LP11-S** - Full Side-Lit
    - Image needed: `/public/images/lp11-s-side.jpg`

11. **EdgeLuxe LP11-N** - Faux Neon
    - Image needed: `/public/images/lp11-n-neon.jpg`

### **Category 3: Cabinet Signs (2 products)**

12. **LED Cabinet Signs**
    - Image needed: `/public/images/cabinet.jpg`
    - Using placeholder content

13. **Blade Signs**
    - Image needed: `/public/images/blade.jpg`
    - Using placeholder content

---

## 🖼️ **How to Add Product Images**

### **Step 1: Prepare Your Images**

For each EdgeLuxe product, you need a high-quality image:
- **Recommended size:** 800x600px or larger
- **Format:** JPG or WebP
- **File size:** Under 200KB (compress at TinyPNG.com)

### **Step 2: Upload Images**

Upload your images to `/public/images/` folder with these exact names:

**Fabricated Channel Letters:**
```
lp1-fco.jpg
lp31-halo-standoff.jpg
lp32-halo-flush.jpg
lp5-trimless.jpg
```

**Cast Block Acrylic:**
```
lp11-f-face.jpg
lp11-b-back.jpg
lp11-fb-combo.jpg
lp11-bs-backside.jpg
lp11-fs-frontside.jpg
lp11-s-side.jpg
lp11-n-neon.jpg
```

**Cabinet Signs:**
```
cabinet.jpg
blade.jpg
```

### **Step 3: Refresh Browser**

After uploading images, refresh your browser (Ctrl+Shift+R) to see them appear!

---

## ✏️ **How to Edit Product Details**

Open `app/config/site.js` and find the `featuredProducts` array.

Each product looks like this:

```javascript
{
  id: "edgeluxe-lp5",
  category: "Fabricated Channel Letters",
  image: images.products.lp5,
  title: "EdgeLuxe LP5 - Trimless Face-Lit Channel Letters",
  description: "Premium trimless fabricated stainless steel...",
  price: "Custom Quote",
  features: [
    "Trimless design - no visible edges",
    "Face-lit illumination",
    "Thick gauge stainless steel",
    "Depth: 30-100mm options"
  ],
  specs: {
    minStrokeWidth: "15mm (0.6\")",
    minHeight: "50mm (2\")",
    materials: "Stainless steel + step-router acrylic",
    customization: "PMS colors, vinyls, translucent acrylics"
  },
  href: "/products/edgeluxe-lp5",
  enabled: true,  // Set to false to hide product
},
```

**What you can change:**
- `title` - Product name displayed on card
- `description` - Short description text
- `price` - Pricing information
- `features` - List of 3-5 bullet points
- `specs` - Technical specifications (optional)
- `enabled` - Set to `false` to hide product

---

## 🏠 **Current Hero Section**

Your homepage hero now says:

**Title:** "German-Engineered Precision Signage"
**Subtitle:** "EdgeLuxe Wholesale Solutions"
**Tagline:** "Low Profile • Trim-Less • UL Listed"

**Stats:**
- 25+ Years German Engineering
- 24-48h Quote Response
- UL Listed Components
- IP67 Waterproof Sealed

To change these, edit the `heroContent` section in `app/config/site.js`.

---

## 🎨 **Image Upload Quick Reference**

| Product | Image Filename | Status |
|---------|---------------|--------|
| LP1 FCO | `lp1-fco.jpg` | ⚠️ Needed |
| LP3.1 Halo Standoff | `lp31-halo-standoff.jpg` | ⚠️ Needed |
| LP3.2 Halo Flush | `lp32-halo-flush.jpg` | ⚠️ Needed |
| LP5 Trimless | `lp5-trimless.jpg` | ⚠️ Needed |
| LP11-F Face | `lp11-f-face.jpg` | ⚠️ Needed |
| LP11-B Back | `lp11-b-back.jpg` | ⚠️ Needed |
| LP11-FB Combo | `lp11-fb-combo.jpg` | ⚠️ Needed |
| LP11-BS Back+Side | `lp11-bs-backside.jpg` | ⚠️ Needed |
| LP11-FS Front+Side | `lp11-fs-frontside.jpg` | ⚠️ Needed |
| LP11-S Side | `lp11-s-side.jpg` | ⚠️ Needed |
| LP11-N Neon | `lp11-n-neon.jpg` | ⚠️ Needed |
| Cabinet | `cabinet.jpg` | ⚠️ Needed |
| Blade | `blade.jpg` | ⚠️ Needed |

---

## 🚀 **Quick Actions**

### **Hide a Product Temporarily**
```javascript
enabled: false,  // Change true to false
```

### **Change Product Order**
Cut and paste entire product objects to reorder them in the array.

### **Add Pricing**
```javascript
price: "Starting at $299",  // or "Custom Quote"
```

### **Update Features**
```javascript
features: [
  "Your feature 1",
  "Your feature 2",
  "Your feature 3",
  "Your feature 4"
],
```

---

## 📋 **To-Do: Complete Your Website**

1. **Upload Product Images** (13 images needed - see table above)
2. **Add Cabinet Sign Details** (currently using placeholder)
3. **Add Blade Sign Details** (currently using placeholder)
4. **Test All Products** display correctly on homepage
5. **Review Hero Section** content for accuracy
6. **Add Logo** (`/public/logo.png`)
7. **Add Social Media Links** in `siteConfig.social`

---

## 🔧 **Testing Checklist**

After uploading images:

- [ ] All 13 products display on homepage
- [ ] Product images load correctly
- [ ] Hero section shows EdgeLuxe branding
- [ ] Navigation includes Products link
- [ ] Mobile layout looks good (test on phone)
- [ ] All product features display properly

---

## 🎯 **Summary**

**Everything is in:** `app/config/site.js`
**Upload images to:** `public/images/`
**You have:** 13 EdgeLuxe products ready to showcase
**Next step:** Upload product images with exact filenames listed above

---

## 📞 **Need Help?**

All product details from your EdgeLuxe spec guide are now on your website. Simply upload the images and you're ready to go live!

**Running the site:**
```bash
npm run dev
```
Then visit: http://localhost:3000
