// ============================================
// CAPTAIN MAKHANA WEBSITE CONFIGURATION
// ============================================
// 🎯 SINGLE SOURCE OF TRUTH
// Edit this file to update ALL website content
// ============================================

// ============================================
// BRAND INFORMATION
// ============================================

export const BRAND = {
  name: "Captain Makhana",
  tagline: "Bold snacking from Mithila's farms",

  logo: {
    path: "./assets/logo/captain-makhana-logo.png",
    alt: "Captain Makhana Logo",
    height: "40px"
  },

  description: "A modern makhana brand with bold flavors and premium quality, sourced directly from Mithila's sacred ponds.",

  contact: {
    email: "hello@captainmakhana.com",
    phone: "+91 98765 43210",
    address: "Madhubani, Bihar, India",
    supportHours: "Mon-Sat: 9:00 AM - 6:00 PM IST"
  },

  social: {
    instagram: {
      url: "https://instagram.com/captainmakhana",
      handle: "@captainmakhana"
    },
    facebook: {
      url: "https://facebook.com/captainmakhana",
      handle: "CaptainMakhana"
    },
    twitter: {
      url: "https://twitter.com/captainmakhana",
      handle: "@captainmakhana"
    },
    youtube: {
      url: "https://youtube.com/@captainmakhana",
      handle: "@captainmakhana"
    }
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
      bgTertiary: "#1a1a1a",
      textPrimary: "#ffffff",
      textSecondary: "#cccccc",
      textMuted: "#888888",
      textContrast: "#000000", // For text on light backgrounds
      border: "rgba(255, 255, 255, 0.1)"
    },
    light: {
      bgPrimary: "#fafafa",
      bgSecondary: "#f5f5f0",
      bgTertiary: "#e8e8e8",
      textPrimary: "#1a1a1a",
      textSecondary: "#666666",
      textMuted: "#999999",
      textContrast: "#ffffff", // For text on dark backgrounds
      border: "rgba(0, 0, 0, 0.1)"
    }
  },

  fonts: {
    primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
    display: "'Bebas Neue', 'Impact', 'Arial Black', sans-serif",

    sizes: {
      heroTitle: "clamp(48px, 8vw, 96px)",
      heroSubtitle: "clamp(18px, 3vw, 32px)",
      sectionTitle: "clamp(32px, 5vw, 56px)",
      sectionSubtitle: "clamp(20px, 3vw, 28px)",
      bodyLarge: "18px",
      bodyMedium: "16px",
      bodySmall: "14px",
      caption: "12px"
    },

    weights: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
      extraBold: 800
    },

    lineHeights: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.8
    }
  },

  spacing: {
    xs: "0.5rem",   // 8px
    sm: "1rem",     // 16px
    md: "1.5rem",   // 24px
    lg: "2rem",     // 32px
    xl: "3rem",     // 48px
    "2xl": "4rem",  // 64px
    "3xl": "6rem",  // 96px

    sectionPadding: "120px 5%",
    sectionPaddingMobile: "60px 5%",
    containerMaxWidth: "1400px",
    gridGap: "2rem"
  },

  borders: {
    radiusSm: "8px",
    radiusMd: "16px",
    radiusLg: "24px",
    radiusFull: "50px",
    width: "2px"
  },

  transitions: {
    fast: "0.2s ease",
    medium: "0.3s ease",
    slow: "0.5s ease",
    verySlow: "0.8s ease"
  },

  shadows: {
    sm: "0 2px 8px rgba(0, 0, 0, 0.1)",
    md: "0 4px 16px rgba(0, 0, 0, 0.2)",
    lg: "0 8px 32px rgba(0, 0, 0, 0.3)",
    xl: "0 16px 64px rgba(0, 0, 0, 0.4)"
  },

  zIndex: {
    background: -1,
    base: 0,
    content: 10,
    navbar: 100,
    overlay: 500,
    modal: 1000,
    loader: 9999
  }
};

// ============================================
// FLAVOR VARIANTS
// ============================================

