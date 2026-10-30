# Plan: Umrah Agency Portal SaaS Design System & Complete App Router Experience

Convert Google Stitch "Umrah Agency Portal" into a pixel-perfect, reusable design system and Next.js 16 App Router application.

## 🎯 Architecture & Design Tokens
- **Design Theme:** Sanctuary Elegance (Emerald `#003527`/`#064e3b`, Radiant Gold `#d97706`/`#fe932c`, Slate `#262e42`, Pearl `#fbf9f5`)
- **Typography:** Cairo & Amiri (Google Fonts) with Material Symbols Outlined
- **Framework:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4
- **Direction:** RTL Native (`dir="rtl"`) with Arabic-first hospitality aesthetics & bilingual structural readiness

---

## 📋 Task Breakdown

### Task 1: Foundation & Design Tokens
- Update root `DESIGN.md` with complete YAML front-matter tokens from Stitch `Sanctuary Elegance`.
- Configure `rihab-travel/src/app/globals.css` with CSS variables, Tailwind v4 `@theme` mappings, Google Fonts (`Cairo`, `Amiri`, `Amiri Quran`), and Material Symbols CDN.
- **Verification:** Dev server builds without CSS syntax errors, custom font families and theme colors are verified.

### Task 2: Reusable UI Component Library
- Create reusable components in `rihab-travel/src/components/ui/`:
  - `Header.tsx`: Fixed glassmorphism navbar with navigation links, contact badges, mobile drawer, and CTA.
  - `Footer.tsx`: Rich agency footer with licenses, emergency contacts, quick links, and newsletter.
  - `PackageCard.tsx`: Reusable package card with distance indicator, duration, hotel badges, price tag, WhatsApp direct trigger, and booking link.
  - `SearchFilterBar.tsx`: Docked filter bar with Destination, Season/Month, Accommodation Tier, and search handler.
  - `BookingModal.tsx`: Interactive reservation modal with room calculator, traveler counters, and WhatsApp inquiry dispatcher.
  - `Badge.tsx`, `Button.tsx`, `KaabaProximityMeter.tsx`: Atomic components.
- **Verification:** Components render standalone without TypeScript errors.

### Task 3: Homepage Implementation (`/`)
- Assemble `rihab-travel/src/app/page.tsx`:
  - Hero slider with 3 rich photography slides, smooth auto-advance, and manual controls.
  - Docked interactive search & filter bar with dynamic filtering.
  - Featured Packages grid with live category tabs (VIP 5★, 4★ Deluxe, Economy, Ramadan).
  - Four pillars value proposition (فنادق صف أول، طيران مباشر، إشراف ديني، رعاية 24/7).
  - Live Prayer times widget & Makkah/Madinah weather ticker.
  - Verified pilgrim reviews slider.
- **Verification:** Homepage renders with working hero carousel, category filter switching, and booking modal triggers.

### Task 4: Umrah Packages Catalog Page (`/packages`)
- Build `rihab-travel/src/app/packages/page.tsx`:
  - Multi-faceted filter sidebar (Price range, Hotel category, Duration, Season, Flight airline).
  - Dynamic sort controls (Cheapest, Nearest to Haram, Highest rated).
  - Package listings with dynamic count and clear filter reset.
  - Custom VIP request banner for family/corporate delegations.
  - Packages FAQ accordion.
- **Verification:** Navigating to `/packages` displays filterable package grid with responsive drawer on mobile.

### Task 5: VIP Package Details Page (`/package/[id]`)
- Build `rihab-travel/src/app/package/[id]/page.tsx`:
  - Sticky booking summary panel with live room occupancy selector (Single, Double, Triple) and total price computation.
  - High-res photo gallery with Haram courtyard proximity meter.
  - Day-by-day interactive itinerary timeline (Makkah rituals -> Madinah Ziyarat).
  - In-depth hotel spotlights (Dar Al Tawhid & Dar Al Taqwa) with amenities and distance to Kaaba.
  - Inclusions/Exclusions checklist and visa requirement badges.
- **Verification:** Navigating to `/package/101` loads the complete VIP package details with functional room pricing calculator.

### Task 6: Comprehensive Pilgrim Guide Page (`/guide`)
- Build `rihab-travel/src/app/guide/page.tsx`:
  - Step-by-step interactive ritual guide (الإحرام، الطواف، السعي، التحلل) with theological tips.
  - Interactive luggage checklist (حقيبة المعتمر) with toggleable check items.
  - Official Nusuk platform regulations & Rawdah permit guides.
  - Ziyarat historical directory (Ghar Hira, Thawr, Quba Mosque, Mount Uhud).
  - Essential Umrah duaa cards with audio/copy trigger.
- **Verification:** Guide page renders interactive steps and working luggage checklist.

### Task 7: About Us Page (`/about`)
- Build `rihab-travel/src/app/about/page.tsx`:
  - Agency heritage, 15+ years experience story, vision & mission.
  - Accreditation badges (Ministry of Tourism, Ministry of Hajj & Umrah, IATA).
  - Metrics & impact counter (45,000+ pilgrims, 98.6% satisfaction).
  - Religious Advisory Board & scholars profiles.
- **Verification:** About page renders with verified credentials and team showcase.

### Task 8: Contact & Customer Care Page (`/contact`)
- Build `rihab-travel/src/app/contact/page.tsx`:
  - 24/7 emergency support cards, WhatsApp direct click-to-chat.
  - Interactive booking inquiry form with validation and success feedback.
  - Cairo & Alexandria headquarters and Makkah/Madinah field offices addresses.
  - Interactive FAQ accordion.
- **Verification:** Form validates inputs, simulates submission with feedback alert, and direct WhatsApp links work.

### Task 9: Quality Audit & Build Verification
- Execute `npm run build` in `rihab-travel` to verify zero TypeScript or Next.js build errors.
- Run UI/UX checks and test navigation across all 6 pages.
- **Verification:** Clean production build, no broken links, pixel-perfect RTL alignment.
