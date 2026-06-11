# KOOLFE — Design System Documentation

> **Brand Identity:** Modern Heritage · Mughal Luxury Modernism  
> **Trade Name:** Cafeteria Jalatico Company · Gulf Kulfi for Sweets Company W.L.L.  
> **Location:** West Abu Fatira Craft, Mubarak Al-Kabeer, Kuwait  
> **License:** Kuwait Ministry of Commerce 2026/9249

---

## 1. Design Philosophy

**Mughal Luxury Modernism** — where Indo-Persian opulence meets Swiss editorial precision. The design language bridges centuries-old kulfi craftsmanship with a modern B2B corporate aesthetic. Every decision reinforces two parallel narratives: *artisan heritage* and *operational excellence*.

| Principle | Expression |
|---|---|
| **Cultural Depth** | Deep purple canvas evoking royal Indian court aesthetics |
| **Editorial Precision** | Asymmetric layouts, deliberate whitespace, typographic hierarchy |
| **Warmth & Craft** | Cream backgrounds, warm gradients, hand-crafted ingredient photography |
| **B2B Credibility** | Clean data presentation, license badges, wholesale pricing clarity |

---

## 2. Color Palette

### Primary Brand Colors

| Token | Hex | OKLCH | Usage |
|---|---|---|---|
| `--brand-purple` | `#5B3259` | `oklch(0.32 0.09 320)` | Primary background, navbar, footer, hero overlay |
| `--brand-purple-deep` | `#3a1f38` | `oklch(0.22 0.08 320)` | Hero section bg, dark overlays |
| `--brand-gold` | `#E8E07D` | `oklch(0.88 0.10 100)` | CTA buttons, accent lines, headings highlight |
| `--brand-cream` | `#FFF9F0` | `oklch(0.99 0.01 80)` | Section backgrounds, body text on dark |
| `--brand-mint` | `#B7D9D8` | `oklch(0.84 0.05 195)` | Decorative orbs, eyebrow labels, dividers |

### Flavor Accent Colors

Each kulfi flavour has a dedicated pastel accent used for badge backgrounds and card gradients.

| Flavour | Badge Color | Gradient From | Gradient To |
|---|---|---|---|
| Kesar Malai | `#F5D9A0` | `#F5D9A0` | `#E8C97A` |
| Pistachio | `#D4E8D4` | `#D4E8D4` | `#A8D4A8` |
| Mango | `#FFE0A0` | `#FFD580` | `#FFA040` |
| Chikkoo | `#F0DFC0` | `#E8C898` | `#C8A070` |
| Matka | `#B7D9D8` | `#B7D9D8` | `#7ABAB8` |
| Tender Coconut | `#C8E8D8` | `#C8E8D8` | `#70C8A8` |
| Rose Almond | `#FFB8D1` | `#FFB8D1` | `#FF80A8` |
| Dates | `#F0D4A0` | `#D4A870` | `#A87840` |

### Semantic Color Roles

| Role | Light Section | Dark Section |
|---|---|---|
| Background | `#FFF9F0` | `#5B3259` |
| Foreground / Body Text | `#8B6B8A` | `rgba(255,249,240,0.82)` |
| Heading Text | `#5B3259` | `#FFF9F0` |
| Accent / Highlight | `#E8E07D` | `#E8E07D` |
| Muted Text | `rgba(91,50,89,0.5)` | `rgba(255,249,240,0.5)` |
| Border / Divider | `rgba(91,50,89,0.12)` | `rgba(232,224,125,0.15)` |

---

## 3. Typography System

### Font Families

| Role | Family | Google Fonts Import |
|---|---|---|
| **Display / Headings** | Playfair Display | `family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500` |
| **Body / UI / Labels** | Montserrat | `family=Montserrat:wght@300;400;500;600;700` |

```html
<!-- Google Fonts CDN (in <head>) -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
```

### CSS Font Variables

```css
--font-display: 'Playfair Display', Georgia, serif;
--font-body:    'Montserrat', system-ui, sans-serif;
```

