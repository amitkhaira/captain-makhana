# Captain Makhana - Project Context & Skills Summary

> **USAGE INSTRUCTIONS FOR AI AGENTS:**
> Read this file first to understand the entire project context, architecture, and design system without needing to scan every individual file. This serves as the "Long Term Memory" of the project.

---

## 1. 🆔 Project Identity
- **Name:** Captain Makhana
- **Tagline:** Premium Makhana Snacks | Healthy Fox Nuts from Mithila
- **Mission:** Promoting healthy, traditional fox nut snacks with a modern, premium brand aesthetic.
- **Target Audience:** Health-conscious luxury snackers.

## 2. 🛠️ Technology Stack
- **Core:** HTML5, Vanilla CSS3, Vanilla JavaScript (ES6 Modules).
- **Frameworks:** NONE (Intentionally dependency-free for performance).
- **State Management:** Custom `State` class in `js/app.js`.
- **Config:** Centralized configuration in `js/constants.js`.
- **Styling:** CSS Custom Properties (Variables) for theming.
- **Build Tool:** None required (Static Site). can run via `python3 -m http.server`.

## 3. 📂 File Structure & Architecture
```
Captain Makhana/
├── index.html              # Single Page Application structure
├── DEPLOY.md               # Deployment instructions (GitHub Pages)
├── js/
│   ├── constants.js        # 🧠 BRAIN: All content, text, config, and data live here.
│   ├── app.js             # 🎮 CONTROLLER: Main entry point, initializes modules.
│   ├── loader.js          # Loading screen logic.
│   ├── parallax.js        # Scroll & Parallax animation logic.
│   └── flavors.js         # Flavor swtiching & Theme logic.
├── css/
│   ├── variables.css      # 🎨 TOKENS: Colors, fonts, spacing, theme definitions.
│   ├── global.css         # Reset & Base styles.
│   ├── hero.css           # Hero specific styles (Glassmorphism, Layout).
│   ├── navigation.css     # Navbar & Footer styles.
│   └── sections.css       # Content sections (Benefits, Reviews, etc.).
└── assets/                 # Images, SVG Icons, Logos.
```

## 4. 🎨 Design System
**Visual Style:** Premium, Modern, Dynamic, Glassmorphism.

### Typography
- **Headings:** `Bebas Neue` (Strong, tall, impactful).
- **Body:** `Inter` (Clean, legible).

### Color System (Dynamic)
The site uses a dynamic theming engine defined in `variables.css` and controlled by `flavors.js`.
- **Base Mode:** Dark (Default), Light (Classic flavor).
- **Theme Color:** Changes based on active flavor properties (e.g., Spicy = Red, Mint = Green).

### Glassmorphism
Used in Hero Overlay:
```css
background: rgba(0, 0, 0, 0.25);
backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.15);
```

## 5. ⚡ Core Features & Logic

### A. Flavor Switching System
- **Trigger:** Next/Prev buttons in Hero.
- **Logic:** `js/flavors.js` updates the `data-flavor` and `data-theme` attributes on `<html>`.
- **Effect:** 
    - Updates CSS variables (`--theme-color`).
    - Animates Hero text & images.
    - Updates background parallax image.
    - Updates URL hash state.

### B. Parallax Scrolling
- **Logic:** `js/parallax.js` listens to scroll events (throttled).
- **Capability:** Built to support 3D WebP frame sequences (240 frames).
    - *Current State:* Uses static Hero images. To enable 3D, add frames to `assets/[flavor]/` and uncomment logic in `parallax.js`.

### C. Sticky Navigation
- Appears after 100px scroll.
- Interactive Dark/Light mode toggle.
- Smooth scroll to anchors.

### D. Loading Experience
- Custom full-screen loader.
- Displays random messages from `constants.js`.
- Ensures minimum load time for brand impression.

## 6. 🔍 SEO & Assets
- **Meta:** Comprehensive keywords implemented (30+ terms).
- **Social:** Open Graph & Twitter Cards enabled using flavor hero images.
- **Icons:** Custom SVGs for social media (Instagram, Facebook, X, YouTube) in `assets/icons/social/`.
- **Favicon:** Brand logo.

## 7. 🚀 Deployment Strategy
- **Platform:** GitHub Pages.
- **Method:** Source = "Deploy from a branch" (main).
- **Reason:** Static site reliability. CI/CD workflow was removed to simplify maintenance.
- **Repo:** `https://github.com/amitkhaira/captain-makhana`
- **Live URL:** `https://amitkhaira.github.io/captain-makhana/`

## 8. 🔮 Future Roadmap (Context for new tasks)
1. **3D Sequence:** Generate/Add 240-frame WebP rotation sequences for each flavor to fully utilize the parallax engine.
2. **E-commerce:** Integrate Shop/Buy buttons with a cart system or payment gateway link.
3. **Blog:** Add content section for recipes/health tips to leverage SEO keywords.
4. **Analytics:** Add Google Analytics tracking code.

---
**Last Updated:** February 2026
