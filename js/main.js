/**
 * Main JavaScript - Sundaram Bridal Studio
 * Core functionality: Header, Navigation, Scroll behaviors
 */

// Import content loader for dynamic content from config
import { initContent } from './content-loader.js';

// =========================================
// DOM Elements
// =========================================
const header = document.getElementById('header');
const nav = document.getElementById('nav');
const menuToggle = document.getElementById('menuToggle');
const overlay = document.getElementById('overlay');

// =========================================
// Header Scroll Behavior
// =========================================
let lastScrollY = 0;
let ticking = false;

function updateHeader() {
  const scrollY = window.scrollY;

  // Change height after scrolling past hero
  if (scrollY > 100) {
    header.classList.add('header--scrolled');
  } else {
    header.classList.remove('header--scrolled');
  }

  // Hide/show header on scroll direction
  if (scrollY > 300) {
    if (scrollY > lastScrollY && scrollY - lastScrollY > 10) {
      // Scrolling down - hide header
      header.classList.add('header--hidden');
    } else if (lastScrollY - scrollY > 10) {
      // Scrolling up - show header
      header.classList.remove('header--hidden');
    }
  } else {
    header.classList.remove('header--hidden');
  }

  lastScrollY = scrollY;
  ticking = false;
}

function onScroll() {
  if (!ticking) {
    requestAnimationFrame(updateHeader);
    ticking = true;
  }
}

// =========================================
// Mobile Navigation
// =========================================
function toggleMobileMenu() {
  const isOpen = nav.classList.contains('is-open');

  if (isOpen) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
}

function openMobileMenu() {
  nav.classList.add('is-open');
  menuToggle.classList.add('is-active');
  overlay.classList.add('is-visible');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  nav.classList.remove('is-open');
  menuToggle.classList.remove('is-active');
  overlay.classList.remove('is-visible');
  document.body.style.overflow = '';
}

// =========================================
// Smooth Scroll
// =========================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerHeight = header.offsetHeight;
        const targetPosition = target.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Close mobile menu if open
        closeMobileMenu();
      }
    });
  });
}

// =========================================
// Intersection Observer for Animations
// =========================================
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.usp-card, .service-card, .testimonial-card, .package-card, .gallery__item');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach((el) => {
      el.classList.add('reveal-on-scroll');
      observer.observe(el);
    });
  } else {
    // Fallback if IntersectionObserver is not supported
    animatedElements.forEach(el => el.classList.add('is-revealed'));
  }
}

// =========================================
// Analytics Event Tracking
// =========================================
function trackEvent(eventName, eventData = {}) {
  // Google Analytics 4 tracking
  if (typeof gtag === 'function') {
    gtag('event', eventName, eventData);
  }

  // Console log for development
  console.log('Event:', eventName, eventData);
}

function initAnalytics() {
  // Track CTA clicks
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
      trackEvent('cta_click', {
        button_text: btn.textContent.trim(),
        page: window.location.pathname
      });
    });
  });

  // Track WhatsApp clicks
  document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.addEventListener('click', () => {
      trackEvent('whatsapp_click', {
        page: window.location.pathname
      });
    });
  });

  // Track scroll depth
  let maxScroll = 0;
  const scrollDepths = [25, 50, 75, 100];

  window.addEventListener('scroll', () => {
    const scrollPercent = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    );

    scrollDepths.forEach(depth => {
      if (scrollPercent >= depth && maxScroll < depth) {
        maxScroll = depth;
        trackEvent('scroll_depth', { depth: depth + '%' });
      }
    });
  }, { passive: true });
}

// =========================================
// Initialize
// =========================================
function init() {
  // Event listeners
  window.addEventListener('scroll', onScroll, { passive: true });

  if (menuToggle) {
    menuToggle.addEventListener('click', toggleMobileMenu);
  }

  if (overlay) {
    overlay.addEventListener('click', closeMobileMenu);
  }

  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      closeMobileMenu();
    }
  });

  // Close menu on nav link click
  nav?.querySelectorAll('.header__nav-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Initialize features
  initSmoothScroll();
  initScrollAnimations();
  initAnalytics();

  // Check initial scroll position
  updateHeader();

  console.log('Sundaram Bridal Studio - Loaded ✨');
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Export for module usage
export { trackEvent };
