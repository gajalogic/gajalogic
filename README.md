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
- **Tailwind CSS v4**: Modern, tree-shaken styling with glassmorphism, responsive navigation, dark theme, and typography.
- **7 Fully Designed Pages**:
  - `/` — Homepage with hero, live telemetry terminal, metrics bar, and architecture pillars.
  - `/products` — Enterprise product line (G4-Titan, Edge Micro V2, Logic-OS, Cloud Bridge) and comparison matrix.
  - `/platform` — 4-layer compute stack, dataflow pipeline, and performance benchmarks.
  - `/hardware` — Silicon die specs, 2U chassis blades, ruggedized modules, and interface pinout table.
  - `/developers` — 3-step quick start, Python/Rust code samples, and SDK documentation.
  - `/compliance` — SOC 2 Type II, ISO 27001, FIPS 140-3 Level 4, HIPAA, and security controls.
  - `/company` — Mission, leadership, careers, and technical inquiry contact form.

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
│   │   ├── CtaBanner.astro   # Reusable call-to-action banner
│   │   ├── FeatureCard.astro # Glassmorphic feature card
│   │   ├── Footer.astro      # 6-column enterprise footer with status indicator
│   │   ├── Navbar.astro      # Responsive navigation bar with mobile menu
│   │   └── PageHeader.astro  # Reusable hero/header with badges and breadcrumbs
│   ├── layouts/
│   │   └── Layout.astro      # Base HTML shell with SEO meta tags & OpenGraph
│   ├── pages/
│   │   ├── company.astro     # /company
│   │   ├── compliance.astro  # /compliance
│   │   ├── developers.astro  # /developers
│   │   ├── hardware.astro    # /hardware
│   │   ├── index.astro       # /
│   │   ├── platform.astro    # /platform
│   │   └── products.astro    # /products
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
