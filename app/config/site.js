/**
 * SITE CONFIGURATION
 *
 * This file controls all the main content, images, and settings for your website.
 * Edit this file to update images, add/remove products, or change site information.
 */

// ============================================
// COMPANY INFORMATION
// ============================================
export const siteConfig = {
  name: "Sunlite Signs",
  legalName: "Sunlite Signs LLC",
  url: "https://www.sunlitesigns.com",
  email: "hello@sunlitesigns.com",
  phone: "+1-689-294-0912",
  phoneDisplay: "(689) 294-0912",

  // Service areas
  serviceAreas: ["US", "CA"],

  // Social media (uncomment and add your links)
  social: {
    // facebook: "https://www.facebook.com/sunlitesigns",
    // instagram: "https://www.instagram.com/sunlitesigns",
    // linkedin: "https://www.linkedin.com/company/sunlite-signs-llc",
  },

  // Business highlights
  highlights: {
    yearsInBusiness: "25+",
    quoteTime: "24-48 hours",
    deliveryTime: "~21 days door to door",
    warranty: "3 years",
  },
};

// ============================================
// IMAGES
// ============================================
// To change images:
// 1. Upload your image to the /public/images/ folder
// 2. Update the path below
// 3. Use descriptive names like "hero-manufacturing.jpg"

export const images = {
  // Logo (recommended: PNG with transparent background, min 200px height)
  logo: "/logo.png",

  // Hero section image (recommended: 1920x1080px, JPG or WebP)
  hero: "https://www.sunlitesigns.com/wp-content/uploads/2024/12/RADAI-1024x768.jpg",
  heroFallback: "/hero-placeholder.jpg",

  // Open Graph image for social media sharing (recommended: 1200x630px)
  ogImage: "/og.jpg",

  // Product hero images for detail pages (recommended: 800x600px, JPG or WebP)
  // These appear on individual product pages - you can easily replace them
  products: {
    // Fabricated Channel Letters
    lp1: "/images/hero-lp1.jpg",
    lp31: "/images/hero-lp31.jpg",
    lp32: "/images/hero-lp32.jpg",
    lp5: "/images/hero-lp5.jpg",

    // Cast Block Acrylic
    lp11f: "/images/hero-lp11-f.jpg",
    lp11b: "/images/hero-lp11-b.jpg",
    lp11fb: "/images/hero-lp11-fb.jpg",
    lp11bs: "/images/hero-lp11-bs.jpg",
    lp11fs: "/images/hero-lp11-fs.jpg",
    lp11s: "/images/hero-lp11-s.jpg",
    lp11n: "/images/hero-lp11-n.jpg",
    lp11c: "/images/hero-lp11-c.jpg",

    // Cabinet Signs (using placeholder references until actual images provided)
    cabinet: "/images/references/ref2.jpg",
    blade: "/images/references/ref1.jpg",
  },
};

// ============================================
// HERO SECTION CONTENT
// ============================================
export const heroContent = {
  title: "German-Engineered Precision Signage",
  subtitle: "EdgeLuxe Wholesale Solutions",
  tagline: "Low Profile • Trim-Less • UL Listed",
  description: "Premium wholesale manufacturer of UL-listed EdgeLuxe trimless channel letters and cast block acrylic. German-engineered design and quality standards — serving sign companies across USA and Canada with 24-48 hour quotes and ~21 day delivery.",

  primaryButton: {
    text: "Request Wholesale Quote",
    url: "/contact",
  },

  secondaryButton: {
    text: "View EdgeLuxe Catalog",
    url: "/products",
  },

  // Stats displayed on hero card
  stats: [
    { icon: "Factory", value: "25+ Years", label: "Industry Experience" },
    { icon: "Truck", value: "24 – 48h", label: "Quote Response" },
    { icon: "Award", value: "UL Listed", label: "Components" },
    { icon: "Zap", value: "IP67", label: "Waterproof Sealed" },
  ],
};

// ============================================
// FEATURED PRODUCTS
// ============================================
// EdgeLuxe Product Catalog - German-engineered precision signage
// Categories: Fabricated Channel Letters, Cast Block Acrylic, Cabinet Signs

