# How to Edit All Website Content

This guide shows you how to update all content on your website.

## 📍 Main Configuration File

**File:** `app/config/site.js`

This is the **most important file** - it contains ALL your products, features, and site-wide content.

### How to Edit Products

1. Open `app/config/site.js`
2. Find the product you want to edit
3. Update any field:

```javascript
{
  id: "edgeluxe-lp5",
  title: "EdgeLuxe LP5 - Trimless Face-Lit",  // ← Edit product name
  category: "Trimless Channel Letters",         // ← Edit category
  description: "Your description here...",      // ← Edit description
  price: "Premium",                             // ← Edit pricing tier
  features: [                                   // ← Edit features list
    "Feature 1",
    "Feature 2",
  ],
  specifications: {                             // ← Edit specifications
    "Materials": "3mm or 5mm acrylic",
    "Depths": "50mm, 100mm, 150mm, 200mm",
  },
  badges: ["Best Seller", "UL Listed"],        // ← Edit badges
}
```

### How to Hide Products

To hide Cabinet Signs and Blade Signs temporarily:

1. Open `app/config/site.js`
2. Find the products you want to hide
3. Add `hidden: true` to each product:

```javascript
{
  id: "edgeluxe-lp11-b",
  title: "EdgeLuxe LP11-B - Back-Lit Cabinet Signs",
  hidden: true,  // ← Add this line to hide the product
  // ... rest of product
}
```

Products with `hidden: true` will not appear anywhere on the site.

---

## 🎨 Page-Specific Content

### Homepage Content

**File:** `app/page.js`

Edit:
- Hero section text
- Featured products order
- Section headings

### Product Pages

**File:** `app/products/[id]/page.js`

This file automatically pulls from `app/config/site.js`, so just edit the config file.

### Industry Solutions Pages

Edit these files to change industry-specific content:

- **Retail:** `app/solutions/retail/page.js`
- **Healthcare:** `app/solutions/healthcare/page.js`
- **Corporate:** `app/solutions/corporate/page.js`
- **Restaurant:** `app/solutions/restaurant/page.js`

Each file contains:
- Challenges section
- Recommended products
- Success metrics
- Real project examples

### Case Studies

**File:** `app/case-studies/page.js`

Edit the `caseStudies` array to add/edit case studies:

```javascript
const caseStudies = [
  {
    title: "Your Case Study Title",
    client: "Client Name",
    location: "City, State",
    productUsed: "EdgeLuxe Product Name",
    challenge: "What was the problem?",
    solution: "How did you solve it?",
    results: ["Result 1", "Result 2"],
    testimonial: {
      quote: "Customer quote here",
      author: "John Doe",
      title: "Owner, Company Name"
    }
  }
]
```

---

## 📄 Specification Sheets

### Location
All spec sheets are in: `app/specs/[product-name]/page.js`

### Available Spec Sheets
- LP5 Trimless: `/specs/lp5`
- LP3.1 Halo-Lit: `/specs/lp3-1` (coming soon)
- Cast Acrylic: `/specs/cast-acrylic` (coming soon)

### How to Edit a Spec Sheet

1. Open the spec sheet file (e.g., `app/specs/lp5/page.js`)
2. Edit any section:

```javascript
// Product Overview
<p className="text-neutral-300 leading-relaxed mb-6 print:text-gray-700">
  Edit your product overview text here...
</p>

// Specifications
<tr className="border-b border-white/10 print:border-gray-200">
  <td className="py-3 font-semibold text-neutral-400 print:text-gray-700">Face Material</td>
  <td className="py-3 text-neutral-200 print:text-black">3mm or 5mm white acrylic</td>
</tr>

// Contact Information
<div><strong className="text-white print:text-black">EAST:</strong> +1 (689) 294-0912</div>
```

---

## 🔗 Navigation & Footer

### Header Navigation

**File:** `app/components/Header.js`

Edit menu items, logo, CTA button text.

### Footer Navigation

**File:** `app/components/Footer.js`

Edit:
- Company links
- Product links
- Tools & Solutions links
- Contact information
- Service areas

---

## 📸 Images

### Product Images

**Location:** `public/images/products/`

**Naming Convention:**
- Day images: `[product-id]-day.jpg`
- Night images: `[product-id]-night.jpg`

**To Update:**
1. Add your images to `public/images/products/`
2. Update `app/config/site.js`:

```javascript
{
  id: "edgeluxe-lp5",
  dayImage: "/images/products/lp5-day.jpg",
  nightImage: "/images/products/lp5-night.jpg",
}
```

### Reference/Project Images

**Location:** `public/images/references/`

Used for project showcase on projects page.

---

## 🎯 Quick Edits Checklist

### To Update Product Information:
1. ✅ Edit `app/config/site.js`
2. ✅ That's it! (auto-updates everywhere)

### To Update Company Info:
1. ✅ Edit `app/components/Footer.js` (phone, email)
2. ✅ Edit spec sheets (contact section)

### To Add New Case Study:
1. ✅ Edit `app/case-studies/page.js`
2. ✅ Add to `caseStudies` array

### To Add New Industry Solution:
1. ✅ Create `app/solutions/[industry-name]/page.js`
2. ✅ Add link to `app/components/Footer.js`

### To Hide Products:
1. ✅ Edit `app/config/site.js`
2. ✅ Add `hidden: true` to product

---

## 🚀 After Making Changes

1. Save the file
2. The dev server will auto-reload
3. Refresh your browser
4. Changes appear immediately

---

## 📞 Need Help?

If you need to make complex changes or add new features, let me know and I can help you implement them!

---

## 🗂️ File Structure Reference

```
app/
├── config/
│   └── site.js                    ← MAIN CONTENT FILE (products, features)
├── components/
│   ├── Header.js                  ← Navigation
│   ├── Footer.js                  ← Footer & links
│   ├── Hero.js                    ← Homepage hero
│   └── [other components]
├── products/
│   ├── [id]/page.js              ← Individual product pages
│   └── page.js                    ← Product catalog
├── solutions/
│   ├── retail/page.js            ← Industry solutions
│   ├── healthcare/page.js
│   ├── corporate/page.js
│   └── restaurant/page.js
├── case-studies/page.js          ← Case studies
├── specs/
│   ├── lp5/page.js               ← LP5 spec sheet
│   ├── lp3-1/page.js             ← LP3.1 spec sheet
│   └── cast-acrylic/page.js      ← Cast acrylic spec sheet
└── page.js                        ← Homepage

public/
└── images/
    ├── products/                  ← Product images
    └── references/                ← Project images
```

---

## 💡 Pro Tips

1. **Always edit `app/config/site.js` first** - it controls most content
2. **Use `hidden: true`** to temporarily hide products instead of deleting them
3. **Test changes locally** before deploying to production
4. **Keep backups** of your content before major changes
5. **Image sizes:** Optimize images to 1200px wide for best performance
