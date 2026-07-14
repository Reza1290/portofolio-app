# Muhamad Reza Muktasib — Portfolio

An immersive, cinematic personal portfolio built as a single continuous animated landscape. Peaceful, atmospheric, and premium — inspired by Apple, Journey, Firewatch, and Studio Ghibli skies.

## Tech

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **TailwindCSS v4** (CSS-first design tokens)
- **Framer Motion** — parallax, scroll reveals, magnetic hover
- **Lucide** icons, **shadcn-style** UI primitives
- **next/font** (Geist + Manrope), **next/image**

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Customizing

- **Content** — everything (bio, experience, projects, skills, certifications) lives in [`lib/data.ts`](lib/data.ts).
- **Colors, fonts, animations** — the `@theme` block in [`app/globals.css`](app/globals.css).
- **Motion** — shared easing and variants in [`lib/motion.ts`](lib/motion.ts).
- **Portrait** — the About section uses a monogram placeholder. Add a photo to `public/` and swap it for `next/image` in [`components/sections/about.tsx`](components/sections/about.tsx).
- **Resume** — replace `public/muhamad-reza-muktasib-resume.pdf`.

## Structure

```
app/            layout, page, global styles
components/
  background/   layered animated landscape + parallax
  sections/     hero, about, experience, projects, skills, certifications, contact
  ui/           Button, Card, Badge
lib/            data (content), motion (variants), utils
hooks/          reusable client hooks
```

## Accessibility & performance

- Semantic landmarks, skip-to-content link, ARIA labels, keyboard-friendly navigation.
- Full `prefers-reduced-motion` support — parallax, particles, and transitions all wind down.
- Code-split section components, `next/font` with `display: swap`, GPU-friendly transforms.
