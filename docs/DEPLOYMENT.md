## Deployment guide

### Static hosting

This site is a Vite SPA. Deploy by building and serving the `dist/` folder.

```bash
npm install
npm run build
```

### Base path / subdirectory hosting

The repo is configured for relative asset paths:

- `vite.config.js` uses `base: "./"`

That makes it suitable for subdirectory hosting (for example, GitHub Pages under a project path).

### Vercel

Typical settings:

- **Build command**: `npm run build`
- **Output directory**: `dist`

### Netlify

Typical settings:

- **Build command**: `npm run build`
- **Publish directory**: `dist`

If you host as an SPA, ensure “history fallback” is enabled (so routes like `/projects` and `/vsla-impact-stories/comfort` resolve to `index.html`).

