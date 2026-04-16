/**
 * ============================================
 * SUNDARAM BRIDAL STUDIO - CONTENT CONFIG
 * ============================================
 * 
 * 📝 UPDATE THIS FILE to change all website content!
 * 
 * After making changes, just refresh your browser to see updates.
 * 
 * ============================================
 */

export const siteConfig = {

    // ==========================================
    // 🏢 BUSINESS INFORMATION
    // ==========================================

    businessName: 'Sundaram Bridal Studio',
    tagline: 'Transforming bridal visions into reality',

    // ==========================================
    // 📞 CONTACT INFORMATION
    // ==========================================

    contact: {
        phone: '+91 79840 17703',           // Display format
        phoneLink: '+917984017703',          // For tel: links (no spaces)

        whatsapp: '917984017703',            // Numbers only, with country code
        whatsappMessage: "Hi! I'm interested in bridal services.",  // Pre-filled message

        email: 'sundarambridal001@gmail.com',

        location: 'Surat, Gujarat, India',
        serviceArea: 'Surat & nearby areas in Gujarat',

        responseTime: 'Within 2 hours (9am - 9pm IST)',
    },

    // ==========================================
    // 📱 SOCIAL MEDIA
    // ==========================================

    social: {
        instagram: 'sundaram_bridal_studio',         // Just the username
        youtube: 'sundarambridal',           // Just the username
    },

    // ==========================================
    // 🖼️ IMAGES
    // ==========================================
    // 
    // Option 1: Use local images (recommended for production)
    //   Put images in /public/images/ folder
    //   Reference as: '/images/hero/main.jpg'
    //
    // Option 2: Use external URLs (current placeholders)
    //   Use full URL: 'https://example.com/image.jpg'
    //

    images: {
        // Fallback hero image (shown while videos load or if videos disabled)
        hero: '/images/hero/luxury_bridal_hero_highres.png',

        about: {
            artist: '/images/kinjal-london.jpg',
            philosophy: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
        },

        services: {
            bridalMakeup: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80',
            hairStyling: '/images/hero/traditional_hairstyling.png',
            sareeDraping: 'https://images.unsplash.com/photo-1610173826608-31f72c32e1ad?auto=format&fit=crop&w=600&q=80',
        },

        cta: '/images/hero/luxury_bridal_cta.png',
    },

    // ==========================================
    // 🎬 HERO VIDEOS (Slideshow)
    // ==========================================
    // 
    // Add your MP4 videos here. They will loop as a slideshow
    // with seamless crossfade transitions.
    //
    // Place videos in: public/videos/
    // Then reference as: '/videos/your-video.mp4'
    //
    // Example with local videos:
    //   heroVideos: [
    //     '/videos/bridal-look-1.mp4',
    //     '/videos/bridal-look-2.mp4',
    //     '/videos/ceremony.mp4',
    //   ],
    //

    heroVideos: {
        enabled: true,  // Set to false to use static image instead

        videos: [
            // Add your video paths here
            // '/videos/video1.mp4',
            // '/videos/video2.mp4',
            // '/videos/video3.mp4',
        ],

        // Transition settings
        transitionDuration: 1500,  // Crossfade duration in milliseconds

        // Fallback: If no videos, this image will be shown
        fallbackImage: '/images/hero/luxury_bridal_hero_highres.png',
    },

    // ==========================================
    // 🏠 HERO SECTION (Homepage)
    // ==========================================

    hero: {
        eyebrow: 'The Ateliér of Excellence',
        headline: 'The Art of <br>Timeless <br><i>Bridal Beauty</i>',
        subheadline: 'Elevating your presence with bespoke artistry that celebrates tradition and modernity in every brushstroke.',
        ctaPrimary: 'Schedule Consultation',
        ctaSecondary: 'View Portfolio',
    },

    // ==========================================
    // ⭐ TRUST BAR
    // ==========================================

    trustBar: [
        { icon: 'star', text: 'Rated 5★ on Google' },
        { icon: 'heart', text: '200+ Happy Brides' },
        { icon: 'award', text: 'As seen on WedMeGood' },
        { icon: 'check', text: 'A Decade of Artistry' },
    ],

    // ==========================================
    // ✨ USPs (Why Choose Us)
    // ==========================================

    usps: [
        {
            icon: '🎓',
            title: 'Certified Expertise',
            description: 'Trained at the prestigious The London College UK with specialized international techniques. Your look is in expert hands.',
        },
        {
            icon: '✨',
            title: 'Tailored to You',
            description: 'Every bride is unique. We customize your look based on your features, outfit, and personal style for a look that\'s authentically you.',
        },
        {
            icon: '💄',
            title: 'Premium Products',
            description: 'Exclusively using luxury international brands like Dior, NARS, and MAC to ensure a flawless, long-lasting finish for your special day.',
        },
    ],

    // ==========================================
    // 💰 PRICING
    // ==========================================
    // 
    // Pricing is divided into two sections:
    //   1. packages - Bundled bridal packages
    //   2. alaCarte - Individual services
    //

    pricing: {

        // ------------------------------------------
        // 📦 BRIDAL PACKAGES
        // ------------------------------------------
        // Complete packages for the bride

        packages: {
            sectionTitle: 'Bridal Packages',
            sectionSubtitle: 'Complete packages for your special day',

            items: {
                essential: {
                    name: 'Essential',
                    price: '₹12,000',
                    priceSuffix: '+',
                    badge: null,  // No badge
                    features: [
                        'HD Bridal Makeup',
                        'Professional Hairstyling',
                        'Saree / Lehenga Draping',
                        'Touch-up Kit',
                    ],
                    ctaText: 'Enquire Now',
                    ctaStyle: 'secondary',
                },

                premium: {
                    name: 'Premium',
                    price: '₹22,000',
                    priceSuffix: '+',
                    badge: '⭐ Popular',
                    featured: true,  // Highlighted card
                    features: [
                        'Everything in Essential',
                        'Trial Session Included',
                        'Airbrush Makeup Upgrade',
                        'Groom Basic Styling',
                        'Premium Product Line',
                    ],
                    ctaText: 'Book Now',
                    ctaStyle: 'primary',
                },

                platinum: {
                    name: 'Platinum',
                    price: '₹45,000',
                    priceSuffix: '+',
                    badge: '👑 Best Value',
                    features: [
                        'Everything in Premium',
                        '3 Complete Looks (Engagement + Wedding + Reception)',
                        'Pre-Bridal Spa Package',
                        'Mehndi Artist Coordination',
                        'Luxury Gift Kit',
                    ],
                    ctaText: 'Book Now',
                    ctaStyle: 'primary',
                },
            },
        },

        // ------------------------------------------
        // ✨ ENGAGEMENT PACKAGES
        // ------------------------------------------
        engagement: {
            sectionTitle: 'Engagement Packages',
            sectionSubtitle: 'Shine at your ring ceremony',
            items: [
                {
                    name: 'Tier 1',
                    price: '₹6,500',
                    features: [
                        { text: 'Makeup', detail: 'MAC' },
                        { text: 'International Hairstyling' },
                        { text: 'Hair Extensions' },
                        { text: 'Hair Accessories' },
                        { text: 'Eye Lashes' },
                        { text: 'Dupatta Draping' },
                        { text: 'Contact Lens' }
                    ]
                },
                {
                    name: 'Tier 2',
                    price: '₹7,500',
                    features: [
                        { text: 'Makeup', detail: 'Huda Beauty' },
                        { text: 'International Hairstyling' },
                        { text: 'Hair Extensions' },
                        { text: 'Hair Accessories' },
                        { text: 'Eye Lashes' },
                        { text: 'Dupatta Draping' },
                        { text: 'Contact Lens' }
                    ]
                },
                {
                    name: 'Tier 3',
                    price: '₹8,500',
                    features: [
                        { text: 'Makeup', detail: 'Bobbi Brown / NARS / Estée Lauder' },
                        { text: 'International Hairstyling' },
                        { text: 'Hair Extensions' },
                        { text: 'Hair Accessories', detail: 'Flowers and Crystal' },
                        { text: 'Eye Lashes' },
                        { text: 'Dupatta Draping' },
                        { text: 'Contact Lens' },
                        { text: 'Facial', detail: 'FYC Professional' }
                    ]
                },
                {
                    name: 'Tier 4',
                    price: '₹10,500',
                    featured: true,
                    badge: 'Highly Recommended',
                    features: [
                        { text: 'Makeup', detail: 'Dior / Laura Mercier' },
                        { text: 'International Hairstyling' },
                        { text: 'Hair Extensions' },
                        { text: 'Hair Accessories', detail: 'Flowers and Crystal' },
                        { text: 'Eye Lashes' },
                        { text: 'Dupatta Draping' },
                        { text: 'Contact Lens' },
                        { text: 'Facial', detail: 'O3+ Professional' },
                        { text: 'Glossy Finish' },
                        { text: 'Waxing', detail: 'Hands and Half Legs' }
                    ]
                }
            ]
        },

        // ------------------------------------------
        // 👗 SIDER PACKAGES
        // ------------------------------------------
        sider: {
            sectionTitle: 'Sider Packages',
            sectionSubtitle: 'Complete looks for your family & friends',
            items: [
                {
                    name: 'Tier 1',
                    price: '₹2,500',
                    features: [
                        { text: 'Makeup', detail: 'Kiko Milano' },
                        { text: 'Hairstyling', detail: 'Basic' }
                    ]
                },
                {
                    name: 'Tier 2',
                    price: '₹3,500',
                    features: [
                        { text: 'Makeup', detail: 'MAC / Huda' },
                        { text: 'Hairstyling', detail: 'Basic' }
                    ]
                },
                {
                    name: 'Tier 3',
                    price: '₹5,500',
                    features: [
                        { text: 'Makeup', detail: 'Bobbi Brown / Nars / Estée Lauder' },
                        { text: 'Hairstyling', detail: 'Basic' },
                        { text: 'Hair Extensions' },
                        { text: 'Dupatta Draping' }
                    ]
                },
                {
                    name: 'Tier 4',
                    price: '₹6,500',
                    features: [
                        { text: 'Makeup', detail: 'Dior / Laura Mercier' },
                        { text: 'Hairstyling' },
                        { text: 'Hair Extensions' },
                        { text: 'Eye Lashes' },
                        { text: 'Dupatta Draping' }
                    ]
                },
                {
                    name: 'Tier 5',
                    price: '₹8,500',
                    features: [
                        { text: 'Makeup', detail: 'Bobbi Brown / NARS / Estée Lauder' },
                        { text: 'Hairstyling' },
                        { text: 'Hair Extensions' },
                        { text: 'Hair Accessories', detail: 'Real Flowers, Crystal Brooch' },
                        { text: 'Eye Lashes' },
                        { text: 'Eyebrow Threading' },
                        { text: 'Contact Lens' },
                        { text: 'Facial', detail: 'FYC Professional' },
                        { text: 'Glossy Finish' },
                        { text: 'Waxing', detail: 'Hands and Half Legs' },
                        { text: 'Saree / Dupatta Draping' }
                    ]
                },
                {
                    name: 'Tier 6',
                    price: '₹10,500',
                    featured: true,
                    badge: 'Luxury Sider',
                    features: [
                        { text: 'Makeup', detail: 'Dior / Laura Mercier' },
                        { text: 'Hairstyling' },
                        { text: 'Hair Extensions' },
                        { text: 'Hair Accessories', detail: 'Real Flowers, Crystal Brooch' },
                        { text: 'Eye Lashes' },
                        { text: 'Eyebrow Threading' },
                        { text: 'Contact Lens' },
                        { text: 'Luxury Facial', detail: 'O3+ Professional' },
                        { text: 'Glossy Finish' },
                        { text: 'Waxing', detail: 'Hands and Half Legs + Full Face (Hot Wax)' },
                        { text: 'Saree / Dupatta Draping' }
                    ]
                }
            ]
        },

    },

    // ==========================================
    // 🖼️ GALLERY
    // ==========================================

    gallery: [
        // Bridal (16)
        { image: '/images/gallery/IMG_1186.jpg', caption: 'Classic Bridal Portrait', category: 'bridal' },
        { image: '/images/gallery/IMG_1553.jpg', caption: 'Traditional Saree Profile', category: 'bridal' },
        { image: '/images/gallery/IMG_1564.jpg', caption: 'Saree Draping Detail', category: 'bridal' },
        { image: '/images/gallery/IMG_1565.jpg', caption: 'Traditional Bridal Look', category: 'bridal' },
        { image: '/images/gallery/IMG_1757.jpg', caption: 'Yellow and Red Saree Look', category: 'bridal' },
        { image: '/images/gallery/IMG_1759.jpg', caption: 'Bright Bridal Bloom', category: 'bridal' },
        { image: '/images/gallery/IMG_1761.jpg', caption: 'Glowing Bridal Face', category: 'bridal' },
        { image: '/images/gallery/IMG_2648.jpg', caption: 'Royal Bridal Elegance', category: 'bridal' },
        { image: '/images/gallery/IMG_2652.jpg', caption: 'Bridal Gaze', category: 'bridal' },
        { image: '/images/gallery/IMG_2653.jpg', caption: 'Bridal Profile', category: 'bridal' },
        { image: '/images/gallery/IMG_2661.jpg', caption: 'Traditional Jewelry Detail', category: 'bridal' },
        { image: '/images/gallery/IMG_2663.jpg', caption: 'Bridal Saree Grace', category: 'bridal' },
        { image: '/images/gallery/IMG_2750.jpg', caption: 'Bridal Portrait', category: 'bridal' },
        { image: '/images/gallery/IMG_2751.jpg', caption: 'Bridal Elegance', category: 'bridal' },
        { image: '/images/gallery/IMG_2754.jpg', caption: 'Bridal Smile', category: 'bridal' },
        { image: '/images/gallery/IMG_2769.jpg', caption: 'Traditional Bride', category: 'bridal' },

        // Engagement (6)
        { image: '/images/gallery/IMG_0273.jpg', caption: 'Red and Green Lehenga Look', category: 'engagement' },
        { image: '/images/gallery/IMG_0316.jpg', caption: 'Elegant Engagement Pose', category: 'engagement' },
        { image: '/images/gallery/IMG_0326.jpg', caption: 'Radiant Engagement Smile', category: 'engagement' },
        { image: '/images/gallery/IMG_0355.jpg', caption: 'Stunning Engagement Look', category: 'engagement' },
        { image: '/images/gallery/IMG_1428.jpg', caption: 'Garden Saree Style', category: 'engagement' },
        { image: '/images/gallery/IMG_2619.jpg', caption: 'Engagement Glow', category: 'engagement' },

        // Reception (20)
        { image: '/images/gallery/IMG_0808.jpg', caption: 'Lavender Elegance', category: 'reception' },
        { image: '/images/gallery/IMG_0809.jpg', caption: 'Lavender Detail Shot', category: 'reception' },
        { image: '/images/gallery/IMG_1222.jpg', caption: 'Teal Reception Glam', category: 'reception' },
        { image: '/images/gallery/IMG_1238.jpg', caption: 'Glamorous Reception Look', category: 'reception' },
        { image: '/images/gallery/IMG_1239.jpg', caption: 'Reception Evening Glow', category: 'reception' },
        { image: '/images/gallery/IMG_2043.jpg', caption: 'Cream Bridal Elegance', category: 'reception' },
        { image: '/images/gallery/IMG_2044.jpg', caption: 'Radiant Reception Portrait', category: 'reception' },
        { image: '/images/gallery/IMG_2468.jpg', caption: 'Evening Reception Glam', category: 'reception' },
        { image: '/images/gallery/IMG_2469.jpg', caption: 'Reception Smile', category: 'reception' },
        { image: '/images/gallery/IMG_2470.jpg', caption: 'Reception Night Look', category: 'reception' },
        { image: '/images/gallery/IMG_2478.jpg', caption: 'Stunning Reception Pose', category: 'reception' },
        { image: '/images/gallery/IMG_2537.jpg', caption: 'Reception Elegance', category: 'reception' },
        { image: '/images/gallery/IMG_2539.jpg', caption: 'Modern Reception Gown', category: 'reception' },
        { image: '/images/gallery/IMG_2738.jpg', caption: 'Reception Glamour', category: 'reception' },
        { image: '/images/gallery/IMG_2739.jpg', caption: 'Reception Evening', category: 'reception' },
        { image: '/images/gallery/IMG_2787.jpg', caption: 'Reception Glow', category: 'reception' },
        { image: '/images/gallery/IMG_2788.jpg', caption: 'Reception Night', category: 'reception' },
        { image: '/images/gallery/IMG_2789.jpg', caption: 'Reception Portrait', category: 'reception' },

        // Hairstyle (18)
        { image: '/images/gallery/IMG_0345.jpg', caption: 'Dramatic Red Lehenga Flare', category: 'hairstyle' },
        { image: '/images/gallery/IMG_0483.jpg', caption: 'Natural Hair Styling', category: 'hairstyle' },
        { image: '/images/gallery/IMG_1182.jpg', caption: 'Floral Hair Artistry', category: 'hairstyle' },
        { image: '/images/gallery/IMG_1187.jpg', caption: 'Bridal Profile Detail', category: 'hairstyle' },
        { image: '/images/gallery/IMG_1226.jpg', caption: 'Intricate Updo Detail', category: 'hairstyle' },
        { image: '/images/gallery/IMG_1237.jpg', caption: 'Elegant Hair Ornament', category: 'hairstyle' },
        { image: '/images/gallery/IMG_1765.jpg', caption: 'Detailed Saree Drape & Hair', category: 'hairstyle' },
        { image: '/images/gallery/IMG_1768.jpg', caption: 'Stunning Floral Work', category: 'hairstyle' },
        { image: '/images/gallery/IMG_1783.jpg', caption: 'Engagement Hair Detail', category: 'hairstyle' },
        { image: '/images/gallery/IMG_2351.jpg', caption: 'Artistic Hairstyle', category: 'hairstyle' },
        { image: '/images/gallery/IMG_2480.jpg', caption: 'Modern Hair Styling', category: 'hairstyle' },
        { image: '/images/gallery/IMG_2621.jpg', caption: 'Side Profile Hair', category: 'hairstyle' },
        { image: '/images/gallery/IMG_2631.jpg', caption: 'Traditional Hair Detail', category: 'hairstyle' },
        { image: '/images/gallery/IMG_2650.jpg', caption: 'Engagement Hair', category: 'hairstyle' },
        { image: '/images/gallery/IMG_2657.jpg', caption: 'Ornate Hair Styling', category: 'hairstyle' },
        { image: '/images/gallery/IMG_2741.jpg', caption: 'Hairstyle Detail', category: 'hairstyle' },
        { image: '/images/gallery/IMG_2763.jpg', caption: 'Bridal Hairstyle', category: 'hairstyle' },

        // Saree Draping (12)
        { image: '/images/gallery/IMG_1246.jpg', caption: 'Sophisticated Saree Look', category: 'saree-draping' },
        { image: '/images/gallery/IMG_1271.jpg', caption: 'Professional Saree Drape', category: 'saree-draping' },
        { image: '/images/gallery/IMG_1272.jpg', caption: 'Elegant Saree Pleats', category: 'saree-draping' },
        { image: '/images/gallery/IMG_1273.jpg', caption: 'Perfect Saree Styling', category: 'saree-draping' },
        { image: '/images/gallery/IMG_1586.jpg', caption: 'Elegant Saree Draping', category: 'saree-draping' },
        { image: '/images/gallery/IMG_1587.jpg', caption: 'Traditional Grace', category: 'saree-draping' },
        { image: '/images/gallery/IMG_1589.jpg', caption: 'Saree View Detail', category: 'saree-draping' },
        { image: '/images/gallery/IMG_2035.jpg', caption: 'Traditional Fusion Look', category: 'saree-draping' },
        { image: '/images/gallery/IMG_2655.jpg', caption: 'Saree Draping Art', category: 'saree-draping' },
    ],

    // ==========================================
    // 💬 TESTIMONIALS
    // ==========================================

    testimonials: [
        {
            name: 'Priya Patel',
            event: 'Wedding, December 2025',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
            rating: 5,
            quote: "I felt like an absolute queen on my wedding day. The makeup lasted from morning until the last guest left, and I didn't have to worry about anything. Truly magical!",
        },
        {
            name: 'Ananya Shah',
            event: 'Wedding, November 2025',
            image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
            rating: 5,
            quote: "The home service was a blessing! Getting ready at home with my mom and sisters made my wedding morning so special. The saree draping was absolutely perfect.",
        },
        {
            name: 'Meera Desai',
            event: 'Complete Package, January 2026',
            image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80',
            rating: 5,
            quote: "For all three events—engagement, wedding, and reception—the looks were distinct and stunning. Professional, punctual, and incredibly talented. Highly recommend!",
        },
        {
            name: 'Sneha Rao',
            event: 'Engagement, February 2026',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
            rating: 5,
            quote: "Kinjal understands exactly what look works for your face. My engagement makeup was subtle yet glowing, exactly what I wanted for an afternoon event.",
        },
        {
            name: 'Ishani Mehta',
            event: 'Sider Package, March 2026',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80',
            rating: 5,
            quote: "Booked sider packages for my sisters and they were all thrilled! The team is so efficient and professional. Everyone looked stunning for the reception.",
        },
        {
            name: 'Riya Sharma',
            event: 'Wedding, April 2026',
            image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80',
            rating: 5,
            quote: "The attention to detail is incredible. From the jewelry setting to the final touch-up, everything was handled with so much care. Best bridal artist in Surat!",
        },
    ],

    // ==========================================
    // 👩‍🎨 ABOUT PAGE
    // ==========================================

    about: {
        artistName: 'Kinjal',

        headline: 'Crafting Radiant Brides Since 2020',

        intro: "Hello! I'm Kinjal, and for me, makeup artistry is so much more than a profession—it is a true calling.",

        story: [
            "My journey began in 2020, fueled by a passion for the transformative power of bridal services. To master the nuances of the craft, I traveled to London to train at the prestigious The London College UK. This international exposure allowed me to refine my techniques and bring a sophisticated, luxury perspective to traditional bridal beauty.",
            "Eventually, I felt the pull to return to my roots. I moved back to Surat to be with my family and established my own salon right here in the heart of the city. My goal was simple: to nurture my creative passion while utilizing my skills to serve the incredible women of my community.",
            "What sets my work apart is the joy I find in the details. I believe every bride deserves to look and feel as special as possible on her wedding day. My approach is about more than just applying makeup; it’s about creating a radiant, confident version of you that shines through every moment.",
            "When I'm not in the salon transforming brides, you'll likely find me exploring the latest global beauty trends or enjoying quality time with my family here in Surat.",
        ],

        stats: {
            yearsExperience: '10+',
            happyBrides: '200+',
            googleRating: '5.0',
            satisfactionRate: '100%',
        },

        philosophy: {
            headline: 'Beauty That\'s Authentically You',
            intro: "I don't believe in one-size-fits-all bridal looks. Every bride is unique—her features, her style, her story. My approach is deeply personal:",
            points: [
                {
                    title: 'Listen First',
                    description: 'I start every consultation by understanding your vision, your outfit, and your comfort level with makeup.',
                },
                {
                    title: 'Enhance, Don\'t Mask',
                    description: 'Your natural beauty is the canvas. My job is to highlight your best features, not hide them under layers of product.',
                },
                {
                    title: 'Comfort is Key',
                    description: 'Wedding days are long. I use techniques and products that ensure your look stays fresh from morning to midnight—comfortably.',
                },
            ],
        },

        credentials: [
            { icon: '🎓', title: 'The London College UK', description: 'Certified Professional Makeup Artist' },
            { icon: '⭐', title: 'WedMeGood', description: 'Featured Artist & Verified Vendor' },
            { icon: '🏆', title: 'Google Reviews', description: '5-Star Rated with 100+ Reviews' },
            { icon: '📰', title: 'Media Features', description: 'Featured in Surat Bride Magazine' },
        ],
    },

    // ==========================================
    // ❓ FAQ
    // ==========================================

    faq: [
        {
            question: 'How far in advance should I book?',
            answer: 'For wedding season dates (October - February), we recommend booking 2-3 months in advance. For off-peak dates, 1 month is usually sufficient.',
        },
        {
            question: 'Do you travel outside Surat?',
            answer: '- No we dont offer outside service',
        },
        {
            question: 'What is your payment policy?',
            answer: 'We require a 50% advance to confirm your booking. The remaining balance is due on the day of the event. We accept UPI, bank transfer, and cash.',
        },
        {
            question: 'What if I need to cancel or reschedule?',
            answer: '- We don\'t offer refund for cancellations. We do however offer free rescheduling if done seven days in advance. Subject to availability.',
        },
    ],

    // ==========================================
    // 🔍 SEO
    // ==========================================

    seo: {
        titleSuffix: ' | Sundaram Bridal Studio',
        defaultDescription: 'Luxury home bridal makeup services in Surat. HD & airbrush makeup, professional saree draping, and complete bridal packages. Rated 5★ on Google. Book your trial today!',
        keywords: 'bridal makeup artist surat, home bridal services surat, professional saree draping surat, best makeup artist surat, gujarati bridal makeup',
    },
};

// Helper to get WhatsApp link with custom message
export function getWhatsAppLink(customMessage = null) {
    const message = customMessage || siteConfig.contact.whatsappMessage;
    return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

// Helper to get full social URLs
export function getSocialUrl(platform) {
    const handles = siteConfig.social;
    switch (platform) {
        case 'instagram':
            return `https://instagram.com/${handles.instagram}`;
        case 'youtube':
            return `https://youtube.com/${handles.youtube}`;
        default:
            return '#';
    }
}

export default siteConfig;
