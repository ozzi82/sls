# Projects Page Guide

## How to Add Project Reference Images

The Projects page (`/projects`) displays completed signage projects in a beautiful grid with popup functionality.

### Image Requirements

1. **Location**: Place images in `/public/images/references/`
2. **Naming**: Use descriptive names like `ref1.jpg`, `ref2.jpg`, etc.
3. **Format**: JPG or PNG (JPG recommended for smaller file size)
4. **Dimensions**: Recommended 1200x900px (4:3 aspect ratio)
5. **File Size**: Keep under 500KB for fast loading

### Currently Configured Projects

The following images are configured in `app/projects/ProjectsGrid.js`:

1. **ref1.jpg** - Retail Storefront - Trimless Channel Letters - Miami, FL
2. **ref2.jpg** - Corporate Office - Halo Lit Letters - Minneapolis, MN
3. **ref3.jpg** - Restaurant Signage - Cast Acrylic - Toronto, ON
4. **ref4.jpg** - Hotel Exterior - EdgeLuxe LP5 - Orlando, FL
5. **ref5.jpg** - Medical Office - Flat Cut Letters - Chicago, IL
6. **ref6.jpg** - Shopping Center - Mixed Products - Dallas, TX

### Adding New Projects

To add or modify project references, edit `app/projects/ProjectsGrid.js`:

```javascript
const references = [
  {
    id: 1,
    title: "Your Project Title",
    image: "/images/references/your-image.jpg",
    category: "Product Type",
    location: "City, State",
  },
  // Add more projects here...
];
```

### Categories Available

- Trimless Channel Letters
- Halo Lit Letters
- Flat Cut Letters
- Cast Acrylic
- Mixed Products

### Features

- **Click to Enlarge**: Users can click any project image to see it in a full-screen popup
- **Responsive Grid**: Automatically adjusts to 1, 2, or 3 columns based on screen size
- **Hover Effects**: Smooth animations when hovering over images with "Click to enlarge" text
- **Category Badges**: Each project displays its product category
- **Wholesale Notice**: Disclaimer explaining that projects are completed by sign company partners

## Image Optimization Tips

1. Use tools like TinyPNG or ImageOptim to compress images
2. Maintain consistent aspect ratio (4:3 recommended)
3. Use descriptive file names for better organization
4. Keep originals in a separate folder as backup

## Privacy Note

As a wholesale manufacturer, you can choose which projects to showcase. Only share images you have permission to display from your sign company partners.
