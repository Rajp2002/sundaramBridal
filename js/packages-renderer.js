import siteConfig from '../src/config/content.js';

/**
 * Packages Renderer
 * Dynamically renders engagement and sider packages with upgrade highlights.
 */

document.addEventListener('DOMContentLoaded', () => {
    const engagementContainer = document.querySelector('#pkg-engagement');
    const siderContainer = document.querySelector('#pkg-sider');

    if (engagementContainer && siteConfig.pricing.engagement) {
        renderPackagePanel(engagementContainer, siteConfig.pricing.engagement);
    }

    if (siderContainer && siteConfig.pricing.sider) {
        renderPackagePanel(siderContainer, siteConfig.pricing.sider);
    }
});

function renderPackagePanel(container, data) {
    const { sectionTitle, sectionSubtitle, items } = data;
    
    // Clear existing content (like the coming soon placeholder)
    container.innerHTML = '';

    // Create header
    const header = document.createElement('div');
    header.className = 'section__header';
    header.innerHTML = `
        <span class="eyebrow">${sectionTitle}</span>
        <h2 class="section-title">${sectionTitle}</h2>
        <p class="section-subtitle">${sectionSubtitle}</p>
    `;
    container.appendChild(header);

    // Create grid
    const grid = document.createElement('div');
    grid.className = 'pkg-grid';
    
    // Track seen features for highlighting
    let previousFeaturesMap = new Map();

    items.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = `pkg-card ${item.featured ? 'pkg-card--featured' : ''}`;
        
        if (item.badge) {
            const badge = document.createElement('div');
            badge.className = 'pkg-card__badge';
            badge.textContent = item.badge;
            card.appendChild(badge);
        }

        const cardHeader = document.createElement('div');
        cardHeader.className = 'pkg-card__header';
        cardHeader.innerHTML = `
            <div class="pkg-card__tier">${item.name}</div>
            <div class="pkg-card__price">${item.price}</div>
        `;
        card.appendChild(cardHeader);

        const featureList = document.createElement('ul');
        featureList.className = 'pkg-features';

        const currentFeaturesMap = new Map();

        item.features.forEach(feature => {
            const featureKey = feature.text.toLowerCase();
            const detailKey = (feature.detail || '').toLowerCase();
            
            // Check if it's an upgrade or new addition
            const isNew = !previousFeaturesMap.has(featureKey);
            const isUpgraded = !isNew && previousFeaturesMap.get(featureKey) !== detailKey;
            
            const li = document.createElement('li');
            li.className = 'pkg-feature';
            if (isNew || isUpgraded) {
                li.classList.add('pkg-feature--highlight');
            }

            let featureHTML = `<span class="pkg-feature__icon">✦</span>`;
            if (feature.detail) {
                featureHTML += `
                    <div>
                        <strong>${feature.text}</strong>
                        <ul class="pkg-sub">
                            <li>${feature.detail}</li>
                        </ul>
                    </div>
                `;
            } else {
                featureHTML += `<span>${feature.text}</span>`;
            }

            if (isNew && index > 0) {
                featureHTML += ` <span class="pkg-highlight-tag">New</span>`;
            } else if (isUpgraded) {
                featureHTML += ` <span class="pkg-highlight-tag">Upgrade</span>`;
            }

            li.innerHTML = featureHTML;
            featureList.appendChild(li);

            // Save for next tier comparison
            currentFeaturesMap.set(featureKey, detailKey);
        });

        card.appendChild(featureList);

        // CTA
        const cta = document.createElement('a');
        cta.href = `/contact.html?package=${sectionTitle.split(' ')[0].toLowerCase()}-${item.name.toLowerCase().replace(' ', '')}`;
        cta.className = `btn ${item.featured ? 'btn-primary' : 'btn-secondary'}`;
        cta.textContent = item.featured ? 'Book Now' : 'Enquire Now';
        card.appendChild(cta);

        grid.appendChild(card);
        
        // Update previous features for the next item in the list
        previousFeaturesMap = currentFeaturesMap;
    });

    container.appendChild(grid);
}
