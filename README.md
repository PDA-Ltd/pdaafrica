# PDA Africa — Website

Public website for **PDA Africa**, the not-for-profit arm of Participatory Development Associates.

- **App type**: React single-page application (SPA)
- **Build tool**: Vite
- **Styling**: Tailwind CSS
- **Languages**: English + French

**Live**: [pdaafrica.vercel.app](https://pdaafrica-three.vercel.app)
**Live**: [PDA Africa](https://pdaafrica.org)

## First-Day Checklist

- Install [VS Code](https://code.visualstudio.com/) and [Node.js LTS](https://nodejs.org/)
- Clone: `git clone https://github.com/PDA-AFRICA/pdaafrica.git`
- Open the folder in VS Code
- Run: `npm install`
- Start local server: `npm run dev`
- Make changes, then: `git add .` -> `git commit -m "your message"` -> `git push`

---

## Table of contents

- [Tech stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [New Contributor Setup (Beginner)](#new-contributor-setup-beginner)
- [Quick start](#quick-start)
- [Scripts](#scripts)
- [Project structure (high level)](#project-structure-high-level)
- [Routing](#routing)
- [Internationalisation (i18n)](#internationalisation-i18n)
- [Content & feature areas](#content--feature-areas)
  - [Projects listing vs. project pages](#projects-listing-vs-project-pages)
  - [VSLA impact stories](#vsla-impact-stories)
- [Adding a new programme page (checklist)](#adding-a-new-programme-page-checklist)
- [Build & deployment](#build--deployment)
- [Quality & tooling](#quality--tooling)
- [Troubleshooting](#troubleshooting)
- [Licence / attribution](#licence--attribution)
- [Support](#support)

## Tech stack

| Area | Choice |
|------|--------|
| UI | React 18 |
| Build | Vite 5 |
| Styling | Tailwind CSS |
| Routing | React Router v6 |
| Charts (where used) | ApexCharts |
| Carousels | react-slick |

---

## Prerequisites

- **Node.js** 18+ (LTS recommended)
- **npm** (or compatible package manager)

---

## New Contributor Setup (Beginner)

If you are setting this up for the first time, follow these steps in order.

### 1) Install tools

1. Install **Visual Studio Code**: [https://code.visualstudio.com/](https://code.visualstudio.com/)
2. Install **Node.js LTS** (includes npm): [https://nodejs.org/](https://nodejs.org/)
3. (Optional) Install **Git** if not already installed: [https://git-scm.com/downloads](https://git-scm.com/downloads)

After installation, verify in a terminal:

```bash
node -v
npm -v
git --version
```

### 2) Clone the project

```bash
git clone https://github.com/PDA-AFRICA/pdaafrica.git
cd pdaafrica
```

### 3) Open in VS Code

- Open VS Code
- Go to **File -> Open Folder...**
- Select the cloned `pdaafrica` folder
- Open a terminal in VS Code (**Terminal -> New Terminal**)

### 4) Install dependencies and run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

### 5) Edit the project

- Make your code/content changes in VS Code
- Save files and check the browser
- Vite hot reload updates automatically

### 6) Commit and push your changes

```bash
git add .
git commit -m "Describe your change"
git push
```

If you're working on a new feature, prefer creating a branch first:

```bash
git checkout -b feature/short-description
```

### 7) If you downloaded ZIP instead of cloning

If you downloaded the repository as a ZIP, initialize Git manually inside the project folder:

```bash
git init
git add .
git commit -m "Initial local commit"
```

---

## Quick start

```bash
npm install
npm run dev
```

Development server runs with Vite (default: `http://localhost:5173`).

### Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Serve `dist/` locally |
| `npm run lint` | ESLint (strict; many legacy warnings across the repo) |

> **Note:** `package.json` also defines `npm start` via `react-scripts`; the active workflow for this project is **Vite** (`dev` / `build`).

---

## Project structure (high level)

```
src/
├── main.jsx              # Router definitions (all routes)
├── App.jsx               # Layout shell: menu, <Outlet />, footer, language provider
├── index.css             # Global styles + Tailwind
├── assets/               # Images, icons
├── components/           # Shared UI (menu, cards, forms, etc.)
├── contexts/
│   └── LanguageContext.jsx   # Current language + toggle
├── constants/
│   └── index.js          # Projects list, nav links, footer, reviews, etc.
├── hooks/
│   └── useScrollAnimation.js
├── pages/                # Route-level screens
├── sections/             # Composable sections (e.g. Footer)
└── translations/
    ├── en.js
    └── fr.js
```

---

## Routing

Routes are declared in `src/main.jsx` under the root layout (`App`).

- **Marketing / content:** `/`, `/about-us`, `/projects`, `/gallery`, `/impact`, `/contact-us`, etc.
- **Programme detail pages** (examples):  
  `/cocoa-communities-library-project`, `/financial-inclusion-and-vsla`, `/nyonkopa-child-labour-remediation`, `/knowledge-sharing-workshops-child-protection`, etc.

Legacy path **`/our-impact`** redirects to **`/impact`** (see `OurImpact.jsx`).

---

## Internationalisation (i18n)

- **Provider:** `LanguageProvider` wraps the app in `App.jsx`.
- **Hook:** `useLanguage()` → `{ language, setLanguage }` (`"en"` | `"fr"`).
- **Strings:** `src/translations/en.js` and `src/translations/fr.js` export large nested objects (e.g. `en.home`, `en.projects`, `en.ksw`).

**Pattern in a page:**

```jsx
const { language } = useLanguage();
const t = language === "en" ? en.sectionKey : fr.sectionKey;
```

When adding copy, add matching keys in **both** `en.js` and `fr.js` to avoid missing translations.

---

## Content & feature areas

### Projects listing vs. project pages

1. **`src/constants/index.js`** — `projects` array: `label`, `subtext`, `imgURL`, `link` (internal path or external URL).
2. **`src/pages/ProjectsPage.jsx`** — Renders cards; uses `t.projectList[project.label]` from translations when present.
3. **`src/translations/en.js` & `fr.js`** — Under `projects.projectList`, add an entry keyed by the **exact** `label` string from `constants` for localised titles/descriptions.
4. **`src/main.jsx`** — Register a `<Route path="..." element={<YourPage />} />`.
5. **`projectIcons` in `ProjectsPage.jsx`** — Optional: map `label` → icon asset for the card overlay.

### VSLA impact stories

VSLA impact stories are a small “mini-section” with an index page and detail pages.

- **Index route**: `/vsla-impact-stories` (`src/pages/VSLAImpactStoriesIndex.jsx`)
- **Detail route**: `/vsla-impact-stories/:slug` (`src/pages/VSLAImpactStoryPage.jsx`)
- **Data + slugs**: `src/data/vslaImpactStories.js`
- **Translations**: `vslaImpactStories` namespace in `src/translations/en.js` and `src/translations/fr.js`

**How to add a new story**

1. Add the portrait image to `src/assets/images/` and export it via `src/assets/images/index.js`.
2. In `src/data/vslaImpactStories.js`:
   - Add the slug to `VSLA_IMPACT_STORY_SLUGS`
   - Add the image to the `IMAGES` map
3. In both translation files, add `vslaImpactStories.stories[slug]` with:
   - `name`, `location`, `group`
   - `introduction`
   - section strings (e.g. `seeingPossibilities`, `takingRisks`, etc.)

**Note**: The detail page renders the portrait + byline inside the article layout via `src/components/VslaImpactStoryBody.jsx`.

---

## Projects listing vs. project pages

1. **`src/constants/index.js`** — `projects` array: `label`, `subtext`, `imgURL`, `link` (internal path or external URL).
2. **`src/pages/ProjectsPage.jsx`** — Renders cards; uses `t.projectList[project.label]` from translations when present.
3. **`src/translations/en.js` & `fr.js`** — Under `projects.projectList`, add an entry keyed by the **exact** `label` string from `constants` for localised titles/descriptions.
4. **`src/main.jsx`** — Register a `<Route path="..." element={<YourPage />} />`.
5. **`projectIcons` in `ProjectsPage.jsx`** — Optional: map `label` → icon asset for the card overlay.

---

## Adding a new programme page (checklist)

1. Create `src/pages/YourProgramme.jsx` (follow patterns in `Nyonkopa.jsx`, `KnowledgeSharingWorkshops.jsx`, or `CLDCollaborative.jsx`).
2. Add translation namespaces `yourProgramme: { ... }` in `en.js` and `fr.js`.
3. Append to `projects` in `constants/index.js`.
4. Add `projects.projectList["Exact Label"]` in both language files.
5. Add route in `main.jsx`.
6. Extend `projectIcons` in `ProjectsPage.jsx` if you use a custom icon.

---

## Build & deployment

- **`vite.config.js`** sets `base: "./"` for **relative asset paths** (suitable for subdirectory hosting).
- Output directory: **`dist/`**.

Deploy by serving `dist/` on any static host (e.g. Vercel, Netlify, GitHub Pages).

---

## Quality & tooling

- **ESLint** is configured but the codebase has many historical issues (unused `React` imports, prop-types, etc.). `npm run lint` may fail until rules are relaxed or files are cleaned up incrementally.
- **Browserslist** may warn about an outdated DB; optional: `npx update-browserslist-db@latest`.

---

## Troubleshooting

### “My content is hidden under the sticky menu”

Some pages include a sticky sub-navigation. If content appears clipped at the top:

- Add top padding to the first page section (e.g. `pt-20 sm:pt-24 md:pt-28`).
- For sticky sidebars, tune `top-*` (e.g. `lg:top-28`) so it sits below the sticky header.

### CRLF / LF warnings on Windows

You may see warnings like “LF will be replaced by CRLF”. This is normal on Windows when Git line-ending conversion is enabled. Avoid committing formatting-only changes unless intentional.

---

## Licence / attribution

Content and branding belong to **PDA Africa** / **Participatory Development Associates** as applicable. Refer to your organisation’s policies for third-party assets and fonts.

---

## Support

For site content or structural changes, coordinate with the project maintainers. For **PDA Ghana** programme material, see [pdaghana.com](https://www.pdaghana.com) where relevant.