### Type Scale

| Level | Font | Style | Size | Weight | Tracking | Usage |
|---|---|---|---|---|---|---|
| **Hero Display** | Playfair Display | Italic | `clamp(3.2rem, 8vw, 6.5rem)` | 500 | `-0.02em` | Hero heading |
| **Section Title** | Playfair Display | Normal | `2.5rem – 3.5rem` | 500 | `-0.01em` | Section headings |
| **Card Title** | Playfair Display | Normal | `1.25rem` | 500 | `0` | Product card names |
| **Tagline** | Playfair Display | Italic | `1.25rem – 1.5rem` | 400 | `0` | Subtitles, taglines |
| **Eyebrow** | Montserrat | Normal | `0.75rem` | 600 | `0.25em` | Section labels (ALL CAPS) |
| **Body** | Montserrat | Normal | `0.875rem – 1rem` | 400 | `0` | Descriptions, paragraphs |
| **UI Label** | Montserrat | Normal | `0.75rem` | 600 | `0.18em` | Nav links, buttons (ALL CAPS) |
| **Badge** | Montserrat | Normal | `0.75rem` | 600 | `0.1em` | Flavour badges |
| **Price** | Montserrat | Normal | `0.875rem` | 600 | `0` | KWD pricing |

---

## 4. Spacing System

Based on a **4px base unit** with Tailwind's default scale.

| Token | Value | Tailwind Class | Usage |
|---|---|---|---|
| `space-1` | 4px | `p-1` | Tight internal padding |
| `space-2` | 8px | `p-2` | Icon padding, small gaps |
| `space-3` | 12px | `p-3` | Badge padding |
| `space-4` | 16px | `p-4` | Card body padding |
| `space-5` | 20px | `p-5` | Card body padding (desktop) |
| `space-6` | 24px | `p-6` | Section inner padding |
| `space-8` | 32px | `p-8` | Component gaps |
| `space-10` | 40px | `p-10` | Section padding (mobile) |
| `space-16` | 64px | `p-16` | Section padding (tablet) |
| `space-24` | 96px | `py-24` | Section vertical padding (desktop) |

---

## 5. Border Radius

| Token | Value | Usage |
|---|---|---|
| `rounded-full` | 9999px | CTA buttons, badges, dots |
| `rounded-3xl` | 24px | Product cards |
| `rounded-2xl` | 16px | Hero image frame |
| `rounded-xl` | 12px | Feature cards, glassmorphism panels |
| `rounded-lg` | 8px | Input fields, small cards |

---

## 6. Shadow System

| Level | CSS Value | Usage |
|---|---|---|
| **Card Default** | `0 4px 32px rgba(91,50,89,0.10)` | Product cards at rest |
| **Card Hover** | `0 12px 48px rgba(91,50,89,0.18)` | Product cards on hover |
| **CTA Primary** | `0 6px 32px rgba(232,224,125,0.55), 0 2px 8px rgba(0,0,0,0.3)` | Gold CTA button |
| **CTA Secondary** | `0 4px 20px rgba(0,0,0,0.3)` | Outlined CTA button |
| **Navbar** | `0 2px 24px rgba(0,0,0,0.18)` | Scrolled navbar |
| **Arrow Button** | `0 4px 16px rgba(91,50,89,0.25)` | Carousel prev/next |

---

## 7. Component Specifications

### 7.1 Navbar

| Property | Value |
|---|---|
| Height | 64px (`h-16`) |
| Position | Fixed, `z-50` |
| Default bg | Transparent |
| Scrolled bg | `rgba(91,50,89,0.97)` + `blur(14px)` |
| Logo | `KoolfeLogoHDNOBG.png` — white-filtered (`brightness(0) invert(1)`) |
| Logo height | 40px |
| Nav links | Montserrat 600, 0.75rem, tracking `0.18em`, uppercase, `#FFF9F0` |
| CTA button | Rounded-full, `#E8E07D` bg, `#5B3259` text, px-5 py-2 |
| CTA label | "Contact Us" → `https://wa.me/96556571366` |
| Mobile menu | Slide-down drawer, `max-height` animation |

