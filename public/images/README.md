# 🖼️ Image Placeholder Guide

This folder contains all website images.

## Folder Structure

```
images/
├── hero/           ← Homepage hero background
├── gallery/        ← Portfolio gallery images
├── services/       ← Service card images
├── testimonials/   ← Client photos (square)
├── about/          ← Artist photo
└── brand/          ← Logo and social sharing image
```

## How to Replace Images

1. **Name your images** using clear names like `bridal-01.jpg`
2. **Ensure correct size** (see specs below)
3. **Place in the right folder** 
4. **Update `src/config/content.js`** with the new filename

## Image Specifications

| Folder | Size | Format | Notes |
|--------|------|--------|-------|
| hero/ | 1920x1080 | JPG/WebP | Landscape, main hero image |
| gallery/ | 800x1000 | JPG/WebP | Portrait, close-up bridal looks |
| services/ | 600x800 | JPG/WebP | Portrait, service illustrations |
| testimonials/ | 200x200 | JPG/WebP | Square, client headshots |
| about/ | 800x1000 | JPG/WebP | Portrait, artist photo |
| brand/ | Various | SVG/PNG | Logo & OG image |

## Example Naming Convention

```
gallery/
├── bridal-gujarati-01.jpg
├── bridal-south-indian-01.jpg
├── reception-glam-01.jpg
├── engagement-ring-ceremony-01.jpg
└── mehndi-colorful-01.jpg
```

## Tips for Best Results

- **Optimize images** before uploading (use tinypng.com or similar)
- **WebP format** gives best compression with quality
- **Keep file sizes** under 200KB each for faster loading
- **Use consistent lighting** across gallery images
