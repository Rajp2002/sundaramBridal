/**
 * Content Loader - Sundaram Bridal Studio
 * 
 * This module loads content from the config file and applies it to the page.
 * This allows all content to be managed from a single file (content.js)
 */

import siteConfig, { getWhatsAppLink, getSocialUrl } from '../src/config/content.js';

/**
 * Initialize content on page load
 */
export function initContent() {
    updateContactInfo();
    updateWhatsAppLinks();
    updateSocialLinks();
    updateHeroContent();
    updateTrustBar();
    updateUSPs();

    // Log for debugging
    console.log('Content loaded from config ✓');
}

/**
 * Updates hero section content
 */
function updateHeroContent() {
    const { hero } = siteConfig;
    if (!hero) return;

    const eyebrow = document.querySelector('[data-content="hero.eyebrow"]');
    if (eyebrow) eyebrow.textContent = hero.eyebrow;

    const headline = document.querySelector('[data-content="hero.headline"]');
    if (headline) headline.innerHTML = hero.headline;

    const subheadline = document.querySelector('[data-content="hero.subheadline"]');
    if (subheadline) subheadline.textContent = hero.subheadline;

    const ctaPrimary = document.querySelector('[data-content="hero.ctaPrimary"]');
    if (ctaPrimary) ctaPrimary.textContent = hero.ctaPrimary;

    const ctaSecondary = document.querySelector('[data-content="hero.ctaSecondary"]');
    if (ctaSecondary) ctaSecondary.textContent = hero.ctaSecondary;
}

/**
 * Renders the trust bar items
 */
function updateTrustBar() {
    const container = document.getElementById('trustBarList');
    if (!container || !siteConfig.trustBar) return;

    container.innerHTML = siteConfig.trustBar.map(item => `
        <div class="trust-bar__item">
            <svg class="trust-bar__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                ${getIconPath(item.icon)}
            </svg>
            <span>${item.text}</span>
        </div>
    `).join('');
}

/**
 * Renders the USP cards
 */
function updateUSPs() {
    const container = document.getElementById('uspGrid');
    if (!container || !siteConfig.usps) return;

    container.innerHTML = siteConfig.usps.map(usp => `
        <div class="usp-card">
            <div class="usp-card__icon">
                <span style="font-size: 2.5rem;">${usp.icon}</span>
            </div>
            <h3 class="usp-card__title">${usp.title}</h3>
            <p class="usp-card__text">${usp.description}</p>
        </div>
    `).join('');
}

/**
 * Updates all contact information on the page
 */
function updateContactInfo() {
    const { contact } = siteConfig;

    // Phone numbers
    document.querySelectorAll('[data-content="phone"]').forEach(el => {
        el.textContent = contact.phone;
    });

    document.querySelectorAll('[data-content="phone-link"]').forEach(el => {
        el.href = `tel:${contact.phoneLink}`;
        if (!el.hasAttribute('data-no-text')) {
            el.textContent = contact.phone;
        }
    });

    // Email
    document.querySelectorAll('[data-content="email"]').forEach(el => {
        el.textContent = contact.email;
    });

    document.querySelectorAll('[data-content="email-link"]').forEach(el => {
        el.href = `mailto:${contact.email}`;
        if (!el.hasAttribute('data-no-text')) {
            el.textContent = contact.email;
        }
    });

    // Location
    document.querySelectorAll('[data-content="location"]').forEach(el => {
        el.textContent = contact.location;
    });

    document.querySelectorAll('[data-content="service-area"]').forEach(el => {
        el.textContent = contact.serviceArea;
    });
}

/**
 * Updates all WhatsApp links with the correct number and message
 */
function updateWhatsAppLinks() {
    const defaultLink = getWhatsAppLink();

    document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
        // Check for custom message in data attribute
        const customMessage = link.dataset.waMessage;
        link.href = customMessage ? getWhatsAppLink(customMessage) : defaultLink;
    });
}

/**
 * Updates all social media links
 */
function updateSocialLinks() {
    document.querySelectorAll('[data-social]').forEach(link => {
        const platform = link.dataset.social;
        link.href = getSocialUrl(platform);
    });
}

/**
 * Helper to get SVG paths for common icons
 */
function getIconPath(iconName) {
    const paths = {
        star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',
        heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',
        award: '<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>',
        check: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>'
    };
    return paths[iconName] || paths.check;
}

/**
 * Get config value (for external use)
 */
export function getConfig(path) {
    return path.split('.').reduce((obj, key) => obj?.[key], siteConfig);
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initContent);
} else {
    initContent();
}

export { siteConfig, getWhatsAppLink, getSocialUrl };

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initContent);
} else {
    initContent();
}
