/**
 * Gallery JavaScript - Sundaram Bridal Studio
 * Filtering and Lightbox functionality
 */
import { siteConfig } from './content-loader.js';

// =========================================
// Gallery Rendering
// =========================================
function renderGallery() {
    const galleryGrid = document.querySelector('.gallery__grid');
    if (!galleryGrid) return;

    // Clear existing hardcoded items
    galleryGrid.innerHTML = '';

    const galleryItems = siteConfig.gallery;

    galleryItems.forEach(item => {
        // Human-readable category for display
        const displayCategory = item.category
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

        const itemHtml = `
            <div class="gallery__item" data-category="${item.category}">
                <img src="${item.image}" alt="${item.caption}" class="gallery__image" loading="lazy">
                <div class="gallery__overlay">
                    <span class="gallery__caption">${item.caption}</span>
                    <span class="gallery__category">${displayCategory}</span>
                </div>
                <div class="gallery__zoom">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        <line x1="11" y1="8" x2="11" y2="14"></line>
                        <line x1="8" y1="11" x2="14" y2="11"></line>
                    </svg>
                </div>
            </div>
        `;
        galleryGrid.insertAdjacentHTML('beforeend', itemHtml);
    });
}

// =========================================
// Gallery Filtering
// =========================================
function initGalleryFilters() {
    const filterButtons = document.querySelectorAll('.gallery__filter');
    const galleryItems = document.querySelectorAll('.gallery__item');

    if (!filterButtons.length || !galleryItems.length) return;

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('is-active'));
            button.classList.add('is-active');

            // Filter items
            galleryItems.forEach(item => {
                const category = item.dataset.category;

                if (filter === 'all' || category === filter) {
                    item.style.display = '';
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.9)';

                    // Animate in
                    requestAnimationFrame(() => {
                        item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    });
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// =========================================
// Lightbox
// =========================================
class Lightbox {
    constructor() {
        this.lightbox = null;
        this.currentIndex = 0;
        this.images = [];
        this.isOpen = false;

        this.init();
    }

    init() {
        // Create lightbox HTML
        this.createLightbox();

        // Get all gallery items
        this.images = Array.from(document.querySelectorAll('.gallery__item'));

        // Add click handlers
        this.images.forEach((item, index) => {
            item.addEventListener('click', () => this.open(index));
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!this.isOpen) return;

            if (e.key === 'Escape') this.close();
            if (e.key === 'ArrowLeft') this.prev();
            if (e.key === 'ArrowRight') this.next();
        });
    }

    createLightbox() {
        const html = `
      <div class="lightbox" id="lightbox">
        <button class="lightbox__close" aria-label="Close lightbox">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <button class="lightbox__nav lightbox__nav--prev" aria-label="Previous image">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        
        <div class="lightbox__content">
          <img src="" alt="" class="lightbox__image">
          <div class="lightbox__caption">
            <div class="lightbox__title"></div>
            <div class="lightbox__category"></div>
          </div>
        </div>
        
        <button class="lightbox__nav lightbox__nav--next" aria-label="Next image">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
        
        <div class="lightbox__share">
          <a href="#" class="btn btn-whatsapp btn-sm" id="lightboxShare" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Share
          </a>
        </div>
      </div>
    `;

        document.body.insertAdjacentHTML('beforeend', html);
        this.lightbox = document.getElementById('lightbox');

        // Event listeners
        this.lightbox.querySelector('.lightbox__close').addEventListener('click', () => this.close());
        this.lightbox.querySelector('.lightbox__nav--prev').addEventListener('click', () => this.prev());
        this.lightbox.querySelector('.lightbox__nav--next').addEventListener('click', () => this.next());

        // Close on backdrop click
        this.lightbox.addEventListener('click', (e) => {
            if (e.target === this.lightbox) this.close();
        });

        // Touch swipe support
        this.initTouchSwipe();
    }

    initTouchSwipe() {
        let touchStartX = 0;
        let touchEndX = 0;

        this.lightbox.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        this.lightbox.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        }, { passive: true });

        const handleSwipe = () => {
            const diff = touchStartX - touchEndX;
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    this.next();
                } else {
                    this.prev();
                }
            }
        };

        this.handleSwipe = handleSwipe;
    }

    open(index) {
        this.currentIndex = index;
        this.updateImage();
        this.lightbox.classList.add('is-open');
        this.isOpen = true;
        document.body.style.overflow = 'hidden';
    }

    close() {
        this.lightbox.classList.remove('is-open');
        this.isOpen = false;
        document.body.style.overflow = '';
    }

    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.updateImage();
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.updateImage();
    }

    updateImage() {
        const item = this.images[this.currentIndex];
        const img = item.querySelector('img');
        const caption = item.querySelector('.gallery__caption');
        const category = item.querySelector('.gallery__category');

        const lightboxImg = this.lightbox.querySelector('.lightbox__image');
        const lightboxTitle = this.lightbox.querySelector('.lightbox__title');
        const lightboxCategory = this.lightbox.querySelector('.lightbox__category');
        const shareBtn = this.lightbox.querySelector('#lightboxShare');

        // Get high-res version of image
        const imgSrc = img.src.replace('w=600', 'w=1200');

        lightboxImg.src = imgSrc;
        lightboxImg.alt = img.alt;
        lightboxTitle.textContent = caption?.textContent || img.alt;
        lightboxCategory.textContent = category?.textContent || '';

        // Update share link
        const shareText = encodeURIComponent(`Check out this beautiful bridal look from Sundaram Bridal Studio! ${window.location.href}`);
        shareBtn.href = `https://wa.me/?text=${shareText}`;
    }
}

// =========================================
// Initialize
// =========================================
function initGallery() {
    renderGallery();
    initGalleryFilters();

    // Only init lightbox if gallery items exist
    if (document.querySelectorAll('.gallery__item').length) {
        new Lightbox();
    }
}

// Run when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGallery);
} else {
    initGallery();
}

export { initGallery };