### 7.2 Hero Section

| Property | Value |
|---|---|
| Height | `min-h-screen` |
| Background | Full-bleed composite kulfi image |
| Overlay | `linear-gradient(105deg, rgba(58,31,56,0.97) 0%, rgba(58,31,56,0.08) 100%)` |
| Layout | Asymmetric — text left-anchored, image bleeds right |
| Top accent | 2px gold gradient line |
| Heading | Playfair Display Italic, `clamp(3.2rem, 8vw, 6.5rem)`, "Indian" in `#E8E07D` |
| Divider | 72px × 2px gold gradient bar |
| Body text | Montserrat 300, 1rem, `rgba(255,249,240,0.82)` |
| Primary CTA | "Explore Flavours" — gold fill, deep purple text, gold glow shadow |
| Secondary CTA | "Contact Us" — gold border + gold text, WhatsApp icon |
| Scroll indicator | Bouncing ChevronDown, `#E8E07D`, bottom-center |

### 7.3 Product Carousel

| Property | Value |
|---|---|
| Background | `#FFF9F0` + paisley pattern overlay |
| Card width | `80vw` mobile / `46vw` tablet / `calc(33.333% - 14px)` desktop |
| Card radius | `rounded-3xl` (24px) |
| Card bg | White |
| Card shadow | `0 4px 32px rgba(91,50,89,0.10)` |
| Card hover | `translateY(-6px)` + deeper shadow |
| Image area | `aspect-ratio: 3/4`, `object-cover` |
| Scroll | CSS `scroll-snap-type: x mandatory` |
| Controls | Prev/Next — 44px circle, `#5B3259` bg, hidden on mobile |
| Dots | 8px circle → 28px pill when active, `#5B3259` fill |
| Drag | Mouse drag supported on desktop |

### 7.4 Product Card

| Property | Value |
|---|---|
| Badge | Rounded-full, flavour accent color bg, `#5B3259` text, Montserrat 600 xs |
| Card title | Playfair Display 500, 1.25rem, `#5B3259` |
| Description | Montserrat 400, 0.875rem, `#8B6B8A` |
| Price | Montserrat 600, 0.875rem, `#5B3259` |
| Color dot | 20px circle, flavour accent color |

### 7.5 CTA Buttons

| Variant | Background | Text | Border | Shadow |
|---|---|---|---|---|
| **Primary** | `#E8E07D` | `#3a1f38` | None | Gold glow `rgba(232,224,125,0.55)` |
| **Secondary** | `rgba(232,224,125,0.15)` | `#E8E07D` | `2px solid #E8E07D` | Dark `rgba(0,0,0,0.3)` |
| **Outline Purple** | Transparent | `#5B3259` | `1px solid rgba(91,50,89,0.12)` | None |
| **WhatsApp** | `#25D366` | `#FFFFFF` | None | Standard |

All buttons: `rounded-full`, Montserrat 600, `0.875rem`, tracking `0.18em`, uppercase.  
Active state: `scale(0.95)`. Hover: `opacity(0.85–0.90)` or `scale(1.05)`.

---

## 8. Animation Guidelines

| Animation | Duration | Easing | Trigger |
|---|---|---|---|
| Section entrance (fade + slide up) | 600ms | `cubic-bezier(0.23, 1, 0.32, 1)` | IntersectionObserver threshold 0.2 |
| Stagger delay per item | +80ms per child | — | Same observer |
| Card hover lift | 300ms | `cubic-bezier(0.23, 1, 0.32, 1)` | `mouseenter` |
| Navbar bg transition | 300ms | `ease` | Scroll > 60px |
| Mobile menu drawer | 300ms | `ease` | `max-height` toggle |
| Scroll indicator bounce | 2s | `ease` infinite | Always |
| Button active press | 160ms | `ease-out` | `:active` |
| Carousel scroll | Native smooth | — | Arrow click / drag |

