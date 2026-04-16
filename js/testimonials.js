/*
 * ============================================
 * TESTIMONIAL SLIDER LOGIC
 * ============================================
 */

class TestimonialSlider {
    constructor() {
        this.track = document.querySelector('.testimonials-track');
        if (!this.track) return;

        this.cards = Array.from(this.track.children);
        this.dotsContainer = document.querySelector('.slider-dots');
        this.currentIndex = 0;
        this.cardWidth = 0;
        this.gap = 0;
        this.visibleCards = 1;
        this.interval = null;
        this.isPaused = false;

        this.init();
    }

    init() {
        this.createDots();
        this.updateDimensions();
        this.addEventListeners();
        this.startAutoSlide();
        this.updateActiveCard();

        // Handle initial window size
        window.addEventListener('resize', () => {
            this.updateDimensions();
            this.goToSlide(this.currentIndex);
        });
    }

    createDots() {
        if (!this.dotsContainer) return;
        
        // Clear existing dots
        this.dotsContainer.innerHTML = '';
        
        // Calculate number of dots (total cards - visible + 1)
        const dotCount = this.cards.length;
        
        for (let i = 0; i < dotCount; i++) {
            const dot = document.createElement('button');
            dot.classList.add('slider-dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => this.goToSlide(i));
            this.dotsContainer.appendChild(dot);
        }
        
        this.dots = Array.from(this.dotsContainer.children);
    }

    updateDimensions() {
        const firstCard = this.cards[0];
        if (!firstCard) return;

        this.cardWidth = firstCard.offsetWidth;
        const style = window.getComputedStyle(this.track);
        this.gap = parseInt(style.gap) || 0;

        // Determine visible cards based on screen width
        const width = window.innerWidth;
        if (width >= 1024) {
            this.visibleCards = 3;
        } else if (width >= 768) {
            this.visibleCards = 2;
        } else {
            this.visibleCards = 1;
        }
    }

    addEventListeners() {
        // Pause on hover
        this.track.addEventListener('mouseenter', () => this.pause());
        this.track.addEventListener('mouseleave', () => this.resume());

        // Touch events for mobile swiping
        let startX = 0;
        let isDragging = false;

        this.track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
            this.pause();
        });

        this.track.addEventListener('touchend', (e) => {
            if (!isDragging) return;
            const endX = e.changedTouches[0].clientX;
            const diff = startX - endX;

            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    this.next();
                } else {
                    this.prev();
                }
            }
            isDragging = false;
            this.resume();
        });
    }

    startAutoSlide() {
        this.interval = setInterval(() => {
            if (!this.isPaused) {
                this.next();
            }
        }, 5000);
    }

    pause() {
        this.isPaused = true;
    }

    resume() {
        this.isPaused = false;
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.cards.length;
        this.goToSlide(this.currentIndex);
    }

    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.cards.length) % this.cards.length;
        this.goToSlide(this.currentIndex);
    }

    goToSlide(index) {
        this.currentIndex = index;
        const offset = (this.cardWidth + this.gap) * this.currentIndex;
        this.track.style.transform = `translateX(-${offset}px)`;
        
        this.updateDots();
        this.updateActiveCard();
    }

    updateDots() {
        if (!this.dots) return;
        this.dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === this.currentIndex);
        });
    }

    updateActiveCard() {
        this.cards.forEach((card, i) => {
            card.classList.toggle('active', i === this.currentIndex);
        });
    }
}

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', () => {
    new TestimonialSlider();
});
