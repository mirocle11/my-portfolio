# miro bayawa · portfolio

Personal portfolio — single-page, editorial-technical aesthetic. Dark-first with paper/ink theme toggle.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- `motion` for scroll reveals and micro-interactions
- `next/font/google` — Instrument Serif, Instrument Sans, JetBrains Mono
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