---

## 9. Layout Grid

| Breakpoint | Max Width | Horizontal Padding | Columns |
|---|---|---|---|
| Mobile (`< 640px`) | 100% | 16px | 1 |
| Tablet (`640–1024px`) | 100% | 24px | 2 |
| Desktop (`> 1024px`) | 1280px | 32px | 3–4 |

**Hero:** Full-bleed, no max-width constraint.  
**Content sections:** `max-w-7xl mx-auto` (1280px) or `max-w-6xl` (1152px).

---

## 10. Product Catalogue

All products priced at **KWD 0.250** retail / **KWD 0.225** wholesale.

| # | Product Name | Flavour Profile | Badge Color | Image Asset |
|---|---|---|---|---|
| 1 | Kesar Malai Kulfi | Saffron · Rich · Fragrant | `#F5D9A0` | `KESARMALAIPOSTER.png` |
| 2 | Pistachio Kulfi | Pistachio · Creamy · Nutty | `#D4E8D4` | `PISTACHIOPOSTER.jpg` |
| 3 | Mango Kulfi | Mango · Fruity · Sweet | `#FFE0A0` | `MANGOPOSTER.png` |
| 4 | Chikkoo Kulfi | Chikkoo · Sweet · Malty | `#F0DFC0` | `CHIKKOPOSTER.png` |
| 5 | Matka Kulfi | Matka · Earthy · Traditional | `#B7D9D8` | `MATKAPOSTER.png` |
| 6 | Tender Coconut Kulfi | Coconut · Cool · Refreshing | `#C8E8D8` | `TENDERCOCONUTPOSTER.png` |
| 7 | Rose Almond Kulfi | Rose · Fragrant · Nutty | `#FFB8D1` | `ROSEALMONDPOSTER.png` |
| 8 | Dates Kulfi | Dates · Rich · Earthy | `#F0D4A0` | `DatesKulfiPoster.png` |

---

## 11. Brand Assets

| Asset | File | CDN Path | Usage |
|---|---|---|---|
| Logo (cartoon, full color) | `koolfe-logo.jpg.webp` | `/manus-storage/koolfe-logo-new_05a20587.webp` | Navbar, hero |
| Logo (HD, no bg) | `KoolfeLogoHDNOBG.png` | `/manus-storage/KoolfeLogoHDNOBG_383c0dc2.png` | White-filtered on dark bg |
| Hero composite image | `koolfe_hero_composite.jpg` | CDN (generated) | Hero section background |
| Paisley pattern | `koolfe_pattern_bg.png` | CDN (generated) | Products & Contact section bg |

---

## 12. Business Information

| Field | Value |
|---|---|
| **Trade Name** | Cafeteria Jalatico Company |
| **Branch** | Royal Quality Catering |
| **Parent Company** | Gulf Kulfi for Sweets Company W.L.L. |
| **License** | Kuwait Ministry of Commerce 2026/9249 |
| **Automated Address** | 21183766 |
| **WhatsApp** | +965 5657 1366 |
| **Location** | West Abu Fatira Craft, Mubarak Al-Kabeer, Kuwait |
| **Push Freezer Dimensions** | 60 cm × 50 cm × 70 cm |

---

## 13. Figma Tokens (JSON)

The following JSON is compatible with the **Tokens Studio for Figma** plugin. Import via: *Tokens Studio → Import → Paste JSON*.

