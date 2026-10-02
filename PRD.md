# SILAII Sculpture Atelier - Product Requirements Document (PRD)

---

## 1. Executive Summary & Brand Mission

**SILAII** is a premier Indian sculpture atelier and cultural design studio dedicated to immortalizing India's spiritual deities, sacred monuments, historical leaders, and cultural icons into museum-grade stone composite and bronze masterpieces.

This web application delivers a full-stack, responsive e-commerce experience designed for fast exploration, authentic storytelling, seamless live search, and one-click express checkout.

---

## 2. Global Visual Theme & Design Constitution

The application strictly enforces a high-contrast, modern luxury visual identity:

### 2.1 Color Palette
- **Primary Yellow / Gold Accent**: `#eab308` (rich sunflower gold) & `#facc15` (bright gold highlights).
- **Secondary Dark / Typography**: `#18181b` (deep onyx) and `#09090b` (pure dark background for hero gradient).
- **Backgrounds**: `#ffffff` (crisp white) and `#f8fafc` (subtle neutral light surface).
- **All Borders**: `#ffffff` (pure white 2px/3px solid borders across all cards, modals, inputs, and navigation elements).
- **Zero Brown Policy**: All legacy brown shades have been eliminated from the UI, replaced with black, gold yellow, and white.

### 2.2 Typography
- **Headings & Display**: `'Cinzel', serif` (weights: 600, 700, 800) for majestic Indian temple architectural aesthetic.
- **Body & Controls**: `'Jost', -apple-system, BlinkMacSystemFont, sans-serif` (weights: 400, 500, 600, 700) for clean legibility.

---

## 3. System Architecture & Tech Stack

```
                     +---------------------------------------+
                     |         Client Browser (Web)          |
                     +---------------------------------------+
                                         |
                                         v
                     +---------------------------------------+
                     |    Express.js Web Server (Port 3000)  |
                     +---------------------------------------+
                                         |
          +------------------------------+------------------------------+
          |                              |                              |
          v                              v                              v
+--------------------+        +--------------------+        +--------------------+
|  Static Asset Router|        |  REST API Endpoints|        | Dynamic SSR Engine |
| - www.silaii.com   |        | - /api/products    |        | - Homepage (/)     |
| - cdn.shopify.com  |        | - /api/auth/*      |        | - Search (/search) |
| - shopflo.co       |        | - /api/contact     |        | - Checkout         |
| - snapmint.com     |        | - /cart/*          |        | - Product Details  |
+--------------------+        +--------------------+        +--------------------+
                                         |
                                         v
                              +--------------------+
                              |  In-Memory Session |
                              |  Cart & User Store |
                              +--------------------+
```

### 3.1 Core Technologies
- **Runtime**: Node.js
- **Server Framework**: Express.js with TypeScript (`server.ts`)
- **State Management**: Session Cookies (`silaii_session_id`, `silaii_user`) + In-memory cart store
- **Error Shielding (`headShield`)**: Captures and suppresses third-party tracking exceptions (Shopflo, Bitespeed, Clarity, ResizeObserver) before execution to prevent window freeze.

---

## 4. Complete Page & Route Specifications

### 4.1 Global Header & Navigation (`/`)
- **Fixed Navbar**: Sticks to top with 2px solid white bottom border and modern drop shadow.
- **Brand Title**: "SILAII" linking to `/home`.
- **Top Actions**:
  - **Search Icon**: Dedicated circle icon button linking directly to the `/search` page.
  - **Contact Us**: Opens contact modal with support phone (`+91 98846 88804`), email (`contact@silaii.com`), and interactive inquiry form.
  - **Patron Login**: Login modal with 1-click demo login, session persistence, and patron avatar dropdown.
  - **Cart Icon**: Live badge displaying total cart items linking to `/checkout`.
- **Category Menu Bar**: Horizontal scrollable categories (`/home`, `ABOUT`, `SEARCH`, `NEW LAUNCHES`, `CAR DASHBOARD`, `LEADERS & ICONS`, `DIVINE SERIES`, `FLOAT SERIES`, `MONUMENTS`, `PRIDE OF INDIA`, `MOVIE MERCHANDISE`, `LIFE SIZE`).

