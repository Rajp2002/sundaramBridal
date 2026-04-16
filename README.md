# ✨ Sundaram Bridal Studio - Digital Experience

![Sundaram Bridal Studio](https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1920&q=80)

## 🌟 Overview

**Sundaram Bridal Studio** is a premium, high-performance web platform designed for a luxury bridal makeup artistry business based in Surat, India. The application provides an elegant, immersive experience for potential brides to explore services, view professional portfolios, and book consultations.

Built with a focus on **visual excellence**, **mobile-first responsiveness**, and **lightning-fast performance**, this project serves as a digital storefront that reflects the sophistication and artistry of the Sundaram brand.

---

## 🚀 Core Features

### 🎬 Immersive Hero Experience
*   **Dual-Mode Background**: Support for both high-resolution static imagery and cinematic video loops.
*   **Seamless Transitions**: Smooth crossfade transitions between hero content for a premium feel.
*   **Aesthetic Typography**: Curated font pairings (Cormorant Garamond & Montserrat) for a luxury editorial look.

### 🍱 Dynamic Content Management
*   **Centralized Configuration**: All website content (text, prices, features, testimonials) is managed through `src/config/content.js`.
*   **Zero-Database Architecture**: High performance and low maintenance by using a JSON-based content loader.
*   **Localized Pricing**: Easily updateable package tiers for Essential, Premium, and Platinum services.

### 👰 Professional Showcase
*   **Interactive Gallery**: A masonry-style gallery to showcase bridal transformations.
*   **Testimonial Slider**: Real client feedback with star ratings and photos to build trust.
*   **USP System**: Clearly defined Unique Selling Propositions (Certified Expertise, Tailored Looks).

### 📱 Conversion-Focused Design
*   **WhatsApp Integration**: Floating "Chat with us" button and direct "Book Now" links.
*   **Mobile Optimized**: Fully responsive navigation and touch-friendly interactive elements.
*   **Lead Generation**: Integrated booking flows and contact forms.

---

## 🛠️ Tech Stack

### Frontend Core
*   **HTML5**: Semantic structure for superior SEO and accessibility.
*   **Vanilla CSS3**: Custom design system using CSS Variables (Custom Properties) for global styling and easy branding updates.
*   **JavaScript (ES6+)**: Clean, module-based logic for interactivity and content loading.

### Tooling & Build
*   **Vite**: Next-generation frontend tooling for instant HMR (Hot Module Replacement) and optimized production builds.
*   **Lucide Icons**: Lightweight, consistent iconography.
*   **Google Fonts API**: High-quality typography integration.

---

## 📁 Directory Structure

```text
├── css/                   # Stylesheets
│   ├── base/              # Reset, Typography, Variables
│   ├── components/        # Reusable UI elements (cards, buttons, etc.)
│   ├── layouts/           # Page sections (hero, footer, nav)
│   └── styles.css         # Main entry point for CSS
├── js/                    # JavaScript Modules
│   ├── main.js            # Core app logic and event listeners
│   ├── content-loader.js  # Logic to inject config content into DOM
│   └── testimonials.js    # Specialized logic for the slider
├── public/                # Static Assets
│   ├── images/            # Photos (hero, gallery, testimonials)
│   ├── videos/            # Loopable background videos
│   └── icons/             # SVGs and Favicons
├── src/                   # Source Config
│   └── config/
│       └── content.js     # THE HEART: Update all website text/pricing here
├── index.html             # Homepage
├── about.html             # About the Artist
├── services.html          # Detailed Packages
├── gallery.html           # Portfolio
└── contact.html           # Booking/Inquiry
```

---

## 🛠️ Development & Workflow

### Prerequisites
*   **Node.js** (v18 or higher recommended)
*   **NPM** (installed with Node)

### Getting Started
1.  **Install dependencies**:
    ```bash
    npm install
    ```
2.  **Start development server**:
    ```bash
    npm run dev
    ```
    *Build will be available at `http://localhost:3000`*

3.  **Build for production**:
    ```bash
    npm run build
    ```
    *Optimized files will be generated in the `/dist` directory.*

---

## ✍️ Content Update Guide

This project is designed so that non-technical users can update content easily.

1.  Navigate to `src/config/content.js`.
2.  Modify the object properties (e.g., change `price: '₹12,000'` to `price: '₹15,000'`).
3.  The changes will automatically reflect across the entire site.

> [!TIP]
> Always check `CONTENT_GUIDE.md` for detailed instructions on image dimensions and video optimization.

---

## 📈 SEO & Performance

*   **Meta Strategy**: Comprehensive Open Graph and Twitter card meta tags for social sharing.
*   **Structured Data**: Integrated `Schema.org` (JSON-LD) for Beauty Salon snippets in Google search.
*   **Preloading**: Critical assets (logo, hero image) are preloaded for better LCP (Largest Contentful Paint).
*   **Lazy Loading**: Native browser lazy loading for all gallery and testimonial images.

---

## 📄 License & Credits

© 2026 **Sundaram Bridal Studio**. All rights reserved.
Developed with ❤️ for the most beautiful brides.
