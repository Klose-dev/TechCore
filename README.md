# TechCore Studio

Marketing site for **TechCore Studio**, a small software team based in **Yaoundé, Cameroon** that designs and builds web apps, desktop apps, mobile apps, AI tools, and data systems.

The site presents the studio's services, a 30-day delivery process, proof points, selected work, and a contact path — and is built to be a calm, confident, trustworthy presence rather than a busy agency page.

---

## Quick start

```bash
npm install       # install dependencies
npm run dev       # start dev server (prints a local URL)
npm run build     # typecheck + production build into dist/
npm run preview   # serve the production build locally
npm run lint      # run ESLint
```

Requires **Node.js 18+** (developed against Node 25) and npm.

---

## Tech stack

| Concern | Choice |
| --- | --- |
| Framework | React 18 + Vite 5 |
| Language | TypeScript |
| Styling | Tailwind CSS with a custom token theme |
| Routing | React Router |
| Animation | Framer Motion |
| Icons | Lucide React, Font Awesome, Heroicons |
| Primitives | Radix UI (shadcn/ui), Lightwind |
| Forms | React Hook Form + Zod |
| Fonts | Sora (headings), Source Sans 3 (body) |

---

## Design system

The visual language is defined in `tailwind.config.cjs` and `src/index.css`.

**Palette**

| Token | Light | Role |
| --- | --- | --- |
| `background` | `#FAFBF9` | Soft off-white page base |
| `foreground` | `#1A1F1B` | Deep green-ink text |
| `primary` | `#007A3E` | Main CTA and brand green |
| `primary-dark` | `#005C30` | Large panels that carry white body text |
| `secondary` | `#5C7364` | Muted green-grey for supporting copy |
| `accent` | `#FFB366` | Warm amber, used sparingly |
| `border` | `#B3C3B8` | Sage hairline rules |

**Shape & rhythm** — 4px spacing base, 10px standard radius, 16px large radius, pill buttons, generous vertical padding, and borders rather than heavy shadows.

> **Accessibility note.** `primary` was originally `#008A48` and was darkened to `#007A3E` because the original value only reached 4.44:1 against white — just under the WCAG AA 4.5:1 threshold. Every text/background pair in the site has been measured and passes AA in both themes. If you change this token, re-check contrast.

Dark mode is class-based and persisted to `localStorage` by `src/hooks/use-dark-mode.tsx`. Dark-mode overrides for `text-foreground`, `text-secondary`, `text-primary`, `text-muted-foreground`, `text-slate-400`, `bg-surface`, `bg-background`, and `bg-accent-soft` live in `src/index.css`.

---

## Project structure

```
src/
├── components/
│   ├── landing/        # Studio landing-page sections (home page)
│   ├── layout/         # Header, footer, mobile nav, header search
│   ├── lightswind/     # RaysBackground and other background effects
│   ├── projects/       # Project list and project card
│   ├── sections/       # Shared page sections (FAQ, team, icon boxes, CTA)
│   └── ui/             # Reusable primitives (Button, MagicCard, Counter, …)
├── config/site.ts      # Navigation, footer links, site name
├── data/projects.json  # Project content
├── hooks/              # use-transition, use-dark-mode
└── pages/              # Route components
```

---

## Custom components

These were built for this project rather than inherited from the template:

- **`components/ui/magic-card.tsx`** — cursor-tracked spotlight plus spring 3D tilt. Used on cards across every page. Disabled under `prefers-reduced-motion`.
- **`components/ui/motion.ts`** — shared easing, stagger timings, and `useRevealVariants()` for scroll reveals.
- **`components/ui/counter.tsx`** — count-up for the proof-point statistics.
- **`components/ui/typewriter-text.tsx`** — cycling typewriter for the manifesto headline.
- **`components/sections/landing/hero-capability-panel.tsx`** — interactive, auto-rotating capability tabs plus an animated sprint-progress track.
- **`components/layout/header-search.tsx`** — site search palette. `⌘K` / `Ctrl+K` or `/` to open, arrow keys to move, `Enter` to open, `Esc` to close.
- **`components/lightswind/rays-background.tsx`** — soft conic "rays" backdrop. Deliberately CSS-based rather than WebGL so many instances can coexist on one page without exhausting the browser's WebGL context limit.
- **`components/sections/manifesto.tsx`** — manifesto block with typewriter animation.

---

## Accessibility

- All measured text/background combinations meet WCAG AA in light and dark mode.
- Animations respect `prefers-reduced-motion`; transforms and typewriter are disabled and content renders immediately.
- The search palette is keyboard navigable and restores page scroll on close.

---

## Deployment

Builds to a static `dist/` directory and deploys to any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages). Configure a `base` path in `vite.config.ts` if deploying to a sub-path.

---

## Content to replace before launch

Some content is placeholder and should be updated with real details:

- Proof points (40+ projects, 25+ clients) and the three testimonials in `section-studio-stats.tsx`
- Case studies in `section-studio-work.tsx` and `src/data/projects.json`
- Team photos in `public/team/` and the names in `section-team.tsx`
- FAQ answers in `section-faq.tsx`
- WhatsApp number and email in `src/components/layout/footer.tsx`
- Social links currently point to `#`

---

## License

MIT
