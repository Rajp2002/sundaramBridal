# 📝 Content Update Guide - Sundaram Bridal Studio

This guide shows you exactly where to update all text, images, and pricing on the website.
For a technical overview of the project architecture and features, see the [README.md](file:///Users/rajpatel/Projects/Bridal studio website /sundaram-bridal/README.md).

---

## 🔧 Quick Reference: Config File

**Most content can be updated in one file:**
```
src/config/content.js
```

After updating `content.js`, the website will automatically reflect your changes (just refresh).

---

## 📞 Contact Information

**File:** `src/config/content.js` → `contactInfo` section

| Field | Current Value | What to Change |
|-------|---------------|----------------|
| Phone | +91 98765 43210 | Your real phone number |
| WhatsApp | 9876543210 | WhatsApp number (numbers only) |
| Email | hello@sundarambridal.com | Business email |
| Instagram | sundarambridal | Instagram username |
| Facebook | sundarambridal | Facebook page name |

---

## 💰 Pricing

**File:** `src/config/content.js` → `packages` section

```javascript
packages: {
  essential: {
    price: '₹12,000',  // ← Change this
    features: [...]     // ← Add/remove features
  },
  premium: {
    price: '₹22,000',
    features: [...]
  },
  platinum: {
    price: '₹45,000',
    features: [...]
  }
}
```

### À la Carte Services
Also in `content.js` → `services` section

---

## 🖼️ Images

### Where to Put Your Images
Place all images in the `public/images/` folder:

```
public/
└── images/
    ├── hero/
    │   └── hero-main.jpg        ← Main homepage hero (1920x1080px)
    │
    ├── gallery/
    │   ├── bridal-01.jpg        ← Gallery images (800x1000px)
    │   ├── bridal-02.jpg
    │   ├── reception-01.jpg
    │   └── ...
    │
    ├── services/
    │   ├── bridal-makeup.jpg    ← Service card images (600x800px)
    │   ├── hair-styling.jpg
    │   ├── saree-draping.jpg
    │   └── pre-bridal.jpg
    │
    ├── testimonials/
    │   ├── bride-01.jpg         ← Client photos (200x200px, square)
    │   ├── bride-02.jpg
    │   └── bride-03.jpg
    │
    ├── about/
    │   └── artist.jpg           ← Your photo (800x1000px)
    │
    └── brand/
        ├── logo.svg             ← Logo (if you have one)
        └── og-image.jpg         ← Social sharing image (1200x630px)
```

### Image Specifications

| Image Type | Recommended Size | Format |
|------------|------------------|--------|
| Hero | 1920 x 1080 px | JPG/WebP |
| Gallery | 800 x 1000 px | JPG/WebP |
| Services | 600 x 800 px | JPG/WebP |
| Testimonials | 200 x 200 px (square) | JPG/WebP |
| About Artist | 800 x 1000 px | JPG/WebP |

> 💡 **Tip:** Use WebP format for smaller file sizes and faster loading.

---

## 🎬 Hero Video Slideshow

You can replace the hero image with a slideshow of videos that loop with seamless crossfade transitions.

### Step 1: Add Your Videos
Place MP4 files in the `public/videos/` folder:
```
public/videos/
├── bridal-look-1.mp4
├── ceremony-highlights.mp4
└── getting-ready.mp4
```

### Step 2: Configure Videos
Open `index.html` and find the script at the bottom:

```javascript
window.heroVideos = [
  '/videos/bridal-look-1.mp4',
  '/videos/ceremony-highlights.mp4',
  '/videos/getting-ready.mp4',
];
```

### Video Recommendations

| Setting | Recommendation |
|---------|----------------|
| Format | MP4 (H.264 codec) |
| Resolution | 1920x1080 (Full HD) |
| Duration | 10-30 seconds each |
| File Size | Under 10MB per video |

### Transition Speed
In `src/config/content.js`, you can adjust crossfade duration:
```javascript
heroVideos: {
  transitionDuration: 1500,  // Crossfade time in ms
}
```

---

## ✍️ Text Content

### Homepage Sections

**File:** `src/config/content.js`

#### Hero Section
```javascript
hero: {
  eyebrow: 'Luxury Bridal Makeup in Surat',
  headline: 'Transforming Your Bridal Vision into Reality',
  subheadline: 'Experience the art of luxury bridal beauty...',
  ctaPrimary: 'Book Your Consultation',
  ctaSecondary: 'View Our Work'
}
```

#### USP Cards (Why Choose Us)
```javascript
usps: [
  {
    icon: '🎓',
    title: 'Certified Expertise',
    description: 'Trained at the prestigious...'
  },
  // ... more USPs
]
```

---

## 👰 Testimonials

**File:** `src/config/content.js` → `testimonials` section

```javascript
testimonials: [
  {
    name: 'Priya Patel',
    event: 'Wedding, December 2025',
    image: '/images/testimonials/bride-01.jpg',
    rating: 5,
    quote: 'I felt like an absolute queen...'
  },
  // Add more testimonials
]
```

---

## 📄 About Page Content

**File:** `src/config/content.js` → `about` section

- Artist name and bio
- Years of experience
- Number of brides served
- Credentials and certifications
- Philosophy text

---

## 🎨 Brand Colors (Optional)

If you want to change colors, edit:
**File:** `css/base/variables.css`

```css
:root {
  --color-gold: #D4AF37;        /* Primary gold */
  --color-blush: #FADADD;       /* Soft pink */
  --color-charcoal: #333333;    /* Dark text */
}
```

---

## ✅ Checklist Before Launch

- [ ] Update phone number
- [ ] Update WhatsApp number  
- [ ] Update email address
- [ ] Update social media links
- [ ] Replace hero image
- [ ] Add 6-12 gallery photos
- [ ] Add artist photo
- [ ] Update testimonials with real reviews
- [ ] Verify pricing is correct
- [ ] Update studio name (if different)
- [ ] Test all contact links work

---

## 🚀 How to Preview Changes

1. Open Terminal in the project folder
2. Run: `npm run dev`
3. Open: http://localhost:3000
4. Changes appear automatically when you save files!

---

## ❓ Need Help?

If you're unsure about any changes, the safest approach is:
1. Make a copy of the file before editing
2. Change one thing at a time
3. Refresh the browser to see changes
4. If something breaks, restore from the copy
