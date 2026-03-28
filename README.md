# PDA Africa — Website

Public website for **PDA Africa**, the not-for-profit arm of Participatory Development Associates. The app is a React (Vite) single-page application with English/French support.

**Live:** [pdaafrica.vercel.app](https://pdaafrica.vercel.app/pdaafrica)

---

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

## Getting started

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

## Licence / attribution

Content and branding belong to **PDA Africa** / **Participatory Development Associates** as applicable. Refer to your organisation’s policies for third-party assets and fonts.

---

## Support

For site content or structural changes, coordinate with the project maintainers. For **PDA Ghana** programme material, see [pdaghana.com](https://www.pdaghana.com) where relevant.
