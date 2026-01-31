// ============================================
// FLAVORS.JS - Flavor Switching Logic
// ============================================

import { FLAVORS, ANIMATIONS } from './constants.js';

class FlavorManager {
    constructor(parallaxManager) {
        this.parallaxManager = parallaxManager;
        this.currentIndex = 0;
        this.isAnimating = false;

        // DOM elements
        this.flavorName = document.querySelector('.flavor-name');
        this.flavorSubtitle = document.querySelector('.flavor-subtitle');
        this.flavorDescription = document.querySelector('.flavor-description');
        this.flavorIndex = document.querySelector('.flavor-index');
        this.prevButton = document.querySelector('.flavor-nav-prev');
        this.nextButton = document.querySelector('.flavor-nav-next');
        this.heroOverlay = document.querySelector('.hero-overlay');
    }

    init(startIndex = 0) {
        this.currentIndex = startIndex;
        this.setupEventListeners();
        this.updateFlavor(this.currentIndex, false); // Initial load without animation
    }

    setupEventListeners() {
        if (this.prevButton) {
            this.prevButton.addEventListener('click', () => this.previous());
        }

        if (this.nextButton) {
            this.nextButton.addEventListener('click', () => this.next());
        }

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                this.previous();
            } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                this.next();
            }
        });
    }

    previous() {
        if (this.isAnimating) return;

        this.currentIndex = (this.currentIndex - 1 + FLAVORS.length) % FLAVORS.length;
        this.updateFlavor(this.currentIndex, true);
    }

    next() {
        if (this.isAnimating) return;

        this.currentIndex = (this.currentIndex + 1) % FLAVORS.length;
        this.updateFlavor(this.currentIndex, true);
    }

    updateFlavor(index, animate = true) {
        const flavor = FLAVORS[index];

        if (!flavor) return;

        if (animate) {
            this.isAnimating = true;
            this.fadeOut(() => {
                this.applyFlavorChanges(flavor);
                this.fadeIn();
            });
        } else {
            this.applyFlavorChanges(flavor);
        }

        // Update parallax background
        if (this.parallaxManager) {
            this.parallaxManager.switchFlavor(index);
        }
    }

    applyFlavorChanges(flavor) {
        // Update text content
        if (this.flavorName) {
            this.flavorName.textContent = flavor.name;
        }

        if (this.flavorSubtitle) {
            this.flavorSubtitle.textContent = flavor.subtitle;
        }

        if (this.flavorDescription) {
            this.flavorDescription.textContent = flavor.description;
        }

        if (this.flavorIndex) {
            this.flavorIndex.textContent = String(flavor.id).padStart(2, '0');
        }

        // Update theme color
        document.documentElement.style.setProperty('--theme-color', flavor.themeColor);
        document.documentElement.style.setProperty('--theme-color-hover', flavor.themeColorHover);

        // Update theme mode (dark/light)
        document.documentElement.setAttribute('data-theme', flavor.mode);
        document.documentElement.setAttribute('data-flavor', flavor.slug);
    }

    fadeOut(callback) {
        if (this.heroOverlay) {
            this.heroOverlay.style.opacity = '0';

            setTimeout(() => {
                if (callback) callback();
            }, ANIMATIONS.fadeOut * 1000);
        } else {
            if (callback) callback();
        }
    }

    fadeIn() {
        if (this.heroOverlay) {
            setTimeout(() => {
                this.heroOverlay.style.opacity = '1';
                this.isAnimating = false;
            }, 50);
        } else {
            this.isAnimating = false;
        }
    }

    getCurrentFlavor() {
        return FLAVORS[this.currentIndex];
    }
}

export default FlavorManager;
