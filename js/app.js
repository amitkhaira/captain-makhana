// ============================================
// APP.JS - Main Application Controller
// ============================================

import { THEME, NAVIGATION, SECTIONS } from './constants.js';
import LoaderManager from './loader.js';
import ParallaxManager from './parallax.js';
import FlavorManager from './flavors.js';

class CaptainMakhanaApp {
    constructor() {
        this.loader = null;
        this.parallax = null;
        this.flavorManager = null;
        this.currentTheme = THEME.defaultMode;
    }

    async init() {
        // Show loader and simulate loading
        this.loader = new LoaderManager();
        await this.loader.init();

        // Initialize parallax
        this.parallax = new ParallaxManager();
        this.parallax.init(0);

        // Initialize flavor manager
        this.flavorManager = new FlavorManager(this.parallax);
        this.flavorManager.init(0);

        // Setup other features
        this.setupNavigation();
        this.setupThemeToggle();
        this.setupScrollAnimations();
        this.setupFAQ();
        this.setupSmoothScroll();
    }

    setupNavigation() {
        const navbar = document.getElementById('navbar');
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');

        // Sticky navigation on scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY > NAVIGATION.stickyOffset) {
                navbar?.classList.add('sticky');
            } else {
                navbar?.classList.remove('sticky');
            }
        });

        // Mobile menu toggle
        navToggle?.addEventListener('click', () => {
            navMenu?.classList.toggle('active');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle?.contains(e.target) && !navMenu?.contains(e.target)) {
                navMenu?.classList.remove('active');
            }
        });
    }

    setupThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle');

        if (!themeToggle) return;

        themeToggle.addEventListener('click', () => {
            this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', this.currentTheme);

            // Update icon
            const icon = themeToggle.querySelector('.theme-icon');
            if (icon) {
                icon.textContent = this.currentTheme === 'dark' ? '☀️' : '🌙';
            }
        });
    }

    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe all sections
        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });

        // Observe benefit cards
        document.querySelectorAll('.benefit-card').forEach(card => {
            observer.observe(card);
        });

        // Observe review cards
        document.querySelectorAll('.review-card').forEach(card => {
            observer.observe(card);
        });
    }

    setupFAQ() {
        const faqItems = document.querySelectorAll('.faq-item');

        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');

            question?.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                // Close all other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });

                // Toggle current item
                item.classList.toggle('active', !isActive);
            });
        });
    }

    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');

                if (href === '#') return;

                e.preventDefault();

                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });

                    // Close mobile menu if open
                    document.querySelector('.nav-menu')?.classList.remove('active');
                }
            });
        });
    }
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        const app = new CaptainMakhanaApp();
        app.init();
    });
} else {
    const app = new CaptainMakhanaApp();
    app.init();
}

export default CaptainMakhanaApp;