export const featuredProducts = [
  // ============================================
  // FABRICATED CHANNEL LETTERS
  // ============================================
  {
    id: "edgeluxe-lp1",
    category: "Fabricated Channel Letters",
    image: images.products.lp1,
    dayImage: "/images/products/lp1-day.jpg",
    nightImage: "/images/products/lp1-night.jpg",
    title: "EdgeLuxe LP1 - Flat Cutout Letters (FCO)",
    description: "Non-illuminated flat cut-out letters in premium materials including wood, aluminum, stainless steel, and acrylic.",
    price: "Custom Quote",
    features: [
      "Materials: Wood, aluminum, stainless steel, acrylic",
      "Thickness: 1-200mm (0.039\"-7.87\")",
      "Custom colors & finishes",
      "No maintenance required"
    ],
    specs: {
      minStrokeWidth: "5mm (0.2\")",
      minHeight: "10mm (0.4\")",
      materials: "Wood, aluminum, stainless steel, acrylic",
      customization: "Acrylic colors, paint, vinyl"
    },
    specifications: {
      Materials: "Wood, aluminum, stainless steel, acrylic and many more",
      Thickness: '1mm (0.039") to 200mm (7.87")',
      Customization: "Broad range of acrylic colors, paint, and vinyl",
      "Stroke Width": 'Minimum 5mm (0.2")',
      "Minimum Height": '10mm (0.4")',
      Maintenance: "No maintenance",
      Warranty: "3 years",
      Certification: "UL Listed",
    },
    badges: ["Quick Ship", "UL Listed", "3 Year Warranty"],
    href: "/products/edgeluxe-lp1",
    enabled: true,
    featured: false, // Not featured on homepage
  },
  {
    id: "edgeluxe-lp31",
    category: "Fabricated Channel Letters",
    image: images.products.lp31,
    dayImage: "/images/products/lp31-day.jpg",
    nightImage: "/images/products/lp31-night.jpg",
    title: "EdgeLuxe LP3.1 - Halo-Lit Standoff Mount",
    description: "Fabricated stainless steel letters with halo illumination from the back using standoff spacers for elegant wall lighting effects.",
    price: "Custom Quote",
    features: [
      "Halo illumination with standoffs",
      "Depth: 30-100mm (1.2\"-3.9\")",
      "PMS color matching",
      "Serviceable LEDs"
    ],
    specs: {
      minStrokeWidth: "15mm (0.6\")",
      minHeight: "50mm (2\")",
      depth: "30mm, 50mm, 80mm, 100mm",
      customization: "PMS colors, vinyls, translucent acrylics"
    },
    specifications: {
      Materials: "Fabricated Stainless Steel",
      Illumination: "Halo from back with standoffs",
      Depths: '30mm (1.2"), 50mm (2"), 80mm (3.1"), 100mm (3.9")',
      Customization: "Any PMS color, vinyls or pigmented translucent acrylics for colorful halo effects",
      "Stroke Width": 'Minimum 15mm (0.6") for stability and even illumination',
      "Minimum Height": '50mm (2")',
      Maintenance: "Serviceable LEDs",
      Warranty: "3 years",
      Certification: "UL Listed",
    },
    badges: ["Premium", "UL Listed", "3 Year Warranty"],
    href: "/products/edgeluxe-lp31",
    enabled: true,
  },
  {
    id: "edgeluxe-lp32",
    category: "Fabricated Channel Letters",
    image: images.products.lp32,
    dayImage: "/images/products/lp32-day.jpg",
    nightImage: "/images/products/lp32-night.jpg",
    title: "EdgeLuxe LP3.2 - Halo-Lit Flush Mount",
    description: "Fabricated stainless steel flush-mounted letters with partial side-lit halo effect for sleek architectural applications.",
    price: "Custom Quote",
    features: [
      "Partial side-lit halo flush-mount",
      "Depth: 30-100mm (1.2\"-3.9\")",
      "PMS color matching",
      "Serviceable LEDs"
    ],
    specs: {
      minStrokeWidth: "15mm (0.6\")",
      minHeight: "50mm (2\")",
      depth: "30mm, 50mm, 80mm, 100mm",
      customization: "PMS colors, vinyls, translucent acrylics"
    },
    specifications: {
      Materials: "Fabricated Stainless Steel",
      Illumination: "Flush-mount partial side-lit halo",
      Depths: '30mm (1.2"), 50mm (2"), 80mm (3.1"), 100mm (3.9")',
      Customization: "Any PMS color, vinyls or pigmented translucent acrylics for colorful halo effects",
      "Stroke Width": 'Minimum 15mm (0.6") for stability and even illumination',
      "Minimum Height": '50mm (2")',
      Maintenance: "Serviceable LEDs",
      Warranty: "3 years",
      Certification: "UL Listed",
    },
    badges: ["Premium", "UL Listed", "3 Year Warranty"],
    href: "/products/edgeluxe-lp32",
    enabled: true,
  },
  {
    id: "edgeluxe-lp5",
    category: "Fabricated Channel Letters",
    image: images.products.lp5,
    dayImage: "/images/products/lp5-day.jpg",
    nightImage: "/images/products/lp5-night.jpg",
    title: "EdgeLuxe LP5 - Trimless Face-Lit Channel Letters",
    description: "Premium trimless fabricated stainless steel channel letters with step-router acrylic face for a clean, modern aesthetic.",
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
    specifications: {
      Materials: "Thick gauge stainless steel returns and back welded together, step-router acrylic face trim-less",
      Illumination: "Face-lit",
      Depths: '30mm (1.2"), 50mm (2"), 80mm (3.1"), 100mm (3.9")',
      Customization: "Painted in any PMS color with color matching options for vinyls or pigmented translucent acrylics for colorful face-lit effects",
      "Stroke Width": 'Minimum 15mm (0.6") for stability and even illumination',
      "Minimum Height": '50mm (2")',
      Maintenance: "Serviceable LEDs",
      Warranty: "3 years",
      Certification: "UL Listed",
    },
    badges: ["Best Seller", "Premium", "UL Listed", "3 Year Warranty"],
    href: "/products/edgeluxe-lp5",
    enabled: true,
    featured: true, // Featured on homepage
  },

  // ============================================
  // CAST BLOCK ACRYLIC LETTERS
  // ============================================
  {
    id: "edgeluxe-lp11-f",
    category: "Cast Block Acrylic",
    image: images.products.lp11f,
    dayImage: "/images/products/lp11-f-day.jpg",
    nightImage: "/images/products/lp11-f-night.jpg",
    title: "EdgeLuxe LP11-F - Face-Lit Acrylic",
    description: "30mm cast block acrylic with embedded LEDs for uniform face lighting. IP67 waterproof, maintenance-free design.",
    price: "Custom Quote",
    features: [
      "Embedded LEDs - uniform face lighting",
      "30mm (1.2\") cast block acrylic",
      "IP67 waterproof sealed",
      "No maintenance required"
    ],
    specs: {
      minStrokeWidth: "12mm (0.47\")",
      minHeight: "50mm (2\")",
      depth: "30mm (1.2\") standard",
      sealing: "Epoxy-sealed IP67",
      customization: "PMS colors, vinyls, translucent acrylics"
    },
    specifications: {
      Materials: '30mm (1.2") cast block acrylic',
      Illumination: "Embedded LEDs for uniform face-lit",
      Depth: 'Standard 30mm (1.2") for durability and optimal light diffusion',
      Customization: "Painted in any PMS color with color matching options for vinyls or pigmented translucent acrylics for colorful face-lit effects",
      "Stroke Width": 'Minimum 12mm (0.47") for stability and even illumination',
      "Minimum Height": '50mm (2")',
      Sealing: "Epoxy-sealed for IP67 waterproofing and heat dissipation",
      Maintenance: "High water and dust-proof, no maintenance",
      Warranty: "3 years",
      Certification: "UL Listed",
    },
    badges: ["Premium", "UL Listed", "3 Year Warranty"],
    href: "/products/edgeluxe-lp11-f",
    enabled: true,
    featured: true, // Featured on homepage
  },
  {
    id: "edgeluxe-lp11-b",
    category: "Cast Block Acrylic",
    image: images.products.lp11b,
    dayImage: "/images/products/lp11-b-day.jpg",
    nightImage: "/images/products/lp11-b-night.jpg",
    title: "EdgeLuxe LP11-B - Back-Lit (Halo) Acrylic",
    description: "Cast block acrylic with embedded LEDs for uniform halo-lit effect using standoff spacers. Available in 15mm, 20mm, or 30mm depths.",
    price: "Custom Quote",
    features: [
      "Halo illumination with standoffs",
      "15mm, 20mm, or 30mm depths",
      "IP67 waterproof sealed",
      "No maintenance required"
    ],
    specs: {
      minStrokeWidth: "12mm (0.47\")",
      minHeight: "50mm (2\")",
      depth: "15mm, 20mm, or 30mm",
      sealing: "Epoxy-sealed IP67",
      customization: "PMS colors, vinyls, translucent acrylics"
    },
    specifications: {
      Materials: '15mm (0.6"), 20mm (0.79") or 30mm (1.2") cast block acrylic',
      Illumination: "Embedded LEDs for uniform halo-lit with standoff spacers",
      Depth: 'Standard 15mm (0.6"), 20mm (0.79") and 30mm (1.2") for durability and optimal light diffusion',
      Customization: "Painted in any PMS color with color matching options for vinyls or pigmented translucent acrylics for colorful halo-lit effects",
      "Stroke Width": 'Minimum 12mm (0.47") for stability and even illumination',
      "Minimum Height": '50mm (2")',
      Sealing: "Epoxy-sealed for IP67 waterproofing and heat dissipation",
      Maintenance: "High water and dust-proof, no maintenance",
      Warranty: "3 years",
      Certification: "UL Listed",
    },
    badges: ["Premium", "UL Listed", "3 Year Warranty"],
    href: "/products/edgeluxe-lp11-b",
    enabled: true,
    featured: true, // Featured on homepage
  },
  {
    id: "edgeluxe-lp11-fb",
    category: "Cast Block Acrylic",
    image: images.products.lp11fb,
    dayImage: "/images/products/lp11-fb-day.jpg",
    nightImage: "/images/products/lp11-fb-night.jpg",
    title: "EdgeLuxe LP11-FB - Face & Halo Combo",
    description: "30mm cast block acrylic with embedded LEDs for both face and halo illumination - the ultimate visibility solution.",
    price: "Custom Quote",
    features: [
      "Face + Halo combination lighting",
      "30mm (1.2\") cast block acrylic",
      "IP67 waterproof sealed",
      "Maximum visibility"
    ],
    specs: {
      minStrokeWidth: "12mm (0.47\")",
      minHeight: "50mm (2\")",
      depth: "30mm (1.2\")",
      sealing: "Epoxy-sealed IP67",
      customization: "PMS colors, vinyls, translucent acrylics"
    },
    specifications: {
      Materials: '30mm (1.2") cast block acrylic',
      Illumination: "Face & Halo combination",
      Customization: "PMS colors, vinyls, translucent acrylics",
      "Minimum Height": '50mm (2")',
      Sealing: "Epoxy-sealed IP67",
      Warranty: "3 years",
      Certification: "UL Listed",
    },
    badges: ["Premium", "UL Listed", "3 Year Warranty"],
    href: "/products/edgeluxe-lp11-fb",
    enabled: true,
  },
  {
    id: "edgeluxe-lp11-bs",
    category: "Cast Block Acrylic",
    image: images.products.lp11bs,
    dayImage: "/images/products/lp11-bs-day.jpg",
    nightImage: "/images/products/lp11-bs-night.jpg",
    title: "EdgeLuxe LP11-BS - Back & Side-Lit",
    description: "30mm cast block acrylic with partial back side-lit effect for flush-mount installations with subtle illumination.",
    price: "Custom Quote",
    features: [
      "Partial back side-lit flush-mount",
      "30mm (1.2\") cast block acrylic",
      "IP67 waterproof sealed",
      "Elegant side glow effect"
    ],
    specs: {
      minStrokeWidth: "12mm (0.47\")",
      minHeight: "50mm (2\")",
      depth: "30mm (1.2\")",
      sealing: "Epoxy-sealed IP67",
      customization: "PMS colors, vinyls, translucent acrylics"
    },
    specifications: {
      Materials: '30mm (1.2") cast block acrylic',
      Illumination: "Back & Side-Lit",
      Customization: "PMS colors, vinyls, translucent acrylics",
      "Minimum Height": '50mm (2")',
      Sealing: "Epoxy-sealed IP67",
      Warranty: "3 years",
      Certification: "UL Listed",
    },
    badges: ["Premium", "UL Listed", "3 Year Warranty"],
    href: "/products/edgeluxe-lp11-bs",
    enabled: true,
  },
  {
    id: "edgeluxe-lp11-fs",
    category: "Cast Block Acrylic",
    image: images.products.lp11fs,
    dayImage: "/images/products/lp11-fs-day.jpg",
    nightImage: "/images/products/lp11-fs-night.jpg",
    title: "EdgeLuxe LP11-FS - Front & Side-Lit",
    description: "30mm cast block acrylic with partial front side-lit effect for contemporary flush-mount applications.",
    price: "Custom Quote",
    features: [
      "Partial front side-lit flush-mount",
      "30mm (1.2\") cast block acrylic",
      "IP67 waterproof sealed",
      "Modern edge lighting"
    ],
    specs: {
      minStrokeWidth: "12mm (0.47\")",
      minHeight: "50mm (2\")",
      depth: "30mm (1.2\")",
      sealing: "Epoxy-sealed IP67",
      customization: "PMS colors, vinyls, translucent acrylics"
    },
    specifications: {
      Materials: '30mm (1.2") cast block acrylic',
      Illumination: "Front & Side-Lit",
      Customization: "PMS colors, vinyls, translucent acrylics",
      "Minimum Height": '50mm (2")',
      Sealing: "Epoxy-sealed IP67",
      Warranty: "3 years",
      Certification: "UL Listed",
    },
    badges: ["Premium", "UL Listed", "3 Year Warranty"],
    href: "/products/edgeluxe-lp11-fs",
    enabled: true,
  },
  {
    id: "edgeluxe-lp11-s",
    category: "Cast Block Acrylic",
    image: images.products.lp11s,
    dayImage: "/images/products/lp11-s-day.jpg",
    nightImage: "/images/products/lp11-s-night.jpg",
    title: "EdgeLuxe LP11-S - Full Side-Lit",
    description: "30mm cast block acrylic with full side-lit illumination for dramatic edge-to-edge glow effects.",
    price: "Custom Quote",
    features: [
      "Full side-lit illumination",
      "30mm (1.2\") cast block acrylic",
      "IP67 waterproof sealed",
      "Distinctive edge glow"
    ],
    specs: {
      minStrokeWidth: "12mm (0.47\")",
      minHeight: "50mm (2\")",
      depth: "30mm (1.2\")",
      sealing: "Epoxy-sealed IP67",
      customization: "PMS colors, vinyls, translucent acrylics"
    },
    specifications: {
      Materials: '30mm (1.2") cast block acrylic',
      Illumination: "Full Side-Lit",
      Customization: "PMS colors, vinyls, translucent acrylics",
      "Minimum Height": '50mm (2")',
      Sealing: "Epoxy-sealed IP67",
      Warranty: "3 years",
      Certification: "UL Listed",
    },
    badges: ["Premium", "UL Listed", "3 Year Warranty"],
    href: "/products/edgeluxe-lp11-s",
    enabled: true,
  },
  {
    id: "edgeluxe-lp11-n",
    category: "Cast Block Acrylic",
    image: images.products.lp11n,
    dayImage: "/images/products/lp11-n-day.jpg",
    nightImage: "/images/products/lp11-n-night.jpg",
    title: "EdgeLuxe LP11-N - Faux Neon",
    description: "30mm cast block acrylic routed to simulate neon glass tube with embedded LEDs for authentic neon appearance without the fragility.",
    price: "Custom Quote",
    features: [
      "Faux neon glass tube effect",
      "30mm (1.2\") cast block acrylic",
      "IP67 waterproof sealed",
      "Durable neon alternative"
    ],
    specs: {
      minStrokeWidth: "12mm (0.47\")",
      minHeight: "50mm (2\")",
      depth: "30mm (1.2\")",
      sealing: "Epoxy-sealed IP67",
      customization: "PMS colors, vinyls, translucent acrylics"
    },
    specifications: {
      Materials: '30mm (1.2") cast block acrylic',
      Illumination: "Faux Neon",
      Customization: "PMS colors, vinyls, translucent acrylics",
      "Minimum Height": '50mm (2")',
      Sealing: "Epoxy-sealed IP67",
      Warranty: "3 years",
      Certification: "UL Listed",
    },
    badges: ["Premium", "UL Listed", "3 Year Warranty"],
    href: "/products/edgeluxe-lp11-n",
    enabled: true,
  },
  {
    id: "edgeluxe-lp11-c",
    category: "Cast Block Acrylic",
    image: images.products.lp11c,
    dayImage: "/images/products/lp11-c-day.jpg",
    nightImage: "/images/products/lp11-c-night.jpg",
    title: "EdgeLuxe LP11-C - Conical Profile Face-Lit",
    description: "30mm cast block acrylic with conical profile for narrow strokes and dimensional letters. Embedded LEDs provide uniform face-lit illumination.",
    price: "Custom Quote",
    features: [
      "Conical profile for narrow strokes",
      "30mm (1.2\") cast block acrylic",
      "IP67 waterproof sealed",
      "Ideal for dimensional letters"
    ],
    specs: {
      minStrokeWidth: "12mm (0.47\") at back-side, down to 3mm (0.12\") on face",
      minHeight: "50mm (2\")",
      depth: "30mm (1.2\")",
      sealing: "Epoxy-sealed IP67",
      customization: "PMS colors, vinyls, translucent acrylics"
    },
    specifications: {
      Materials: '30mm (1.2") cast block acrylic',
      Illumination: "Embedded LEDs for uniform face-lit, conical profile for narrow strokes",
      Profile: "Conical: 12mm (0.47\") at back-side tapering to 3mm (0.12\") on face",
      Customization: "Painted in any PMS color with color matching options for vinyls or pigmented translucent acrylics",
      "Minimum Height": '50mm (2")',
      Sealing: "Epoxy-sealed IP67",
      Warranty: "3 years",
      Certification: "UL Listed",
    },
    badges: ["Premium", "UL Listed", "3 Year Warranty"],
    href: "/products/edgeluxe-lp11-c",
    enabled: true,
  },

  // ============================================
  // CABINET SIGNS
  // ============================================
  {
    id: "cabinet-signs",
    category: "Cabinet Signs",
    image: images.products.cabinet,
    dayImage: "/images/placeholder-day.jpg",
    nightImage: "/images/placeholder-night.jpg",
    title: "LED Cabinet Signs",
    description: "High-visibility cabinet signs with rugged aluminum frames and even LED illumination for maximum impact.",
    price: "Custom Quote",
    features: [
      "Even LED illumination",
      "Durable aluminum frames",
      "Wall or pylon mount options",
      "UL-listed components"
    ],
    specifications: {
      Construction: "Rugged aluminum frames",
      Illumination: "Even LED",
      Mounting: "Wall or pylon mount",
      Certification: "UL Listed",
      Warranty: "3 years",
    },
    badges: ["Best Seller", "UL Listed", "3 Year Warranty"],
    href: "/products/cabinet-signs",
    enabled: true,
    featured: true,
    hidden: true, // Hidden until content is ready
  },
  {
    id: "blade-signs",
    category: "Cabinet Signs",
    image: images.products.blade,
    dayImage: "/images/placeholder-day.jpg",
    nightImage: "/images/placeholder-night.jpg",
    title: "Blade Signs",
    description: "Architectural blade signs with double-sided visibility and optional LED illumination for wayfinding and storefront applications.",
    price: "Custom Quote",
    features: [
      "Double-sided visibility",
      "LED illumination options",
      "Architectural finishes",
      "Custom shapes & sizes"
    ],
    specifications: {
      Visibility: "Double-sided",
      Illumination: "Optional LED",
      Finishes: "Architectural-grade",
      Customization: "Custom shapes and sizes",
      Warranty: "3 years",
    },
    badges: ["Premium", "Customizable", "3 Year Warranty"],
    href: "/products/blade-signs",
    enabled: true,
    hidden: true, // Hidden until content is ready
  },
];

