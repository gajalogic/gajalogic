# GajaLogic - Astro Static Site

A high-performance enterprise static website built with **[Astro](https://astro.build)** and styled with **[Tailwind CSS v4](https://tailwindcss.com)**, configured out of the box for **GitHub Pages** deployment.

---

## 🚀 Features

- **Static-First & Ultra Fast**: Pure static HTML generation with 0 client-side JS overhead by default.
- **GitHub Pages Ready**:
  - Direct branch deployment support via built-in `docs/` output directory.
  - Automated deployment support via GitHub Actions workflow (`.github/workflows/deploy.yml`).
  - `.nojekyll` configuration to prevent GitHub Pages from ignoring `_astro/` asset directories.
  - Dynamic base path support via `BASE_PATH` environment variable and `import.meta.env.BASE_URL` for repository subpaths (e.g. `https://<username>.github.io/<repo>/`).
- **Tailwind CSS v4**: Modern, tree-shaken styling with a clean light design system (royal blue `#3e61ff`, 1px bordered `unibase-card`), responsive navigation, and typography.
- **Content Architecture (hub + sub-pages)**:
  - `/` — Homepage with hero, "Why Gajalogic" pillars, stack overview, and product grid.
  - `/products` — NPCI Product Suite hub + 5 product pages (UPI Acquiring, UPI Issuing, TPAP, RuPay Cards, NCMC Transit).
  - `/platform` — Core Platform hub + `/platform/crypto-agility` (Hybrid Cryptographic Engine) and `/platform/cloud-native-ledgers` (NATS JetStream + Benthos, immutable PQC-sealed journals).
  - `/hardware` — Hardware & Edge Security hub + `/hardware/opencpu-soundbox` (sub-₹600 BoM), `/hardware/enterprise-hsm` (Thales Luna + QRNG), and `/hardware/ble-contactless` (offline beacon payments).
  - `/developers` — Developers hub + `/developers/sandbox` (PQC Migration Sandbox), `/developers/architecture` (Mermaid blueprints), `/developers/docs` (API reference + Playwright/DuckDB test harness).
  - `/compliance` — Trust Center hub + `/compliance/rbi-qsafe` (2027 mandate alignment), `/compliance/pa-p-framework`, and `/compliance/cbom`.
  - `/company` — Company hub + `/company/about`, `/company/insights`, and `/company/contact`.

---

## 📁 Project Structure

```
gajalogic/
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions workflow for automated Pages deployment
├── docs/                     # Static build output ready for GitHub Pages (/docs source)
│   ├── .nojekyll             # Prevents Jekyll from ignoring _astro assets
│   ├── _astro/               # Compiled CSS and bundled assets
│   ├── company/index.html
│   ├── compliance/index.html
│   ├── developers/index.html
│   ├── hardware/index.html
│   ├── platform/index.html
│   ├── products/index.html
│   ├── favicon.svg
│   └── index.html
├── public/
│   ├── .nojekyll             # Static asset marker for GitHub Pages
│   └── favicon.svg           # High-resolution SVG favicon & brand icon
├── src/
│   ├── components/
│   │   ├── CtaBanner.astro   # Reusable blue gradient call-to-action banner
│   │   ├── Footer.astro      # 7-column enterprise footer with status indicator
│   │   ├── InteractiveBackground.astro # Cursor-reactive canvas aurora (dark/light variants)
│   │   ├── Navbar.astro      # Responsive navigation bar with section dropdowns
│   │   └── PageHeader.astro  # Reusable hero/header with badges and actions
│   ├── layouts/
│   │   └── Layout.astro      # Base HTML shell with SEO meta tags & OpenGraph
│   ├── pages/
│   │   ├── index.astro               # /
│   │   ├── products/                 # /products + 5 NPCI product pages
│   │   ├── platform/                 # /platform + crypto-agility, cloud-native-ledgers
│   │   ├── hardware/                 # /hardware + opencpu-soundbox, enterprise-hsm, ble-contactless
│   │   ├── developers/               # /developers + sandbox, architecture, docs
│   │   ├── compliance/               # /compliance + rbi-qsafe, pa-p-framework, cbom
│   │   └── company/                  # /company + about, insights, contact
│   └── styles/
│       └── global.css        # Tailwind CSS v4 entrypoint and custom design tokens
├── .gitignore
├── astro.config.mjs          # Astro configuration (outDir: './docs', dynamic base)
├── package.json
└── tsconfig.json
```

---

## 🛠️ Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:4321](http://localhost:4321) in your browser.

### 3. Build Static Site
```bash
npm run build
```
The compiled, production-ready static files will be generated into the `docs/` directory.

### 4. Preview Build Locally
```bash
npm run preview
```

---

## 🌐 GitHub Pages Deployment Options

You can deploy this site to GitHub Pages using either of the following two standard approaches:

### Option A: Standard GitHub Actions (Recommended)
1. Push this repository to GitHub.
2. In your repository on GitHub, navigate to **Settings** → **Pages**.
3. Under **Build and deployment** → **Source**, select **GitHub Actions**.
4. The included workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) will automatically trigger on pushes to `main` (or `master`), build the site, and deploy it to GitHub Pages.

### Option B: Deploy from `/docs` folder
1. In your repository on GitHub, navigate to **Settings** → **Pages**.
2. Under **Build and deployment** → **Source**, select **Deploy from a branch**.
3. Select your default branch (e.g., `main`) and set the folder to `/docs`.
4. Click **Save**. Any push containing an updated `docs/` folder will be served directly.

