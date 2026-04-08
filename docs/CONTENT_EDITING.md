## Content editing guide (PDA Africa website)

This guide is for updating text, images, and adding new content pages without changing the overall layout or routing patterns.

### Where text lives

- **English**: `src/translations/en.js`
- **French**: `src/translations/fr.js`

Most pages pick a translation namespace like this:

```jsx
const { language } = useLanguage();
const t = language === "en" ? en.someNamespace : fr.someNamespace;
```

When you add new copy, add the same key in **both** language files.

### Images

- Store images in `src/assets/images/`
- Export them from `src/assets/images/index.js`
- Import them from `../assets/images` (most pages follow that pattern)

Tips:

- Use **reasonable file sizes** (compressed JPG/PNG) to keep load times fast.
- Prefer consistent naming (e.g. `ProjectName.jpg`, `person-name.jpg`).

### Projects (cards on the Projects page)

Projects are shown using the `projects` array in `src/constants/index.js`.

- Add a new entry to `projects` with:
  - `label` (used as a key into translations)
  - `subtext`
  - `imgURL`
  - `link` (internal route or external URL)
- In translations, add:
  - `projects.projectList["Exact Label"]` in both `en.js` and `fr.js`
- If your project has its own page:
  - Create `src/pages/YourProject.jsx`
  - Register a route in `src/main.jsx`

### VSLA impact stories

VSLA impact stories are maintained via:

- **Data**: `src/data/vslaImpactStories.js` (slugs + image mapping)
- **Translations**: `vslaImpactStories` in `src/translations/en.js` and `src/translations/fr.js`
- **Pages**:
  - Index: `src/pages/VSLAImpactStoriesIndex.jsx`
  - Detail: `src/pages/VSLAImpactStoryPage.jsx`

To add a story:

1. Add portrait image to `src/assets/images/` and export it in `src/assets/images/index.js`
2. Add the slug and image mapping in `src/data/vslaImpactStories.js`
3. Add story content under `vslaImpactStories.stories[slug]` in both translation files

### Common “gotchas”

- **Missing French copy**: the UI will still render, but content may be blank or inconsistent. Always update both translation files.
- **Sticky headers**: if the first text is too close to the top, increase the top padding in the page’s first section.

