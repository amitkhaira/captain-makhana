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

        const flavor = FLAVORS[this.currentFlavorIndex];
        const totalFrames = (flavor.webpSequence && flavor.webpSequence.frameCount)
            ? flavor.webpSequence.frameCount
            : PARALLAX.totalFrames;

        // Calculate current frame (0 to totalFrames-1)
        const targetFrame = Math.floor(scrollProgress * (totalFrames - 1));

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

        // Check if this flavor has a configured suffix, implying frames are ready
        if (flavor.webpSequence && flavor.webpSequence.suffix) {
            // Calculate frame index based on scroll position
            // Ensure we don't exceed frame count
            const safeFrame = Math.min(frameNumber, flavor.webpSequence.frameCount - 1);

            // Construct filename: frame_XXX_delay-0.2s.webp
            // Using 3-digit padding as per "001" format
            const paddedFrame = String(safeFrame).padStart(3, '0');
            const framePath = `${flavor.webpSequence.basePath}${flavor.webpSequence.fileName}${paddedFrame}${flavor.webpSequence.suffix}${flavor.webpSequence.extension}`;

            this.parallaxBg.style.backgroundImage = `url('${framePath}')`;
        } else {
            // Fallback to static hero image for other flavors
            this.parallaxBg.style.backgroundImage = `url('${flavor.images.hero}')`;
        }
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