```json
{
  "global": {
    "color": {
      "brand": {
        "purple": { "value": "#5B3259", "type": "color" },
        "purpleDeep": { "value": "#3a1f38", "type": "color" },
        "gold": { "value": "#E8E07D", "type": "color" },
        "cream": { "value": "#FFF9F0", "type": "color" },
        "mint": { "value": "#B7D9D8", "type": "color" }
      },
      "flavor": {
        "kesarMalai": { "value": "#F5D9A0", "type": "color" },
        "pistachio": { "value": "#D4E8D4", "type": "color" },
        "mango": { "value": "#FFE0A0", "type": "color" },
        "chikkoo": { "value": "#F0DFC0", "type": "color" },
        "matka": { "value": "#B7D9D8", "type": "color" },
        "tenderCoconut": { "value": "#C8E8D8", "type": "color" },
        "roseAlmond": { "value": "#FFB8D1", "type": "color" },
        "dates": { "value": "#F0D4A0", "type": "color" }
      },
      "text": {
        "onDark": { "value": "#FFF9F0", "type": "color" },
        "onLight": { "value": "#5B3259", "type": "color" },
        "muted": { "value": "#8B6B8A", "type": "color" },
        "accent": { "value": "#E8E07D", "type": "color" }
      }
    },
    "typography": {
      "fontFamilies": {
        "display": { "value": "Playfair Display", "type": "fontFamilies" },
        "body": { "value": "Montserrat", "type": "fontFamilies" }
      },
      "fontWeights": {
        "light": { "value": "300", "type": "fontWeights" },
        "regular": { "value": "400", "type": "fontWeights" },
        "medium": { "value": "500", "type": "fontWeights" },
        "semibold": { "value": "600", "type": "fontWeights" },
        "bold": { "value": "700", "type": "fontWeights" }
      },
      "fontSize": {
        "xs": { "value": "12", "type": "fontSizes" },
        "sm": { "value": "14", "type": "fontSizes" },
        "base": { "value": "16", "type": "fontSizes" },
        "lg": { "value": "18", "type": "fontSizes" },
        "xl": { "value": "20", "type": "fontSizes" },
        "2xl": { "value": "24", "type": "fontSizes" },
        "3xl": { "value": "30", "type": "fontSizes" },
        "4xl": { "value": "36", "type": "fontSizes" },
        "5xl": { "value": "48", "type": "fontSizes" },
        "heroMin": { "value": "51", "type": "fontSizes" },
        "heroMax": { "value": "104", "type": "fontSizes" }
      },
      "letterSpacing": {
        "tight": { "value": "-0.02em", "type": "letterSpacing" },
        "normal": { "value": "0", "type": "letterSpacing" },
        "wide": { "value": "0.18em", "type": "letterSpacing" },
        "wider": { "value": "0.25em", "type": "letterSpacing" },
        "widest": { "value": "0.3em", "type": "letterSpacing" }
      }
    },
    "spacing": {
      "1": { "value": "4", "type": "spacing" },
      "2": { "value": "8", "type": "spacing" },
      "3": { "value": "12", "type": "spacing" },
      "4": { "value": "16", "type": "spacing" },
      "5": { "value": "20", "type": "spacing" },
      "6": { "value": "24", "type": "spacing" },
      "8": { "value": "32", "type": "spacing" },
      "10": { "value": "40", "type": "spacing" },
      "12": { "value": "48", "type": "spacing" },
      "16": { "value": "64", "type": "spacing" },
      "20": { "value": "80", "type": "spacing" },
      "24": { "value": "96", "type": "spacing" }
    },
    "borderRadius": {
      "sm": { "value": "8", "type": "borderRadius" },
      "md": { "value": "12", "type": "borderRadius" },
      "lg": { "value": "16", "type": "borderRadius" },
      "xl": { "value": "24", "type": "borderRadius" },
      "full": { "value": "9999", "type": "borderRadius" }
    },
    "boxShadow": {
      "cardDefault": { "value": "0 4px 32px rgba(91,50,89,0.10)", "type": "boxShadow" },
      "cardHover": { "value": "0 12px 48px rgba(91,50,89,0.18)", "type": "boxShadow" },
      "ctaPrimary": { "value": "0 6px 32px rgba(232,224,125,0.55)", "type": "boxShadow" },
      "navbar": { "value": "0 2px 24px rgba(0,0,0,0.18)", "type": "boxShadow" }
    }
  }
}
```

---

*Last updated: June 2026 · KOOLFE Brand Design System v1.0*