export const FLAVORS = [
  {
    id: 1,
    slug: "spicy",
    name: "SPICY",
    subtitle: "Masala Makhana",
    description: "A fiery blend of traditional Indian spices with a satisfying crunch. Perfect for those who crave bold, intense flavors.",
    themeColor: "#D32F2F",
    themeColorHover: "#B71C1C",
    mode: "dark",

    // WebP Animation Sequence
    webpSequence: {
      basePath: "./assets/spicy/",
      fileName: "frame_",
      frameCount: 240,
      frameFormat: "0001", // Will generate: frame_0001.webp, frame_0002.webp
      extension: ".webp"
    },

    // Product Images
    images: {
      hero: "./assets/spicy/hero.png",
      cta: "./assets/spicy/hero.png",
      product: "./assets/spicy/hero.png",
      thumbnail: "./assets/spicy/hero.png"
    },

    // Nutrition specific to this flavor (optional)
    calories: 140,

    // Keywords for SEO
    keywords: ["spicy makhana", "masala fox nuts", "indian snack", "healthy spicy snack"]
  },

  {
    id: 2,
    slug: "mint",
    name: "MINT",
    subtitle: "Cool Mint Makhana",
    description: "Refreshing mint flavor with a cool, crisp finish. A perfect balance of freshness and crunch for any time snacking.",
    themeColor: "#4CAF50",
    themeColorHover: "#388E3C",
    mode: "dark",

    webpSequence: {
      basePath: "./assets/mint/",
      fileName: "frame_",
      frameCount: 240,
      frameFormat: "0001",
      extension: ".webp"
    },

    images: {
      hero: "./assets/mint/hero.png",
      cta: "./assets/mint/hero.png",
      product: "./assets/mint/hero.png",
      thumbnail: "./assets/mint/hero.png"
    },

    calories: 135,
    keywords: ["mint makhana", "cool mint snack", "refreshing fox nuts", "healthy mint snack"]
  },

  {
    id: 3,
    slug: "chocolate",
    name: "CHOCOLATE",
    subtitle: "Choco Crunch Makhana",
    description: "Decadent chocolate-coated makhana for guilt-free indulgence. Rich, smooth, and irresistibly crunchy.",
    themeColor: "#5D4037",
    themeColorHover: "#4E342E",
    mode: "dark",

    webpSequence: {
      basePath: "./assets/chocolate/",
      fileName: "frame_",
      frameCount: 240,
      frameFormat: "0001",
      extension: ".webp"
    },

    images: {
      hero: "./assets/chocolate/hero.png",
      cta: "./assets/chocolate/hero.png",
      product: "./assets/chocolate/hero.png",
      thumbnail: "./assets/chocolate/hero.png"
    },

    calories: 155,
    keywords: ["chocolate makhana", "choco fox nuts", "sweet makhana", "healthy chocolate snack"]
  },

  {
    id: 4,
    slug: "classic",
    name: "CLASSIC",
    subtitle: "Lightly Salted",
    description: "Simple, pure, perfectly salted. The original flavor that started it all - timeless and delicious.",
    themeColor: "#F5F5DC",
    themeColorHover: "#E8E8CE",
    mode: "light",

    webpSequence: {
      basePath: "./assets/classic/",
      fileName: "frame_",
      frameCount: 240,
      frameFormat: "0001",
      extension: ".webp"
    },

    images: {
      hero: "./assets/classic/hero.png",
      cta: "./assets/classic/hero.png",
      product: "./assets/classic/hero.png",
      thumbnail: "./assets/classic/hero.png"
    },

    calories: 130,
    keywords: ["salted makhana", "classic fox nuts", "original makhana", "healthy salted snack"]
  }
];

// ============================================
// NAVIGATION MENU
// ============================================

export const NAVIGATION = {
  items: [
    {
      label: "Product",
      href: "#product",
      icon: "📦" // Optional
    },
    {
      label: "Benefits",
      href: "#benefits",
      icon: "💪"
    },
    {
      label: "Nutrition",
      href: "#nutrition",
      icon: "🥗"
    },
    {
      label: "Reviews",
      href: "#reviews",
      icon: "⭐"
    },
    {
      label: "FAQ",
      href: "#faq",
      icon: "❓"
    },
    {
      label: "Contact",
      href: "#contact",
      icon: "📞"
    }
  ],

  // Sticky navbar settings
  stickyOffset: 100, // Becomes sticky after 100px scroll
  height: "80px"
};

// ============================================
// HERO SECTION
// ============================================

