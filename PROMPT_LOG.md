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

---

## [2026-11-12 / Step 6: Industrial Engineering Aesthetic & Homepage Redesign]
- **Prompt Intent:** Adopt a strict industrial engineering aesthetic across the design system and homepage, eliminating AI clichés (no centered pill badges, no gradients, no Inter font, no fuzzy drop shadows, no cards-in-cards) in favor of a `#030303` palette, Space Grotesk headers, JetBrains Mono data/labels, razor-sharp 1px borders, left-aligned technical metadata headers, and data-dense parameter tables.
- **Files Modified:**
  - `src/styles/global.css` (modified)
  - `src/layouts/Layout.astro` (modified)
  - `src/components/Navbar.astro` (modified)
  - `src/components/Footer.astro` (modified)
  - `src/pages/index.astro` (modified)
  - `docs/` (rebuilt static assets)
  - `PROMPT_LOG.md` (appended)
- **Changes Made:**
  - Purged all purple-to-blue gradients, fuzzy drop shadows, and pill badges in favor of a strict monochromatic `#030303` systems engineering aesthetic with Space Grotesk and JetBrains Mono typography.
  - Rebuilt the homepage with left-aligned technical metadata headers, razor-sharp 1px bordered frames (`.doc-panel`), a data-dense TCO engineering audit table (`.dense-table`), and precise rectangular interactive button states.

---

## [2026-11-12 / Step 7: Unibase Visual Design Alignment]
- **Prompt Intent:** Recreate the exact visual design from the user-uploaded screenshot of Unibase.com (clean white `#ffffff` canvas, panoramic sci-fi vector banner, centered hero with vibrant `#3e61ff` royal blue typography accents, 4 modular white cards with colorful icons, 2 wide stack cards with isometric art, 3 alternating zig-zag visual feature blocks including the iconic blue cybernetic orb, soft periwinkle `#e7e9ff` gradient Use Cases section, blog cards with royal blue header banners, milestone onboarding rows, and clean accordion FAQ).
- **Files Modified:**
  - `src/styles/global.css` (modified)
  - `src/layouts/Layout.astro` (modified)
  - `src/components/Navbar.astro` (modified)
  - `src/components/Footer.astro` (modified)
  - `src/pages/index.astro` (modified)
  - `docs/` (rebuilt static assets)
  - `PROMPT_LOG.md` (appended)
- **Changes Made:**
  - Adopted the exact Unibase light mode design tokens (`--home-bg: #fff`, `--home-primary: #3e61ff`, `--home-border: #dadcdf`, and periwinkle Use Cases gradient).
  - Implemented the complete 10-section visual structure from the uploaded screenshot, including the panoramic landscape hero header, alternating zig-zag product feature cards with custom cybernetic vector artwork, and royal blue blog card headers.

---

## [2026-11-12 / Step 8: Content Architecture Reconciliation (Canonical Markdown IA)]
- **Prompt Intent:** Use the attached content architecture markdown (`Gajalogic: Enterprise Website Content Architecture`) as the canonical content context; reconcile all mismatched/legacy dark-theme pages (AI-datacenter hardware narrative) to the payments/PQC narrative and the light Unibase design system, implementing the hub + sub-page IA.
- **Files Modified:**
  - `src/styles/global.css` (added `.mono-tag` utility)
  - `src/components/CtaBanner.astro` (rewritten to light blue-gradient banner)
  - `src/components/FeatureCard.astro` (deleted — unused, dark-theme)
  - `src/components/Navbar.astro` (generalized section dropdowns for Products/Platform/Hardware/Developers/Compliance)
  - `src/components/Footer.astro` (7-column sitemap with all sub-pages)
  - `src/layouts/Layout.astro` (default title/description aligned to canonical hero)
  - `src/pages/index.astro` (canonical hero headline + CTA targets)
  - `src/pages/products/*.astro` (6 pages restyled from dark to light Unibase system)
  - `src/pages/platform.astro` + `platform/crypto-agility.astro` + `platform/cloud-native-ledgers.astro` (rewritten)
  - `src/pages/hardware.astro` + `hardware/opencpu-soundbox.astro` + `hardware/enterprise-hsm.astro` + `hardware/ble-contactless.astro` (rewritten)
  - `src/pages/developers.astro` + `developers/sandbox.astro` + `developers/architecture.astro` + `developers/docs.astro` (rewritten)
  - `src/pages/compliance.astro` + `compliance/rbi-qsafe.astro` + `compliance/pa-p-framework.astro` + `compliance/cbom.astro` (rewritten)
  - `src/pages/company.astro` + `company/about.astro` + `company/insights.astro` + `company/contact.astro` (rewritten)
  - `README.md` (structure updated), `docs/` (rebuilt)