---

### 4.2 Homepage (`/` and `/home`)
- **Onyx & Gold Hero Banner**: Deep dark gradient (`#09090b` to `#27272a`) with glowing gold radial backdrop, headline, and dual CTAs ("Explore All Sculptures", "Search All Sculptures").
- **Category Filter Tabs**: Instant filtering between collections (`ALL`, `DIVINE SERIES`, `CAR DASHBOARD`, `LEADERS & ICONS`, `FLOAT SERIES`, `MONUMENTS`, `NEW LAUNCHES`).
- **Sculpture Grid**: High-resolution cards with white borders, badges (`BESTSELLER`, `SACRED`, `LEVITATION TECH`), dimensions, ratings, price, "View Details", and "Add to Cart" with instant toast feedback.
- **Artisan Story Section**: Focuses on clay modeling, micro-detailing, and mineral composite casting.
- **Footer**: Three-column layout covering Atelier info, collections, customer devotion support, and copyright.

---

### 4.3 Dedicated Search Page (`/search`)
- **Dedicated Search Hero**: Search input bar with white borders and live search button.
- **Live Autosearch Engine**: Sub-millisecond filtering matching product names, deity handles, categories, and tags.
- **Centered Category Pills**: `ALL`, `DIVINE`, `CAR DASHBOARD`, `LEADERS`, `FLOAT`, `MONUMENTS`.
- **Clean Result Display**: Displays matching sculpture cards directly without clutter or numerical counter labels.

---

### 4.4 Product Details Page (`/products/:handle`)
- **360° Multi-Angle Gallery**: High-resolution photography of composite stone textures.
- **Size & Finish Selector**: 6-inch, 7.5-inch, 8-inch, 9-inch variants with corresponding SKUs.
- **Live Stock & Delivery Estimator**: Displays real-time dispatch timelines.
- **Client Script Interceptor**: Overrides legacy CSS rules to enforce yellow buttons and white borders.

---

### 4.5 Express Checkout Page (`/checkout`)
- **2-Column Layout**: Left side captures delivery details and payment methods; right side sticky order summary.
- **Contact & Shipping Forms**: Full name, mobile phone (for SMS dispatch), delivery address, and PIN code.
- **Payment Method Selection**:
  - UPI Express (GPay, PhonePe, Paytm, BHIM)
  - Credit / Debit Card (Visa, MasterCard, RuPay, Amex)
  - Snapmint 0% Interest EMI (3 installments)
  - Cash on Delivery (COD)
- **Promo Code Engine**: Discount validation supporting `RAM10`, `SILAII10`, `FESTIVE` (10% instant savings).
- **Order Confirmation Modal**: Confirmed order screen with simulated tracking ID generation (`#SIL-XXXXXX`).

---

## 5. API Endpoints Reference

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/products` | Returns all sculpture catalog products |
| `GET` | `/api/products/:handle` | Returns product details by handle |
| `GET` | `/api/search?q=...` | Returns products matching search query |
| `GET` | `/api/auth/me` | Returns current patron session |
| `POST` | `/api/auth/login` | Sets patron session cookie |
| `POST` | `/api/auth/logout` | Clears patron session cookie |
| `POST` | `/api/contact` | Submits patron support inquiry |
| `GET` | `/cart.js` | Retrieves active session cart state |
| `POST` | `/cart/add.js` | Adds variant item and quantity to cart |
| `POST` | `/cart/update.js` | Updates line item quantities |
| `POST` | `/cart/clear.js` | Empties the active session cart |

---

## 6. Verification & Quality Standards
- **Port Compliance**: Dev server runs on port 3000 (`0.0.0.0:3000`).
- **Responsive Layout**: Optimized for mobile, tablet, and desktop viewports.
- **Zero Console Collisions**: Third-party tracker reassignments safely intercepted.