export const HERO = {
  cta: {
    primary: {
      text: "SHOP NOW",
      link: "#shop",
      ariaLabel: "Shop Captain Makhana flavors"
    },
    secondary: {
      text: "LEARN MORE",
      link: "#product",
      ariaLabel: "Learn more about Captain Makhana"
    }
  },

  navigation: {
    prevLabel: "PREV",
    nextLabel: "NEXT",
    arrowUp: "↑",
    arrowDown: "↓"
  },

  socialIcons: {
    size: "24px",
    spacing: "20px",
    items: [
      { name: "instagram", icon: "instagram-icon.svg" },
      { name: "facebook", icon: "facebook-icon.svg" },
      { name: "twitter", icon: "twitter-icon.svg" },
      { name: "youtube", icon: "youtube-icon.svg" }
    ]
  },

  loader: {
    messages: [
      "Preparing your snacking experience...",
      "Loading fresh makhana...",
      "Almost there..."
    ],
    logoPath: "./assets/logo/captain-makhana-logo.svg",
    minLoadTime: 1000 // Minimum loading time in ms
  }
};

// ============================================
// CONTENT SECTIONS
// ============================================

export const SECTIONS = {

  // ========== PRODUCT / ABOUT ==========
  product: {
    id: "product",
    headline: "From Mithila's Sacred Ponds to Your Snack Bowl",
    subheadline: "The Captain's Journey",
    body: `Captain Makhana brings you the finest fox nuts, sourced directly from the traditional farms of Mithila, Bihar - where makhana cultivation has been an art for generations.

We work with local farmers to ensure every bite is fresh, authentic, and packed with bold flavor. Our commitment to quality means you get premium makhana that's roasted to perfection and seasoned with care.`,

    cta: {
      text: "Discover Our Story",
      link: "#about",
      style: "primary"
    },

    image: {
      src: "./assets/images/mithila-farms.jpg",
      alt: "Makhana farms in Mithila, Bihar"
    },

    stats: [
      { value: "100%", label: "Natural Ingredients" },
      { value: "500+", label: "Partner Farmers" },
      { value: "10K+", label: "Happy Customers" }
    ]
  },

  // ========== BENEFITS ==========
  benefits: {
    id: "benefits",
    headline: "Pure Ingredients, Powerful Benefits",
    subheadline: "Just makhana, spices, and love",

    items: [
      {
        icon: "💪",
        iconAlt: "Protein icon",
        title: "High in Protein",
        description: "Power-packed with plant-based protein for sustained energy and muscle health."
      },
      {
        icon: "🔥",
        iconAlt: "Low calorie icon",
        title: "Low Calorie",
        description: "Guilt-free snacking with fewer calories than traditional chips and snacks."
      },
      {
        icon: "🛡️",
        iconAlt: "Antioxidants icon",
        title: "Rich in Antioxidants",
        description: "Loaded with flavonoids that support overall health and wellness."
      },
      {
        icon: "🌾",
        iconAlt: "Gluten-free icon",
        title: "Gluten-Free",
        description: "Perfect for gluten-sensitive individuals and clean eating lifestyles."
      },
      {
        icon: "🚫",
        iconAlt: "No artificial flavors icon",
        title: "No Artificial Flavors",
        description: "Only natural ingredients and authentic spices, nothing artificial."
      },
      {
        icon: "❤️",
        iconAlt: "Heart health icon",
        title: "Heart-Healthy",
        description: "Low in sodium and cholesterol, supporting cardiovascular wellness."
      }
    ]
  },

  // ========== NUTRITION FACTS ==========
  nutrition: {
    id: "nutrition",
    headline: "Nutrition Facts",
    servingSize: "30g (1 cup)",
    servingsPerContainer: "About 5",

    facts: {
      calories: 140,
      caloriesFromFat: 9,
      totalFat: "1g",
      totalFatDV: "2%",
      saturatedFat: "0g",
      saturatedFatDV: "0%",
      transFat: "0g",
      cholesterol: "0mg",
      cholesterolDV: "0%",
      sodium: "180mg",
      sodiumDV: "8%",
      totalCarbs: "28g",
      totalCarbsDV: "9%",
      dietaryFiber: "2g",
      dietaryFiberDV: "8%",
      totalSugars: "0g",
      addedSugars: "0g",
      addedSugarsDV: "0%",
      protein: "4g",
      proteinDV: "8%",
      vitaminD: "0mcg",
      vitaminDDV: "0%",
      calcium: "20mg",
      calciumDV: "2%",
      iron: "1mg",
      ironDV: "4%",
      potassium: "120mg",
      potassiumDV: "6%"
    },

    ingredients: "Makhana (Fox Nuts), Spices, Salt, Sunflower Oil",
    allergens: "May contain traces of nuts. Gluten-free.",
    disclaimer: "Percent Daily Values are based on a 2,000 calorie diet."
  },

  // ========== REVIEWS / TESTIMONIALS ==========
  reviews: {
    id: "reviews",
    headline: "What Our Snackers Say",
    subheadline: "Real reviews from real customers",

    stats: {
      averageRating: 4.8,
      totalReviews: 1247,
      fiveStarPercentage: 85
    },

    testimonials: [
      {
        id: 1,
        name: "Priya Sharma",
        location: "Mumbai, Maharashtra",
        rating: 5,
        date: "2024-01-15",
        quote: "Captain Makhana has completely changed my snacking game! The spicy flavor is addictive and so much healthier than chips. I keep a packet in my desk drawer at all times.",
        image: "./assets/reviews/priya.jpg",
        verified: true
      },
      {
        id: 2,
        name: "Rahul Verma",
        location: "Delhi, NCR",
        rating: 5,
        date: "2024-01-10",
        quote: "Love the mint flavor! Fresh, crunchy, and perfect for my post-workout snack. The quality is consistently excellent. Highly recommend!",
        image: "./assets/reviews/rahul.jpg",
        verified: true
      },
      {
        id: 3,
        name: "Anjali Reddy",
        location: "Bangalore, Karnataka",
        rating: 5,
        date: "2024-01-08",
        quote: "The chocolate makhana is my guilty pleasure - except it's not guilty at all! Delicious and nutritious. My kids love it too.",
        image: "./assets/reviews/anjali.jpg",
        verified: true
      },
      {
        id: 4,
        name: "Vikram Singh",
        location: "Pune, Maharashtra",
        rating: 4,
        date: "2024-01-05",
        quote: "Great quality and authentic taste. You can really tell these are sourced from the best farms. The packaging is also premium.",
        image: "./assets/reviews/vikram.jpg",
        verified: true
      }
    ],

    cta: {
      text: "Write a Review",
      link: "#write-review"
    }
  },

  // ========== FAQ ==========
  faq: {
    id: "faq",
    headline: "Frequently Asked Questions",
    subheadline: "Everything you need to know about Captain Makhana",

    questions: [
      {
        id: 1,
        question: "What is makhana?",
        answer: "Makhana, also known as fox nuts or lotus seeds, are puffed seeds from the lotus flower. They've been a traditional Indian snack for centuries and are packed with nutrients like protein, fiber, and antioxidants.",
        category: "Product"
      },
      {
        id: 2,
        question: "How is it different from popcorn?",
        answer: "While both are puffed snacks, makhana is higher in protein, lower in calories, and contains more nutrients like calcium and iron. It's also naturally gluten-free, easier to digest, and has a unique texture that's crunchier and more satisfying.",
        category: "Product"
      },
      {
        id: 3,
        question: "Is it really healthy?",
        answer: "Absolutely! Makhana is low in calories (140 cal per serving), high in protein (4g), rich in antioxidants, and gluten-free. It's an excellent alternative to traditional fried snacks and fits perfectly into a balanced diet.",
        category: "Health"
      },
      {
        id: 4,
        question: "Where do you source from?",
        answer: "We source directly from traditional farmers in the Mithila region of Bihar, India - the heartland of makhana cultivation. This ensures authenticity, supports local communities, and guarantees the highest quality fox nuts.",
        category: "Sourcing"
      },
      {
        id: 5,
        question: "How long does it stay fresh?",
        answer: "When stored in an airtight container in a cool, dry place, Captain Makhana stays fresh and crunchy for up to 6 months. Always check the best-before date printed on the package.",
        category: "Storage"
      },
      {
        id: 6,
        question: "Do you ship pan-India?",
        answer: "Yes! We ship to all major cities and towns across India. Orders typically arrive within 3-7 business days depending on your location. Free shipping on orders above ₹499.",
        category: "Shipping"
      },
      {
        id: 7,
        question: "Are there any artificial ingredients?",
        answer: "No! We use only natural ingredients - makhana, authentic spices, and minimal salt. No artificial flavors, colors, or preservatives. Just pure, wholesome goodness.",
        category: "Ingredients"
      },
      {
        id: 8,
        question: "Can I buy in bulk?",
        answer: "Yes! We offer bulk orders for corporate gifting, events, and wholesale. Contact us at hello@captainmakhana.com for bulk pricing and custom packaging options.",
        category: "Orders"
      }
    ],

    cta: {
      text: "Still have questions? Contact Us",
      link: "#contact"
    }
  },

  // ========== FINAL CTA ==========
  finalCTA: {
    id: "final-cta",
    headline: "Ready to Snack Smarter?",
    subheadline: "Join thousands of health-conscious snackers across India",
    body: "Experience the perfect blend of taste and nutrition with Captain Makhana. Bold flavors, premium quality, straight from Mithila's farms.",

    primaryCTA: {
      text: "Shop All Flavors",
      link: "#shop",
      style: "filled"
    },

    secondaryCTA: {
      text: "Subscribe & Save 15%",
      link: "#subscribe",
      style: "outlined"
    },

    features: [
      "✓ Free shipping above ₹499",
      "✓ 100% money-back guarantee",
      "✓ Premium quality, farm-fresh"
    ]
  }
};

