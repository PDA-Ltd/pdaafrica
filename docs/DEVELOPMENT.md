## Development guide

### Install and run

```bash
npm install
npm run dev
```

Vite runs the dev server (typically `http://localhost:5173`).

### Build and preview

```bash
npm run build
npm run preview
```

The production build output is written to `dist/`.

### Lint

```bash
npm run lint
```

ESLint is configured, but the repo may contain legacy lint issues. Treat lint cleanup as incremental unless you plan a dedicated refactor.

### Environment variables

This project is primarily content-driven and does not require runtime environment variables for most pages. If you add integrations later (forms, analytics, APIs), document required variables in `README.md` and provide a `.env.example`.

### Styling conventions

- **Tailwind-first**: most styling is inline with Tailwind utility classes.
- **Keep page layout consistent**: follow the patterns in `src/pages/` (sticky sub-nav + content container + footer).
- **Prefer composition**: shared UI belongs in `src/components/` or `src/sections/`.

