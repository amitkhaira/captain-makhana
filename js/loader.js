// ============================================
// LOADER.JS - Loading Screen Handler
// ============================================

import { LOADER, FLAVORS } from './constants.js';

class LoaderManager {
    constructor() {
        this.loader = document.getElementById('loader');
        this.progressBar = document.querySelector('.loader-progress-fill');
        this.progressText = document.querySelector('.loader-percentage');
        this.messageElement = document.querySelector('.loader-message');

        this.currentMessage = 0;
        this.messageInterval = null;
        this.progress = 0;
    }

    init(currentFlavorIndex = 0) {
        this.show();
        this.cycleMessages();
        return this.simulateLoading();
    }

    show() {
        if (this.loader) {
            this.loader.classList.add('active');
        }
    }

    hide() {
        if (this.loader) {
            this.loader.classList.remove('active');
            setTimeout(() => {
                this.loader.style.display = 'none';
            }, 800);
        }

        if (this.messageInterval) {
            clearInterval(this.messageInterval);
        }
    }

    updateProgress(percentage) {
        this.progress = Math.min(percentage, 100);

        if (this.progressBar) {
            this.progressBar.style.width = `${this.progress}%`;
        }

        if (this.progressText) {
            this.progressText.textContent = `${Math.floor(this.progress)}%`;
        }
    }

    cycleMessages() {
        if (LOADER.messages && LOADER.messages.length > 0) {
            this.updateMessage(LOADER.messages[this.currentMessage]);

            this.messageInterval = setInterval(() => {
                this.currentMessage = (this.currentMessage + 1) % LOADER.messages.length;
                this.updateMessage(LOADER.messages[this.currentMessage]);
            }, LOADER.messageInterval || 2000);
        }
    }

    updateMessage(message) {
        if (this.messageElement) {
            this.messageElement.style.opacity = '0';

            setTimeout(() => {
                this.messageElement.textContent = message;
                this.messageElement.style.opacity = '1';
            }, 300);
        }
    }

    simulateLoading() {
        return new Promise((resolve) => {
            const startTime = Date.now();
            const minLoadTime = LOADER.minLoadTime || 1000;

            // Simulate loading with smooth progress
            const loadInterval = setInterval(() => {
                // Increase progress gradually
                this.progress += Math.random() * 3 + 2; // Random increment between 2-5%

                if (this.progress >= 100) {
                    this.progress = 100;
                    this.updateProgress(100);

                    // Ensure minimum load time has passed
                    const elapsedTime = Date.now() - startTime;
                    const remainingTime = Math.max(0, minLoadTime - elapsedTime);

                    setTimeout(() => {
                        clearInterval(loadInterval);
                        this.hide();
                        resolve();
                    }, remainingTime);
                } else {
                    this.updateProgress(this.progress);
                }
            }, 50); // Update every 50ms for smooth animation
        });
    }
}

export default LoaderManager;