// ============================================
// FOOTER
// ============================================

export const FOOTER = {
  columns: {
    brand: {
      logo: "./assets/logo/captain-makhana-logo.svg",
      tagline: "Bold snacking from Mithila's farms",
      description: "Premium makhana sourced directly from traditional farmers in Bihar."
    },

    quickLinks: {
      title: "Quick Links",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Our Story", href: "#story" },
        { label: "Shop All Flavors", href: "#shop" },
        { label: "Track Your Order", href: "#track" },
        { label: "Bulk Orders", href: "#bulk" },
        { label: "Become a Partner", href: "#partner" }
      ]
    },

    support: {
      title: "Customer Support",
      links: [
        { label: "Contact Us", href: "#contact" },
        { label: "FAQs", href: "#faq" },
        { label: "Shipping Policy", href: "#shipping" },
        { label: "Return & Refund Policy", href: "#returns" },
        { label: "Terms & Conditions", href: "#terms" },
        { label: "Privacy Policy", href: "#privacy" }
      ]
    },

    contact: {
      title: "Get in Touch",
      email: "hello@captainmakhana.com",
      phone: "+91 98765 43210",
      address: "Madhubani, Bihar 847211, India",
      hours: "Mon-Sat: 9:00 AM - 6:00 PM IST"
    }
  },

  newsletter: {
    headline: "Stay Updated",
    description: "Subscribe to get special offers, recipes, and health tips.",
    placeholder: "Enter your email",
    buttonText: "Subscribe",
    privacyText: "We respect your privacy. Unsubscribe anytime."
  },

  bottomBar: {
    copyright: "© 2024 Captain Makhana. All rights reserved.",
    legalLinks: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
      { label: "Cookie Policy", href: "#cookies" }
    ]
  },

  paymentMethods: [
    { name: "Visa", icon: "./assets/icons/payments/visa.svg" },
    { name: "Mastercard", icon: "./assets/icons/payments/mastercard.svg" },
    { name: "UPI", icon: "./assets/icons/payments/upi.svg" },
    { name: "Paytm", icon: "./assets/icons/payments/paytm.svg" },
    { name: "Google Pay", icon: "./assets/icons/payments/gpay.svg" },
    { name: "PhonePe", icon: "./assets/icons/payments/phonepe.svg" }
  ],

  certifications: [
    { name: "FSSAI", icon: "./assets/icons/certs/fssai.svg" },
    { name: "ISO Certified", icon: "./assets/icons/certs/iso.svg" }
  ]
};

