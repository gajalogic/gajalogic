# Project Prompt & Change Log

All significant prompt intents and file modifications in this workspace are recorded here chronologically.

---

## [2026-11-12 / Step 1: Project Initialization & GitHub Pages Setup]
- **Prompt Intent:** Plan and execute a new Astro static site project configured for GitHub Pages deployment with Tailwind CSS for styling, containing pages for `/`, `/products`, `/platform`, `/hardware`, `/developers`, `/compliance`, and `/company`.
- **Files Modified:**
  - `package.json`
  - `astro.config.mjs`
  - `tsconfig.json`
  - `.gitignore`
  - `.env`
  - `.github/workflows/deploy.yml`
  - `public/.nojekyll`
  - `public/favicon.svg`
  - `src/styles/global.css`
  - `src/layouts/Layout.astro`
  - `src/components/Navbar.astro`
  - `src/components/Footer.astro`
  - `src/components/PageHeader.astro`
  - `src/components/FeatureCard.astro`
  - `src/components/CtaBanner.astro`
  - `src/pages/index.astro`
  - `src/pages/products.astro`
  - `src/pages/platform.astro`
  - `src/pages/hardware.astro`
  - `src/pages/developers.astro`
  - `src/pages/compliance.astro`
  - `src/pages/company.astro`
  - `README.md`
  - `docs/` (build directory)
- **Changes Made:**
  - Bootstrapped Astro with Tailwind CSS v4, setting `outDir: './docs'` and GitHub Actions deployment workflow for dual-path GitHub Pages hosting.
  - Implemented base layout, responsive navbar, categorized footer, and initial 7 core pages with static compilation verified in `docs/`.

---

## [2026-11-12 / Step 2: NPCI Product Suite Implementation]
- **Prompt Intent:** Build and populate the NPCI Product Suite pages (`/products/`) as static pages/components with Unibase-inspired aesthetic (`#0B0F17`) and BCG management consulting tone.
- **Files Modified:**
  - `src/pages/products.astro` (deleted)
  - `src/pages/products/index.astro` (created)
  - `src/pages/products/upi-acquiring.astro` (created)
  - `src/pages/products/upi-issuing.astro` (created)
  - `src/pages/products/upi-tpap.astro` (created)
  - `src/pages/products/rupay-cards.astro` (created)
  - `src/pages/products/ncmc-transit.astro` (created)
  - `src/components/Navbar.astro` (modified)
  - `src/components/Footer.astro` (modified)
  - `src/styles/global.css` (modified)
  - `docs/` (rebuilt static assets)
- **Changes Made:**
  - Created standalone static sub-routes for 5 core national payment product lines (UPI Acquiring, UPI Issuing, TPAP Infrastructure, RuPay Cards, NCMC Transit) with TCO analyses and post-quantum technical architectures.
  - Added a desktop mega-dropdown to the navigation bar, updated footer sitemaps, and added Unibase modular card styling (`.unibase-card`, `.mono-tag`).

---

## [2026-11-12 / Step 3: Homepage Overhaul (TCO & HNDL Focus)]
- **Prompt Intent:** Generate the Homepage (`/`) focusing on the TCO paradigm shift and the "Harvest Now, Decrypt Later" threat based on the strategic enterprise content architecture.
- **Files Modified:**
  - `src/pages/index.astro` (modified)
  - `docs/` (rebuilt static assets)
- **Changes Made:**
  - Revamped homepage hero with C-suite headline, regulatory alignment callouts (RBI Q-SAFE / GoI PQC Task Force 2027), and live dual-rail cryptographic terminal telemetry.
  - Added the 3-pillar Strategic Imperative, comparative TCO economic breakdown (-64% TCO), 3-phase HNDL attack timeline, and interactive NPCI Product Suite grid.

---

## [2026-11-12 / Step 4: Browser Verification & Server Lifecycle]
- **Prompt Intent:** Launch preview server to visually verify the homepage in Google Chrome, followed by stopping the server and releasing port 4321.
- **Files Modified:**
  - None (runtime execution and validation)
- **Changes Made:**
  - Executed Astro preview server daemon on port 4321, launched Google Chrome for local inspection, and cleanly terminated background server tasks.

---

## [2026-11-12 / Step 5: Prompt & Change Logging Setup]
- **Prompt Intent:** Establish a persistent prompt and change logging rule (`PROMPT_LOG.md`) and backfill all previous session actions.
- **Files Modified:**
  - `PROMPT_LOG.md` (created)
- **Changes Made:**
  - Created `PROMPT_LOG.md` in the project root documenting session history and setting up the ongoing tracking format for future workspace tasks.
