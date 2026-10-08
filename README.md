# miro bayawa · portfolio

Personal portfolio: a single page with a light "fog + teal" theme and an optional dark mode.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- `motion` for the hero entrance, platform switcher, and expanding project rows
- `next/font/google` — Schibsted Grotesk
- Tool logos vendored in `public/logos/` from [devicon](https://devicon.dev) (MIT) and [simple-icons](https://simpleicons.org) (CC0)
- No backend, no database — content lives in `lib/data.ts`

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve production build
```

## Structure

```
app/            # layout, page composition, globals
components/
  sections/     # hero, about, work, stack, experience, contact
  nav.tsx       # sticky nav with scroll-spy
  reveal.tsx    # motion whileInView wrapper
  section-heading.tsx
  project-row.tsx
  theme-toggle.tsx
  theme-script.tsx
lib/
  data.ts       # profile, projects, experience, skills
  utils.ts      # cn()
public/
  resume.pdf
```

## Editing content

All copy, project data, and experience bullets live in `lib/data.ts`. Change there — no CMS needed.

## Deploy

Drops into Vercel / Netlify / Cloudflare Pages as a static Next.js app. Just push and connect.