// ============================================
// PARALLAX ANIMATION SETTINGS
// ============================================

export const PARALLAX = {
  frameRate: 30,
  totalFrames: 240,
  animationDuration: 8, // seconds (240 frames / 30 fps)

  preload: {
    enabled: true,
    bufferFrames: 10, // Load 10 frames ahead
    initialLoadPercentage: 100 // Load 100% of first variant before showing
  },

  scroll: {
    smoothness: 0.1, // Lower = smoother but slower response (0.05-0.2)
    easing: "easeInOutQuad"
  },

  performance: {
    useRequestAnimationFrame: true,
    throttleScroll: 16, // Throttle scroll events to ~60fps
    lazyLoadThreshold: 0.5 // Load when 50% visible
  }
};

// ============================================
// LOADING SCREEN
// ============================================

export const LOADER = {
  enabled: true,
  minLoadTime: 1000, // Minimum loading time in ms (for UX)

  messages: [
    "Preparing your snacking experience...",
    "Loading fresh makhana from Mithila...",
    "Seasoning with bold flavors...",
    "Almost ready..."
  ],

  messageInterval: 2000, // Change message every 2 seconds

  animation: {
    fadeIn: 0.3,
    fadeOut: 0.8
  },

  progressBar: {
    height: "4px",
    color: "var(--theme-color)",
    backgroundColor: "rgba(255, 255, 255, 0.1)"
  }
};