- **Changes Made:**
  - Replaced the legacy AI-silicon narrative (vLLM/Llama/G4-Titan tensors) with the canonical payments/PQC content architecture: platform engines (crypto-agility, cloud-native ledgers), hardware & edge security (OpenCPU soundbox, enterprise HSM, BLE contactless), developer proof resources (sandbox, blueprints, docs/test harness), compliance trust center (RBI Q-SAFE, PA-P, CBOM), and company pages.
  - Fixed the invisible-text bug: 10 routes were still dark-theme (`text-white`/`glass-panel`) on a white body after the `.glass-panel` class was purged from `global.css`. All routes now use the light design system (`.unibase-card`, `.btn-unibase-*`, `.mono-tag`, `#dadcdf` borders, `#3e61ff` accents) with dark terminal panels only as intentional code/telemetry accents.

---

## [2026-11-12 / Step 9: Interactive Background Component]
- **Prompt Intent:** Add a production-ready, cursor-reactive interactive background component: full-viewport fixed wrapper (`z-index: -1`, `pointer-events: none`), lerp-smoothed cursor physics, HTML5 Canvas + `requestAnimationFrame`, clean DPR-aware resize, 60fps with zero layout shift.
- **Files Added/Modified:**
  - `src/components/InteractiveBackground.astro` (new — `variant="dark"` per spec + `variant="light"` tuned for Unibase)
  - `src/layouts/Layout.astro` (mounted `variant="light"` site-wide; `body`/`main` backgrounds removed)
  - `src/styles/global.css` (`--home-bg` → `transparent`; `--home-usecase-bg` gradient made translucent)
  - `src/components/PageHeader.astro` (band background removed)
  - `src/pages/index.astro` (homepage bands made transparent/translucent so the aurora shows)
- **Changes Made:** Site-wide light aurora behind the Unibase design — drifting nodes with proximity links and a focal glow that eases toward the cursor (double-lerp: glow position + per-node repel offsets, no snapping). Performance/lifecycle: dt-normalized rAF (identical motion at any refresh rate), cached gradients rebuilt only on resize, alpha-tier batched `Path2D` link strokes, DPR-capped buffer via `setTransform`, `contain: layout style paint`, pauses on `document.hidden`, static frame under `prefers-reduced-motion`, CSS-painted fallback before JS loads.

---

## [2026-11-12 / Step 10: Homepage Hero Banner Removed]
- **Prompt Intent:** Remove the homepage hero image — the panoramic illustrated banner ("NATIONAL PAYMENT SWITCH INFRASTRUCTURE // PQC ENCLAVE") — as irrelevant.
- **Files Modified:** `src/pages/index.astro` (banner section deleted; section comments renumbered 2–10 → 1–9; stale `Layout` title override "Open Payment Layer for National Rails" aligned to the canonical hero copy)
- **Changes Made:** Homepage now opens directly on the centered hero headline over the interactive background. Verified: `npm run build` (26 pages), browser screenshot, zero console errors.

---

## [2026-11-12 / Step 11: Navbar Stack Logo Removed]
- **Prompt Intent:** Remove the blue stack icon rendered before the GajaLogic wordmark in the navbar.
- **Files Modified:** `src/components/Navbar.astro` (icon box deleted; logo anchor simplified to the wordmark only)
- **Changes Made:** Verified: `npm run build` (26 pages), browser screenshot, zero console errors. Footer still carries a blue "G" monogram box (pending user decision).

---

## [2026-11-12 / Step 12: Footer Status Pill Removed]
- **Prompt Intent:** Remove the "All Payment Switches Operational" live-status pill from the footer.
- **Files Modified:** `src/components/Footer.astro` (status pill div deleted; brand column keeps wordmark + description)
- **Changes Made:** Verified: `npm run build` (26 pages); grep confirms zero references remain in `src/` and `docs/`.

---

## [2026-11-12 / Step 13: GitHub Pages Hosting (Project Site)]
- **Prompt Intent:** Host the site on GitHub (`sanjibparida/gajalogic`) and serve it as a static site via GitHub Pages.
- **Files Modified:** `astro.config.mjs` (fixed defaults: `site: https://sanjibparida.github.io`, `base: /gajalogic` — the previous defaults pointed at a non-existent user page and built with base `/`, which broke asset URLs and internal links on the project-site subpath), `src/layouts/Layout.astro` (canonical fallback aligned), `docs/` (rebuilt as a correct subpath build).
- **Deployment:** `.github/workflows/deploy.yml` deploys on push to `main` via `actions/deploy-pages`. Commit `033da04` pushed; workflow run succeeded.
- **Verification (live):** All 26 pages return HTTP 200 at `https://sanjibparida.github.io/gajalogic/`; CSS + InteractiveBackground JS assets 200; canonical URLs correct; internal links resolve (Pages issues 301 trailing-slash redirects, followed by browsers); browser check of homepage + product page renders styled with the interactive aurora and zero console errors.



