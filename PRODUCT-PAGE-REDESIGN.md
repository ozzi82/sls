# Product Detail Page - Design Improvements

## Current Issues
1. Hero background image barely visible (using placeholder images)
2. Layout could be more engaging and visual
3. Missing visual hierarchy and white space

## Recommended Changes

### 1. Hero Section
**Image Specifications:**
- Size: **1920x800px** (2.4:1 aspect ratio)
- Use actual project photos showing installed signs
- Alternative: Product photos on white/clean background
- Location: Add as `heroImage` field in product config

**Design Changes:**
- Increase hero height from 48vh/60vh to **70vh** for more impact
- Lighter overlay (from-black/65 to **from-black/40**) to show image better
- Add subtle parallax effect on scroll

### 2. Product Images Section (Day/Night Slider)
**Current:** Good interactive hover effect
**Improvements:**
- Add image gallery with multiple angles (3-5 images)
- Add zoom-on-click functionality
- Show installation examples alongside product photos

### 3. Layout Restructure

#### Option A: Single Column (Recommended for B2B)
```
┌─────────────────────────────────┐
│   Hero Image (70vh tall)        │
│   + Title + Description Glass   │
└─────────────────────────────────┘
┌─────────────────────────────────┐
│   Quick Specs (3-4 key points)  │
└─────────────────────────────────┘
┌─────────────────────────────────┐
│   Image Gallery / Slider         │
│   (Multiple product angles)      │
└─────────────────────────────────┘
┌─────────────────────────────────┐
│   Detailed Specifications Grid   │
└─────────────────────────────────┘
┌─────────────────────────────────┐
│   Features & Benefits           │
└─────────────────────────────────┘
┌─────────────────────────────────┐
│   Use Cases / Applications       │
└─────────────────────────────────┘
┌─────────────────────────────────┐
│   Related Products               │
└─────────────────────────────────┘
┌─────────────────────────────────┐
│   CTA: Request Quote             │
└─────────────────────────────────┘
```

#### Option B: Two Column (More Modern)
```
Left Column (60%):           Right Column (40%):
┌────────────────────┐      ┌──────────────────┐
│  Image Gallery     │      │  Quick Info Card │
│  (Interactive)     │      │  ---------------  │
│                    │      │  • Pricing       │
│                    │      │  • Lead Time     │
│                    │      │  • Category      │
│                    │      │                  │
│                    │      │  [Request Quote] │
└────────────────────┘      └──────────────────┘
┌────────────────────┐
│  Features List     │
└────────────────────┘
┌────────────────────┐
│  Specifications    │
└────────────────────┘
┌────────────────────┐
│  Applications      │
└────────────────────┘
```

### 4. Specific Design Elements

#### A. Add Pricing Display (if applicable)
```javascript
// Sticky sidebar card
<div className="sticky top-24 rounded-2xl border border-orange-500/20 bg-gradient-to-br from-neutral-900/80 to-neutral-800/80 backdrop-blur-xl p-6">
  <div className="text-sm text-neutral-400 mb-1">Wholesale Price</div>
  <div className="text-3xl font-bold text-white mb-4">{product.price}</div>
  <div className="space-y-3 mb-6">
    <div className="flex justify-between text-sm">
      <span className="text-neutral-400">Lead Time:</span>
      <span className="text-white">5-7 days</span>
    </div>
    <div className="flex justify-between text-sm">
      <span className="text-neutral-400">Category:</span>
      <span className="text-white">{product.category}</span>
    </div>
  </div>
  <button>Request Quote</button>
</div>
```

#### B. Features with Icons
Instead of plain bullet points:
```javascript
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  {product.features.map((feature) => (
    <div className="flex items-start gap-3 p-4 rounded-xl border border-neutral-800 bg-neutral-900/40">
      <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
      <span className="text-neutral-200">{feature}</span>
    </div>
  ))}
</div>
```

#### C. Use Cases / Applications Section
```javascript
<div className="mt-12">
  <h2 className="text-2xl font-bold text-white mb-6">Perfect For:</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {applications.map((app) => (
      <div className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/60 p-6 hover:border-orange-500/40 transition-colors">
        <div className="text-orange-400 mb-3">{app.icon}</div>
        <h3 className="font-semibold text-white mb-2">{app.title}</h3>
        <p className="text-sm text-neutral-400">{app.description}</p>
      </div>
    ))}
  </div>
</div>
```

#### D. Tabbed Content (Advanced)
```javascript
// Tabs for: Overview | Specs | Installation | Downloads
<Tabs defaultValue="overview">
  <TabsList>
    <TabsTrigger>Overview</TabsTrigger>
    <TabsTrigger>Specifications</TabsTrigger>
    <TabsTrigger>Installation</TabsTrigger>
    <TabsTrigger>Downloads</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">...</TabsContent>
  <TabsContent value="specs">...</TabsContent>
</Tabs>
```

### 5. Visual Improvements

#### Color Accents
- Add **orange accent borders** on hover for cards
- Use **gradient backgrounds** for important CTAs
- Add **subtle animations** (fade-in, slide-up) on scroll

#### Typography Hierarchy
```css
Page Title: text-5xl font-bold
Section Headings: text-3xl font-bold with orange gradient
Subsections: text-xl font-semibold text-white
Body: text-base text-neutral-300
```

#### Spacing
- Increase section padding: py-16 → py-20
- Add more whitespace between sections
- Use max-w-6xl for content width

### 6. Mobile Optimization
- Stack two-column layout on mobile
- Make image slider touch-friendly
- Sticky "Request Quote" button at bottom on mobile

### 7. Trust Signals
Add badges/certifications section:
```javascript
<div className="flex items-center justify-center gap-8 py-8 border-y border-neutral-800">
  <img src="/badges/ul-listed.svg" alt="UL Listed" className="h-12" />
  <img src="/badges/warranty.svg" alt="3 Year Warranty" className="h-12" />
  <img src="/badges/fast-shipping.svg" alt="Fast Shipping" className="h-12" />
</div>
```

### 8. Related Products Carousel
At the bottom, show 4-6 related products from the same category

## Implementation Priority

### Phase 1 (Quick Wins):
1. ✅ Add hero images to products (just upload images to /public/images/)
2. ✅ Adjust hero overlay opacity
3. ✅ Add pricing display if applicable
4. ✅ Improve features section with icons

### Phase 2 (Medium Effort):
5. Add image gallery with multiple product angles
6. Add "Use Cases" section
7. Add related products section
8. Improve mobile experience

### Phase 3 (Polish):
9. Add animations on scroll
10. Add tabbed content
11. Add trust badges
12. Add zoom functionality to images

## Next Steps

1. **Upload hero images** to `/public/images/heroes/`
   - Name them: `edgeluxe-lp1-hero.jpg`, etc.
   - Size: 1920x800px

2. **Update product config** to add heroImage field:
```javascript
{
  id: "edgeluxe-lp1",
  heroImage: "/images/heroes/edgeluxe-lp1-hero.jpg", // Add this
  dayImage: "/images/lp1-fco.jpg",
  // ... rest of product
}
```

3. **Decide on layout**: Single column or two-column?

4. **Which improvements** do you want me to implement first?