// ============================================
// ANIMATION TIMINGS
// ============================================

export const ANIMATIONS = {
  fadeIn: 0.5,
  fadeOut: 0.5,
  slideIn: 0.6,
  slideOut: 0.4,
  scaleUp: 0.3,
  scaleDown: 0.3,
  colorTransition: 0.3,
  textSwitch: 0.5,

  // Scroll-triggered animations
  scrollReveal: {
    distance: "50px",
    duration: 0.8,
    delay: 0.2,
    easing: "ease-out"
  }
};

// ============================================
// SEO & META INFORMATION
// ============================================

export const SEO = {
  title: "Captain Makhana - Premium Healthy Snacks | Fox Nuts from Mithila",
  description: "Bold flavors, premium quality makhana (fox nuts) sourced from Mithila's farms. High protein, low calorie, gluten-free healthy snacks. Shop now!",
  keywords: "makhana, fox nuts, healthy snacks, protein snacks, gluten-free snacks, indian snacks, lotus seeds, captain makhana",
  author: "Captain Makhana",

  openGraph: {
    siteName: "Captain Makhana",
    type: "website",
    image: "./assets/og-image.jpg",
    imageAlt: "Captain Makhana - Premium Healthy Snacks"
  },

  twitter: {
    card: "summary_large_image",
    site: "@captainmakhana",
    creator: "@captainmakhana"
  }
};

// ============================================
// PLACEHOLDER IMAGES (Development)
// ============================================

export const PLACEHOLDERS = {
  heroBackground: "https://placehold.co/1920x1080/D32F2F/FFFFFF/webp?text=Captain+Makhana+Hero",
  productCard: "https://placehold.co/800x800/4CAF50/FFFFFF/webp?text=Product",
  ctaImage: "https://placehold.co/600x600/5D4037/FFFFFF/webp?text=CTA",
  testimonialAvatar: "https://placehold.co/100x100/CCCCCC/666666/webp?text=Avatar",
  farmImage: "https://placehold.co/1200x800/8BC34A/FFFFFF/webp?text=Mithila+Farms"
};

// ============================================
// FEATURE FLAGS (Enable/Disable Features)
// ============================================

export const FEATURES = {
  parallaxScroll: true,
  darkModeToggle: true,
  flavorSwitcher: true,
  loadingScreen: true,
  newsletter: true,
  reviews: true,
  analytics: false, // Google Analytics
  chatbot: false     // Customer support chatbot
};

// ============================================
// API ENDPOINTS (If needed)
// ============================================

export const API = {
  baseURL: "https://api.captainmakhana.com",
  endpoints: {
    products: "/products",
    reviews: "/reviews",
    newsletter: "/newsletter/subscribe",
    contact: "/contact"
  }
};

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Generate frame URL from flavor and frame number
 */
export function getFrameURL(flavor, frameNumber) {
  const { basePath, fileName, frameFormat, extension } = flavor.webpSequence;
  const paddedNumber = String(frameNumber).padStart(frameFormat.length, '0');
  return `${basePath}${fileName}${paddedNumber}${extension}`;
}

/**
 * Get flavor by ID
 */
export function getFlavorById(id) {
  return FLAVORS.find(flavor => flavor.id === id);
}

/**
 * Get flavor by slug
 */
export function getFlavorBySlug(slug) {
  return FLAVORS.find(flavor => flavor.slug === slug);
}

/**
 * Get next flavor (circular)
 */
export function getNextFlavor(currentId) {
  const currentIndex = FLAVORS.findIndex(f => f.id === currentId);
  const nextIndex = (currentIndex + 1) % FLAVORS.length;
  return FLAVORS[nextIndex];
}

/**
 * Get previous flavor (circular)
 */
export function getPrevFlavor(currentId) {
  const currentIndex = FLAVORS.findIndex(f => f.id === currentId);
  const prevIndex = (currentIndex - 1 + FLAVORS.length) % FLAVORS.length;
  return FLAVORS[prevIndex];
}

// ============================================
// EXPORTS
// ============================================

export default {
  BRAND,
  THEME,
  FLAVORS,
  NAVIGATION,
  HERO,
  SECTIONS,
  FOOTER,
  PARALLAX,
  LOADER,
  ANIMATIONS,
  SEO,
  PLACEHOLDERS,
  FEATURES,
  API,
  // Helper functions
  getFrameURL,
  getFlavorById,
  getFlavorBySlug,
  getNextFlavor,
  getPrevFlavor
};
