// ============================================
// PARALLAX.JS - Scroll-driven Parallax Handler
// ============================================

import { PARALLAX, FLAVORS } from './constants.js';

class ParallaxManager {
    constructor() {
        this.heroSection = document.getElementById('hero');
        this.parallaxBg = document.querySelector('.parallax-background');
        this.currentFlavorIndex = 0;
        this.currentFrame = 0;
        this.isScrolling = false;
        this.rafId = null;
    }

    init(flavorIndex = 0) {
        this.currentFlavorIndex = flavorIndex;
        this.setupScrollListener();
        this.updateBackground(0); // Start with first frame
    }

    setupScrollListener() {
        let ticking = false;

        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    this.handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    handleScroll() {
        if (!this.heroSection || !this.parallaxBg) return;

        const scrollY = window.scrollY;
        const heroHeight = this.heroSection.offsetHeight;
        const maxScroll = heroHeight * 1.5; // Extend scroll range

        // Calculate progress (0-1)
        const scrollProgress = Math.min(scrollY / maxScroll, 1);

        // Calculate current frame (0 to totalFrames-1)
        const targetFrame = Math.floor(scrollProgress * (PARALLAX.totalFrames - 1));

        // Only update if frame changed
        if (targetFrame !== this.currentFrame) {
            this.currentFrame = targetFrame;
            this.updateBackground(this.currentFrame);
        }

        // Add parallax effect to background
        this.parallaxBg.style.transform = `translateY(${scrollY * 0.5}px) scale(1.1)`;
    }

    updateBackground(frameNumber) {
        if (!this.parallaxBg) return;

        const flavor = FLAVORS[this.currentFlavorIndex];

        // For now, use the static hero image
        // When WebP sequences are added, this will switch between frames
        const imagePath = flavor.images.hero;

        this.parallaxBg.style.backgroundImage = `url('${imagePath}')`;

        // If WebP sequences exist, use frame-based loading
        // const paddedFrame = String(frameNumber + 1).padStart(4, '0');
        // const framePath = `${flavor.webpSequence.basePath}${flavor.webpSequence.fileName}${paddedFrame}${flavor.webpSequence.extension}`;
        // this.parallaxBg.style.backgroundImage = `url('${framePath}')`;
    }

    switchFlavor(newFlavorIndex) {
        this.currentFlavorIndex = newFlavorIndex;
        this.currentFrame = 0;
        this.updateBackground(0);

        // Reset scroll-based animation
        this.handleScroll();
    }

    destroy() {
        if (this.rafId) {
            cancelAnimationFrame(this.rafId);
        }
    }
}

export default ParallaxManager;
