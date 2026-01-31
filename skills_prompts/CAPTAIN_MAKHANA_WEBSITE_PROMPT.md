# Captain Makhana - Premium Parallax Website Prompt

## 🎯 Project Overview

Design a premium, single-page parallax website for **Captain Makhana** - a modern makhana (fox nuts) snack brand with bold flavors and cinematic presentation.

---

## 📋 Table of Contents

1. [Customizable Elements](#customizable-elements)
2. [Hero Section Layout](#hero-section-layout)
3. [Parallax Scroll Behavior](#parallax-scroll-behavior)
4. [Flavor Variants](#flavor-variants)
5. [Loading Experience](#loading-experience)
6. [Navigation & Sections](#navigation--sections)
7. [Content Sections](#content-sections)
8. [Footer](#footer)
9. [Technical Specifications](#technical-specifications)
10. [File Structure](#file-structure)
11. [Constants Configuration](#constants-configuration)
12. [CSS Variables System](#css-variables-system)

---

## 🎨 Customizable Elements

The website should be fully configurable through a single constants file. All these elements must be editable:

- **Brand Information** (name, tagline, logo, contact details)
- **Flavor name** (e.g., "Spicy", "Mint", "Chocolate")
- **Flavor subtitle** (e.g., "Masala Makhana", "Cool Mint", "Choco Crunch")
- **Flavor description** (1–3 sentences)
- **Theme color** (brand accent color per flavor)
- **Dark or light mode** (toggle-able)
- **WebP background parallax sequences** (one per flavor)
- **Social media links**
- **Navigation menu items**
- **Section content** (all text, images, CTAs)

---

## 🦸 Hero Section Layout

### Background Animation
- Full-screen **WebP image sequence** (240 frames @ 30 FPS)
- **Scroll-driven**: Scrolling down plays forward, scrolling up reverses
- Shows makhana packet transitioning from centered shot → dynamic ingredient burst
- Cinematic, smooth, tied directly to scroll position (not autoplay)

### Left Overlay Text Block
**Vertical stack (top to bottom):**

1. **Brand Logo** - "Captain Makhana" logo (configurable)
2. **Flavor Name** - Large, bold, uppercase (e.g., "SPICY")
   - Font: Extra bold, modern sans-serif
   - Size: `var(--font-hero-title)` (72-96px)
   - Color: `var(--text-primary)`
3. **Subtitle** - Light weight (e.g., "Masala Makhana")
   - Size: `var(--font-hero-subtitle)` (24-32px)
   - Color: `var(--text-secondary)`
4. **Description** - 2-3 sentence paragraph
   - Size: `var(--font-body-large)` (16-18px)
   - Max width: 400px
   - Line height: 1.6
5. **CTA Buttons** - Two side-by-side rounded buttons:
   - **Left:** "SHOP NOW"
     - Background: Transparent
     - Border: 2px solid `var(--text-primary)`
     - Text: `var(--text-primary)`
     - Hover: Fill with `var(--theme-color)`
   - **Right:** "LEARN MORE"
     - Background: `var(--theme-color)`
     - Text: `var(--text-contrast)`
     - Hover: Scale 1.05x
   - Border radius: 50px
   - Padding: 16px 40px

### Center Area
- **Visually clean and empty**
- Showcases animated makhana burst clearly
- No competing UI elements

### Right Side Navigation

1. **Large Flavor Index** (e.g., "01", "02", "03")
   - Font: Ultra bold display
   - Size: 120-180px
   - Color: `rgba(255,255,255,0.3)` semi-transparent
   - Position: Overlapping navigation

2. **Vertical Navigation Strip:**
   - **PREV** ↑ (upward arrow + label)
   - Thin horizontal divider (1px, 60px width)
   - **NEXT** ↓ (downward arrow + label)
   - Hover: `var(--theme-color)` highlight
   - Click: Switch flavor with fade transition (0.5s)

### Bottom Center
- Social media icons row (Instagram, Facebook, Twitter, YouTube)
- Size: 24px
- Color: `var(--text-secondary)`
- Hover: `var(--theme-color)`
- Position: 40px from bottom

---

## 🎨 Theme & Mode System

### Dark Mode (Default)
```css
--bg-primary: #000000;
--bg-secondary: #0a0a0a;
--text-primary: #ffffff;
--text-secondary: #cccccc;
--text-muted: #888888;
```

### Light Mode
```css
--bg-primary: #fafafa;
--bg-secondary: #f5f5f0;
--text-primary: #1a1a1a;
--text-secondary: #666666;
--text-muted: #999999;
```

### Theme Color Application
- CTA button backgrounds
- Active navigation indicators
- Accent highlights and borders
- Section dividers
- Interactive hover states

### Mode Toggle
- Located in top-right of navbar
- Sun ☀️ / Moon 🌙 icon
- Smooth transition: 0.3s ease

---

## 🌀 Parallax Scroll Behavior

### Implementation Logic
```javascript
// Pseudo-code
currentFrame = Math.floor((scrollY / maxScrollHeight) * totalFrames)
backgroundImage = `url(${frameBasePath}frame_${paddedFrameNumber}.webp)`
```

### Behavior
- **Scroll down:** Frame 0 → 240 (forward)
- **Scroll up:** Frame 240 → 0 (reverse)
- **Performance:** Use `requestAnimationFrame`
- **Preload:** All frames before showing hero
- **Responsive:** Adjust mapping for viewport heights

---

## 🌶️ Flavor Variants Configuration

### Data Structure
Each flavor variant must include:

```javascript
{
  id: number,
  name: string,           // "SPICY"
  subtitle: string,       // "Masala Makhana"
  description: string,    // 1-3 sentences
  themeColor: string,     // Hex color code
  mode: "dark" | "light",
  webpSequencePath: string,
  frameCount: number,     // 240
  frameFormat: string     // "0001" (padding)
}
```

### Example Variants

**Variant 1: Spicy Masala**
- Name: `"SPICY"`
- Subtitle: `"Masala Makhana"`
- Description: `"A fiery blend of traditional Indian spices with a satisfying crunch. Perfect for those who crave bold, intense flavors."`
- Theme Color: `#D32F2F` (Deep Red)
- Mode: `dark`
- WebP Sequence: `https://yourdomain.com/assets/spicy/frame_0001.webp`
- Frame Count: `240`

**Variant 2: Cool Mint**
- Name: `"MINT"`
- Subtitle: `"Cool Mint Makhana"`
- Description: `"Refreshing mint flavor with a cool, crisp finish. A perfect balance of freshness and crunch for any time snacking."`
- Theme Color: `#4CAF50` (Fresh Green)
- Mode: `dark`
- WebP Sequence: `https://yourdomain.com/assets/mint/frame_0001.webp`
- Frame Count: `240`

**Variant 3: Chocolate Indulgence**
- Name: `"CHOCOLATE"`
- Subtitle: `"Choco Crunch Makhana"`
- Description: `"Decadent chocolate-coated makhana for guilt-free indulgence. Rich, smooth, and irresistibly crunchy."`
- Theme Color: `#5D4037` (Chocolate Brown)
- Mode: `dark`
- WebP Sequence: `https://yourdomain.com/assets/chocolate/frame_0001.webp`
- Frame Count: `240`

**Variant 4: Classic Salted**
- Name: `"CLASSIC"`
- Subtitle: `"Lightly Salted"`
- Description: `"Simple, pure, perfectly salted. The original flavor that started it all - timeless and delicious."`
- Theme Color: `#F5F5DC` (Beige)
- Mode: `light`
- WebP Sequence: `https://yourdomain.com/assets/classic/frame_0001.webp`
- Frame Count: `240`

---

## ⏳ Loading Experience

### Initial Page Load

**Full-screen loading overlay containing:**

1. Brand logo/name: "Captain Makhana"
2. Horizontal progress bar:
   - Container: 300px × 4px
   - Fill: `var(--theme-color)`, 0% → 100%
   - Smooth animation tied to frame loading
3. Percentage indicator: "Loading 72%..."
4. Loading text: "Preparing your snacking experience..."

**Behavior:**
- Preload first flavor's complete WebP sequence
- Show real-time loading percentage
- Reveal hero only after 100% complete
- Fade out transition: 0.8s

### Variant Switching Load
- Small loading spinner near PREV/NEXT
- Semi-transparent overlay on variant number
- Preload new sequence in background
- Fade transition when ready (0.5s)

---

## 🧭 Navigation & Sections

### Sticky Top Navigation Bar

**Layout:**
- **Left:** Captain Makhana logo (40px height, clickable → scroll to top)
- **Center:** Optional tagline or empty space
- **Right:** 
  - Navigation links: `Product | Benefits | Nutrition | Reviews | FAQ | Contact`
  - Dark/Light mode toggle
  - Cart icon (optional)

**Styling:**
- Background: `rgba(0,0,0,0.8)` with backdrop-blur
- Becomes visible after 100px scroll
- Active section indicator (underline or dot)
- Smooth scroll behavior
- Hover: `var(--theme-color)`

---

## 📄 Content Sections

### 1. Product / About the Brand

**Layout:**
- Full-width section, 100vh height
- Two-column (60/40 split)
- **Left:** Brand story, mission, Mithila origin
- **Right:** Large image (farm, farmers, process)

**Content:**
- **Headline:** "From Mithila's Sacred Ponds to Your Snack Bowl"
- **Body:** Authenticity, sourcing, freshness story
- **CTA:** "Discover Our Story" button

---

### 2. Ingredients & Benefits

**Layout:**
- Grid: 3 columns (desktop), 1 column (mobile)
- Each card contains:
  - Icon (protein, heart, leaf)
  - Benefit title
  - Short description (2-3 lines)

**Content:**
- **Headline:** "Pure Ingredients, Powerful Benefits"
- **Benefits List:**
  - High in protein
  - Low calorie snacking
  - Rich in antioxidants
  - Gluten-free
  - No artificial flavors
  - Heart-healthy
- **Transparency:** "Just makhana, spices, and love"

---

### 3. Nutrition Facts

**Layout:**
- Centered card styled as FDA nutrition label
- Black border, white background (inverted in dark mode)
- Max width: 400px

**Content:**
- Serving size, calories
- Macros: Protein, Carbs, Fat
- Vitamins and minerals
- Allergen info
- "Per 30g serving" format

---

### 4. Reviews / Social Proof

**Layout:**
- Carousel or grid (3-4 cards visible)
- Each card:
  - 5-star rating
  - Customer quote
  - Name and location
  - Profile photo (optional)

**Content:**
- **Headline:** "What Our Snackers Say"
- Real customer reviews
- Average rating: "4.8/5 from 1,247 reviews"

---

### 5. FAQ - Accordion

**Layout:**
- Single column, centered (max-width 800px)
- Click to expand/collapse

**Questions:**
- What is makhana?
- How is it different from popcorn?
- Is it really healthy?
- Where do you source from?
- How long does it stay fresh?
- Do you ship pan-India?

---

### 6. Final Call-to-Action

**Layout:**
- Full-width, centered content
- Bold headline + dual CTAs

**Content:**
- **Headline:** "Ready to Snack Smarter?"
- **Subtext:** "Join thousands of health-conscious snackers"
- **Buttons:**
  - "Shop All Flavors" (primary)
  - "Subscribe & Save 15%" (outlined)

---

## 🦶 Footer

### Layout
Four-column grid (stack on mobile)

**Columns:**

1. **Brand Column:**
   - Captain Makhana logo
   - Tagline: "Bold snacking from Mithila's farms"
   - Social icons

2. **Quick Links:**
   - About Us
   - Our Story
   - Shop All
   - Track Order
   - Bulk Orders

3. **Support:**
   - Contact Us
   - FAQs
   - Shipping Policy
   - Return Policy
   - Terms & Conditions
   - Privacy Policy

4. **Contact Info:**
   - Email: hello@captainmakhana.com
   - Phone: +91 XXXXX XXXXX
   - Address: City, State, India

**Bottom Bar:**
- Copyright: "© 2024 Captain Makhana. All rights reserved."
- Payment icons: Visa, Mastercard, UPI, etc.

**Styling:**
- Background: `#000000`
- Text: `#ffffff`
- Link hover: `var(--theme-color)`

---

## 🛠️ Technical Specifications

### WebP Sequence Format
- **Naming:** `frame_0001.webp` → `frame_0240.webp`
- **Frame count:** 240 frames
- **Frame rate:** 30 FPS (8 seconds total)
- **Resolution:** 1920×1080px minimum (Full HD)
- **Compression:** WebP 80-90% quality

### Responsive Breakpoints
- **Desktop:** >1024px (full parallax)
- **Tablet:** 768-1023px (adjusted layout)
- **Mobile:** <768px (simplified, reduced frames)

### Performance
- Lazy load sections below hero
- Preload first variant only
- Load others on demand
- `IntersectionObserver` for scroll animations
- CSS `scroll-behavior: smooth`

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- WebP fallback for older browsers
- JavaScript required for parallax

---

## 📁 File Structure

```
captain-makhana-website/
├── index.html
├── css/
│   ├── variables.css          # CSS variables (generated from constants)
│   ├── global.css             # Global styles
│   ├── hero.css               # Hero section styles
│   ├── sections.css           # Content section styles
│   ├── navigation.css         # Navbar and footer
│   └── responsive.css         # Media queries
├── js/
│   ├── constants.js           # ⭐ MAIN CONFIG FILE
│   ├── app.js                 # Main application logic
│   ├── parallax.js            # Parallax scroll handler
│   ├── flavors.js             # Flavor switching logic
│   └── loader.js              # Loading screen handler
├── assets/
│   ├── logo/
│   │   └── captain-makhana-logo.svg
│   ├── icons/
│   │   └── social-icons/
│   ├── spicy/
│   │   ├── frame_0001.webp → frame_0240.webp
│   ├── mint/
│   │   ├── frame_0001.webp → frame_0240.webp
│   ├── chocolate/
│   │   ├── frame_0001.webp → frame_0240.webp
│   └── classic/
│       ├── frame_0001.webp → frame_0240.webp
└── README.md
```

---

## ⚙️ Constants Configuration

### `js/constants.js` - Single Source of Truth

This file contains ALL configurable content. Update values here to change entire website.

```javascript
// ============================================
// CAPTAIN MAKHANA WEBSITE CONFIGURATION
// ============================================
// Edit this file to update ALL website content
// ============================================

export const BRAND = {
  name: "Captain Makhana",
  tagline: "Bold snacking from Mithila's farms",
  logo: {
    path: "./assets/logo/captain-makhana-logo.svg",
    alt: "Captain Makhana Logo",
    height: "40px"
  },
  description: "A modern makhana brand with bold flavors and premium quality, sourced directly from Mithila's sacred ponds.",
  
  contact: {
    email: "hello@captainmakhana.com",
    phone: "+91 98765 43210",
    address: "Madhubani, Bihar, India"
  },
  
  social: {
    instagram: "https://instagram.com/captainmakhana",
    facebook: "https://facebook.com/captainmakhana",
    twitter: "https://twitter.com/captainmakhana",
    youtube: "https://youtube.com/@captainmakhana"
  }
};

// ============================================
// THEME CONFIGURATION
// ============================================

export const THEME = {
  defaultMode: "dark", // "dark" or "light"
  
  colors: {
    dark: {
      bgPrimary: "#000000",
      bgSecondary: "#0a0a0a",
      textPrimary: "#ffffff",
      textSecondary: "#cccccc",
      textMuted: "#888888"
    },
    light: {
      bgPrimary: "#fafafa",
      bgSecondary: "#f5f5f0",
      textPrimary: "#1a1a1a",
      textSecondary: "#666666",
      textMuted: "#999999"
    }
  },
  
  fonts: {
    primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    display: "'Bebas Neue', 'Impact', sans-serif",
    
    sizes: {
      heroTitle: "clamp(48px, 8vw, 96px)",
      heroSubtitle: "clamp(18px, 3vw, 32px)",
      sectionTitle: "clamp(32px, 5vw, 56px)",
      bodyLarge: "18px",
      bodyMedium: "16px",
      bodySmall: "14px",
      caption: "12px"
    }
  },
  
  spacing: {
    sectionPadding: "120px 5%",
    containerMaxWidth: "1400px",
    gridGap: "2rem"
  },
  
  transitions: {
    fast: "0.2s ease",
    medium: "0.3s ease",
    slow: "0.5s ease",
    verySlow: "0.8s ease"
  }
};

// ============================================
// FLAVOR VARIANTS
// ============================================

export const FLAVORS = [
  {
    id: 1,
    name: "SPICY",
    subtitle: "Masala Makhana",
    description: "A fiery blend of traditional Indian spices with a satisfying crunch. Perfect for those who crave bold, intense flavors.",
    themeColor: "#D32F2F",
    mode: "dark",
    webpSequencePath: "https://yourdomain.com/assets/spicy/",
    frameCount: 240,
    frameFormat: "0001", // Will generate: frame_0001.webp, frame_0002.webp, etc.
    ctaImage: "./assets/cta/spicy-cta.webp"
  },
  {
    id: 2,
    name: "MINT",
    subtitle: "Cool Mint Makhana",
    description: "Refreshing mint flavor with a cool, crisp finish. A perfect balance of freshness and crunch for any time snacking.",
    themeColor: "#4CAF50",
    mode: "dark",
    webpSequencePath: "https://yourdomain.com/assets/mint/",
    frameCount: 240,
    frameFormat: "0001",
    ctaImage: "./assets/cta/mint-cta.webp"
  },
  {
    id: 3,
    name: "CHOCOLATE",
    subtitle: "Choco Crunch Makhana",
    description: "Decadent chocolate-coated makhana for guilt-free indulgence. Rich, smooth, and irresistibly crunchy.",
    themeColor: "#5D4037",
    mode: "dark",
    webpSequencePath: "https://yourdomain.com/assets/chocolate/",
    frameCount: 240,
    frameFormat: "0001",
    ctaImage: "./assets/cta/chocolate-cta.webp"
  },
  {
    id: 4,
    name: "CLASSIC",
    subtitle: "Lightly Salted",
    description: "Simple, pure, perfectly salted. The original flavor that started it all - timeless and delicious.",
    themeColor: "#F5F5DC",
    mode: "light",
    webpSequencePath: "https://yourdomain.com/assets/classic/",
    frameCount: 240,
    frameFormat: "0001",
    ctaImage: "./assets/cta/classic-cta.webp"
  }
];

// ============================================
// NAVIGATION MENU
// ============================================

export const NAVIGATION = {
  items: [
    { label: "Product", href: "#product" },
    { label: "Benefits", href: "#benefits" },
    { label: "Nutrition", href: "#nutrition" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" }
  ]
};

// ============================================
// HERO SECTION
// ============================================

export const HERO = {
  cta: {
    primary: {
      text: "SHOP NOW",
      link: "#shop"
    },
    secondary: {
      text: "LEARN MORE",
      link: "#product"
    }
  },
  
  loader: {
    text: "Preparing your snacking experience...",
    logoPath: "./assets/logo/captain-makhana-logo.svg"
  }
};

// ============================================
// CONTENT SECTIONS
// ============================================

export const SECTIONS = {
  product: {
    headline: "From Mithila's Sacred Ponds to Your Snack Bowl",
    body: "Captain Makhana brings you the finest fox nuts, sourced directly from the traditional farms of Mithila, Bihar - where makhana cultivation has been an art for generations. We work with local farmers to ensure every bite is fresh, authentic, and packed with bold flavor.",
    cta: {
      text: "Discover Our Story",
      link: "#about"
    },
    image: "./assets/images/mithila-farms.jpg"
  },
  
  benefits: {
    headline: "Pure Ingredients, Powerful Benefits",
    subheadline: "Just makhana, spices, and love",
    items: [
      {
        icon: "💪",
        title: "High in Protein",
        description: "Power-packed with plant-based protein for sustained energy and muscle health."
      },
      {
        icon: "🔥",
        title: "Low Calorie",
        description: "Guilt-free snacking with fewer calories than traditional chips and snacks."
      },
      {
        icon: "🛡️",
        title: "Rich in Antioxidants",
        description: "Loaded with flavonoids that support overall health and wellness."
      },
      {
        icon: "🌾",
        title: "Gluten-Free",
        description: "Perfect for gluten-sensitive individuals and clean eating lifestyles."
      },
      {
        icon: "🚫",
        title: "No Artificial Flavors",
        description: "Only natural ingredients and authentic spices, nothing artificial."
      },
      {
        icon: "❤️",
        title: "Heart-Healthy",
        description: "Low in sodium and cholesterol, supporting cardiovascular wellness."
      }
    ]
  },
  
  nutrition: {
    headline: "Nutrition Facts",
    servingSize: "30g (1 cup)",
    facts: {
      calories: 140,
      totalFat: "1g",
      saturatedFat: "0g",
      transFat: "0g",
      cholesterol: "0mg",
      sodium: "180mg",
      totalCarbs: "28g",
      dietaryFiber: "2g",
      totalSugars: "0g",
      protein: "4g",
      calcium: "2% DV",
      iron: "4% DV",
      potassium: "6% DV"
    },
    allergens: "May contain traces of nuts. Gluten-free."
  },
  
  reviews: {
    headline: "What Our Snackers Say",
    averageRating: 4.8,
    totalReviews: 1247,
    testimonials: [
      {
        name: "Priya Sharma",
        location: "Mumbai",
        rating: 5,
        quote: "Captain Makhana has completely changed my snacking game! The spicy flavor is addictive and so much healthier than chips.",
        image: "./assets/reviews/priya.jpg"
      },
      {
        name: "Rahul Verma",
        location: "Delhi",
        rating: 5,
        quote: "Love the mint flavor! Fresh, crunchy, and perfect for my post-workout snack. Highly recommend!",
        image: "./assets/reviews/rahul.jpg"
      },
      {
        name: "Anjali Reddy",
        location: "Bangalore",
        rating: 5,
        quote: "The chocolate makhana is my guilty pleasure - except it's not guilty at all! Delicious and nutritious.",
        image: "./assets/reviews/anjali.jpg"
      },
      {
        name: "Vikram Singh",
        location: "Pune",
        rating: 4,
        quote: "Great quality and authentic taste. You can really tell these are sourced from the best farms.",
        image: "./assets/reviews/vikram.jpg"
      }
    ]
  },
  
  faq: {
    headline: "Frequently Asked Questions",
    questions: [
      {
        question: "What is makhana?",
        answer: "Makhana, also known as fox nuts or lotus seeds, are puffed seeds from the lotus flower. They've been a traditional Indian snack for centuries and are packed with nutrients."
      },
      {
        question: "How is it different from popcorn?",
        answer: "While both are puffed snacks, makhana is higher in protein, lower in calories, and contains more nutrients like calcium and iron. It's also naturally gluten-free and easier to digest."
      },
      {
        question: "Is it really healthy?",
        answer: "Absolutely! Makhana is low in calories, high in protein, rich in antioxidants, and gluten-free. It's an excellent alternative to traditional fried snacks."
      },
      {
        question: "Where do you source from?",
        answer: "We source directly from traditional farmers in the Mithila region of Bihar, India - the heartland of makhana cultivation. This ensures authenticity and supports local communities."
      },
      {
        question: "How long does it stay fresh?",
        answer: "When stored in an airtight container in a cool, dry place, Captain Makhana stays fresh and crunchy for up to 6 months. Check the best-before date on the package."
      },
      {
        question: "Do you ship pan-India?",
        answer: "Yes! We ship to all major cities and towns across India. Orders typically arrive within 3-7 business days depending on your location."
      }
    ]
  },
  
  finalCTA: {
    headline: "Ready to Snack Smarter?",
    subheadline: "Join thousands of health-conscious snackers across India",
    primaryCTA: {
      text: "Shop All Flavors",
      link: "#shop"
    },
    secondaryCTA: {
      text: "Subscribe & Save 15%",
      link: "#subscribe"
    }
  }
};

// ============================================
// FOOTER
// ============================================

export const FOOTER = {
  columns: {
    brand: {
      logo: "./assets/logo/captain-makhana-logo.svg",
      tagline: "Bold snacking from Mithila's farms"
    },
    
    quickLinks: {
      title: "Quick Links",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Our Story", href: "#story" },
        { label: "Shop All", href: "#shop" },
        { label: "Track Order", href: "#track" },
        { label: "Bulk Orders", href: "#bulk" }
      ]
    },
    
    support: {
      title: "Support",
      links: [
        { label: "Contact Us", href: "#contact" },
        { label: "FAQs", href: "#faq" },
        { label: "Shipping Policy", href: "#shipping" },
        { label: "Return Policy", href: "#returns" },
        { label: "Terms & Conditions", href: "#terms" },
        { label: "Privacy Policy", href: "#privacy" }
      ]
    },
    
    contact: {
      title: "Contact Info",
      email: "hello@captainmakhana.com",
      phone: "+91 98765 43210",
      address: "Madhubani, Bihar, India"
    }
  },
  
  copyright: "© 2024 Captain Makhana. All rights reserved.",
  
  paymentMethods: [
    { name: "Visa", icon: "./assets/icons/visa.svg" },
    { name: "Mastercard", icon: "./assets/icons/mastercard.svg" },
    { name: "UPI", icon: "./assets/icons/upi.svg" },
    { name: "Paytm", icon: "./assets/icons/paytm.svg" }
  ]
};

// ============================================
// PARALLAX SETTINGS
// ============================================

export const PARALLAX = {
  frameRate: 30,
  totalFrames: 240,
  animationDuration: 8, // seconds
  preloadBuffer: 10, // Load 10 frames ahead
  scrollSmoothness: 0.1 // Lower = smoother but slower response
};

// ============================================
// LOADING SCREEN
// ============================================

export const LOADER = {
  minLoadTime: 1000, // Minimum loading time in ms (for UX)
  messages: [
    "Preparing your snacking experience...",
    "Loading fresh makhana...",
    "Almost there..."
  ]
};

// ============================================
// PLACEHOLDER IMAGES (Development)
// ============================================

export const PLACEHOLDERS = {
  heroBackground: "https://placehold.co/1920x1080/D32F2F/FFFFFF/webp?text=Captain+Makhana",
  productCard: "https://placehold.co/800x800/4CAF50/FFFFFF/webp?text=Makhana",
  ctaImage: "https://placehold.co/600x600/5D4037/FFFFFF/webp?text=CTA"
};

// ============================================
// ANIMATION TIMINGS
// ============================================

export const ANIMATIONS = {
  fadeIn: 0.5,
  fadeOut: 0.5,
  slideIn: 0.6,
  scaleUp: 0.3,
  colorTransition: 0.3
};
```

---

## 🎨 CSS Variables System

### `css/variables.css` - Auto-generated from Constants

This file is **dynamically generated** from `constants.js`. Never edit manually.

```css
/* ============================================ */
/* CSS VARIABLES - AUTO-GENERATED */
/* Generated from js/constants.js */
/* DO NOT EDIT THIS FILE MANUALLY */
/* ============================================ */

:root {
  /* ========== COLORS - DARK MODE ========== */
  --bg-primary: #000000;
  --bg-secondary: #0a0a0a;
  --text-primary: #ffffff;
  --text-secondary: #cccccc;
  --text-muted: #888888;
  --text-contrast: #000000; /* For light text on dark bg */
  
  /* ========== THEME COLOR (Dynamic) ========== */
  --theme-color: #D32F2F; /* Changes per flavor */
  --theme-color-hover: #B71C1C;
  --theme-color-transparent: rgba(211, 47, 47, 0.1);
  
  /* ========== TYPOGRAPHY ========== */
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-display: 'Bebas Neue', 'Impact', sans-serif;
  
  /* Font Sizes */
  --font-hero-title: clamp(48px, 8vw, 96px);
  --font-hero-subtitle: clamp(18px, 3vw, 32px);
  --font-section-title: clamp(32px, 5vw, 56px);
  --font-body-large: 18px;
  --font-body-medium: 16px;
  --font-body-small: 14px;
  --font-caption: 12px;
  
  /* Font Weights */
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;
  --font-weight-extra-bold: 800;
  
  /* Line Heights */
  --line-height-tight: 1.2;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.8;
  
  /* ========== SPACING ========== */
  --spacing-xs: 0.5rem;   /* 8px */
  --spacing-sm: 1rem;     /* 16px */
  --spacing-md: 1.5rem;   /* 24px */
  --spacing-lg: 2rem;     /* 32px */
  --spacing-xl: 3rem;     /* 48px */
  --spacing-2xl: 4rem;    /* 64px */
  --spacing-3xl: 6rem;    /* 96px */
  
  --section-padding: 120px 5%;
  --container-max-width: 1400px;
  --grid-gap: 2rem;
  
  /* ========== BORDERS ========== */
  --border-radius-sm: 8px;
  --border-radius-md: 16px;
  --border-radius-lg: 24px;
  --border-radius-full: 50px;
  --border-width: 2px;
  
  /* ========== TRANSITIONS ========== */
  --transition-fast: 0.2s ease;
  --transition-medium: 0.3s ease;
  --transition-slow: 0.5s ease;
  --transition-very-slow: 0.8s ease;
  
  /* ========== SHADOWS ========== */
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.2);
  --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.3);
  --shadow-xl: 0 16px 64px rgba(0, 0, 0, 0.4);
  
  /* ========== Z-INDEX LAYERS ========== */
  --z-background: -1;
  --z-base: 0;
  --z-content: 10;
  --z-navbar: 100;
  --z-overlay: 500;
  --z-modal: 1000;
  --z-loader: 9999;
  
  /* ========== HERO SPECIFIC ========== */
  --hero-text-max-width: 400px;
  --hero-button-padding: 16px 40px;
  --hero-index-font-size: 180px;
  --hero-index-opacity: 0.3;
  
  /* ========== NAVIGATION ========== */
  --navbar-height: 80px;
  --navbar-bg: rgba(0, 0, 0, 0.8);
  --navbar-blur: blur(10px);
  
  /* ========== FOOTER ========== */
  --footer-bg: #000000;
  --footer-text: #ffffff;
  --footer-link-hover: var(--theme-color);
}

/* ========== LIGHT MODE OVERRIDES ========== */
[data-theme="light"] {
  --bg-primary: #fafafa;
  --bg-secondary: #f5f5f0;
  --text-primary: #1a1a1a;
  --text-secondary: #666666;
  --text-muted: #999999;
  --text-contrast: #ffffff;
  
  --navbar-bg: rgba(255, 255, 255, 0.9);
  
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.15);
  --shadow-xl: 0 16px 64px rgba(0, 0, 0, 0.2);
}

/* ========== FLAVOR-SPECIFIC THEME COLORS ========== */
/* These are updated dynamically via JavaScript */
[data-flavor="spicy"] {
  --theme-color: #D32F2F;
  --theme-color-hover: #B71C1C;
}

[data-flavor="mint"] {
  --theme-color: #4CAF50;
  --theme-color-hover: #388E3C;
}

[data-flavor="chocolate"] {
  --theme-color: #5D4037;
  --theme-color-hover: #4E342E;
}

[data-flavor="classic"] {
  --theme-color: #F5F5DC;
  --theme-color-hover: #E8E8CE;
}
```

---

## 🚀 Implementation Summary

### How the Constants System Works:

1. **Single Source of Truth:** All content lives in `constants.js`
2. **CSS Variables:** Auto-generated from constants
3. **JavaScript Imports:** All JS files import from constants
4. **Easy Updates:** Change brand name, colors, content in ONE place
5. **Type Safety:** Can be converted to TypeScript easily
6. **Scalable:** Add new flavors by adding one object to array

### To Update Anything:

```javascript
// Want to change brand name? Edit ONE line in constants.js:
export const BRAND = {
  name: "New Brand Name", // ← Change this
  // Everything else updates automatically
};

// Want to add a new flavor? Add ONE object:
export const FLAVORS = [
  // ... existing flavors
  {
    id: 5,
    name: "PERI PERI",
    subtitle: "Peri Peri Makhana",
    // ... rest of properties
  }
];

// Want to change theme color globally? Edit ONE variable:
export const THEME = {
  colors: {
    dark: {
      bgPrimary: "#000000", // ← Change this
    }
  }
};
```

---

## 📦 Placeholder Images

**Development placeholders:**
- Hero: `https://placehold.co/1920x1080/D32F2F/FFFFFF/webp?text=Captain+Makhana`
- Product: `https://placehold.co/800x800/4CAF50/FFFFFF/webp?text=Makhana`
- CTA: `https://placehold.co/600x600/5D4037/FFFFFF/webp?text=CTA`

---

## ✅ Summary

Generate a **cinematic, scroll-controlled parallax makhana website** with:

✓ **WebP animation sequence** tied to scroll position  
✓ **Text overlays** with flavor info on left  
✓ **Clean center** showcasing animated burst  
✓ **Flavor switching** via PREV/NEXT controls  
✓ **Unique theme colors** per flavor  
✓ **Single constants file** for all configuration  
✓ **CSS variables** for consistent theming  
✓ **Full content sections** below hero  
✓ **Responsive design** across devices  
✓ **Performance optimized** parallax scrolling  

**Brand:** Captain Makhana  
**Vibe:** Bold, adventurous, premium, farm-fresh, cinematic  
**Target:** Health-conscious snackers who value bold flavors and authenticity  

---

**Last Updated:** January 31, 2024  
**Version:** 1.0.0