// Filter functions for products
export const getEnabledProducts = () => featuredProducts.filter(p => p.enabled && !p.hidden);
export const getFeaturedProducts = () => featuredProducts.filter(p => p.enabled && p.featured !== false && !p.hidden).slice(0, 4);
export const getAllProducts = () => featuredProducts.filter(p => p.enabled && !p.hidden);

// ============================================
// NAVIGATION
// ============================================
export const navigation = {
  main: [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],

  footer: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/faq", label: "FAQ" },
  ],
};

// ============================================
// SEO SETTINGS
// ============================================
export const seoDefaults = {
  titleTemplate: "%s | Sunlite Signs",
  defaultTitle: "EdgeLuxe Wholesale Signage | German-Engineered Trimless Channel Letters & Cast Acrylic | Sunlite Signs",
  description: "Premium wholesale EdgeLuxe signage manufacturer - UL listed trimless channel letters (LP5), halo-lit letters (LP3.1, LP3.2), FCO flat cutout letters (LP1), and cast block acrylic (LP11 series). German-engineered design, IP67 waterproof, 24-48h quotes, ~21 day delivery across USA & Canada.",
  keywords: "EdgeLuxe signage, wholesale sign manufacturer, UL listed channel letters, trimless channel letters LP5, German engineered signs, cast block acrylic letters, FCO flat cutout letters LP1, halo lit letters LP3, IP67 waterproof signage, LED channel letters wholesale, precision illuminated letters, low profile channel letters, architectural signage wholesale, German design quality standards, US sign operations",
};
