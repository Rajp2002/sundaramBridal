# 🚀 Quick Start Content Update
For a full technical overview, check out the [README.md](file:///Users/rajpatel/Projects/Bridal studio website /sundaram-bridal/README.md).

---
## Step 1: Open the Config File
Open this file in any text editor:
```
src/config/content.js
```

## Step 2: Update These Key Items

### 📞 Contact Info (Lines 24-36)
```javascript
contact: {
  phone: '+91 98765 43210',        // ← Your phone
  whatsapp: '919876543210',        // ← WhatsApp (no +, no spaces)
  email: 'hello@example.com',      // ← Your email
}
```

### 💰 Package Prices (Lines 140-180)
```javascript
essential: { price: '₹12,000', ... }  // ← Change price
premium: { price: '₹22,000', ... }    // ← Change price  
platinum: { price: '₹45,000', ... }   // ← Change price
```

### 📱 Social Media (Lines 44-48)
```javascript
social: {
  instagram: 'yourhandle',    // ← Your Instagram
  facebook: 'yourpage',       // ← Your Facebook
}
```

## Step 3: Replace Images

1. Add your images to: `public/images/`
2. Update image paths in `content.js` → `images` section

Example:
```javascript
images: {
  hero: '/images/hero/your-hero.jpg',  // ← Local image
}
```

## Step 4: Preview Changes
```bash
npm run dev
```
Open http://localhost:3000 to see your changes!

---

## 📁 File Locations

| What to Update | File |
|----------------|------|
| All content | `src/config/content.js` |
| Colors/fonts | `css/base/variables.css` |
| Images | `public/images/` folder |

---

## Need Help?
See `CONTENT_GUIDE.md` for detailed instructions.
