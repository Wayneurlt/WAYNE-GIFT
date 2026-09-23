# Portfolio

A personal developer portfolio built with Nuxt 3, Vue, and Tailwind CSS.

## Setup

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Personalize

All editable content lives in `data/`:

- `data/profile.ts` — name, bio, location, email, socials, stats
- `data/skills.ts` — languages, frameworks, and tools
- `data/projects.ts` — portfolio projects (title, description, tags, links)

For each project, just set `liveUrl` to the real site — a preview screenshot is generated
automatically from it (via a free screenshot service), no image upload needed. Only set an
explicit `image` if you want to override that (e.g. a mobile app with no live URL, or a custom
shot) — point it at a URL or a file under `public/projects/`.

## Build

```bash
npm run build   # production build
npm run generate # static site
npm run preview  # preview a production build locally
```
