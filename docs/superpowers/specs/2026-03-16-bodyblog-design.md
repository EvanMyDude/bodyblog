# BodyBlog — Interactive 3D Blog Website

## Overview

A dark-themed blog site for sharing educational content about the human body, movement, neuroscience, and breathwork. Features interactive 3D biological elements on the homepage hero, Evervault-style hover effects on blog cards, and a scroll-animated reading experience for posts.

Live at: `evanmydude.github.io/bodyblog`
Repository: `github.com/EvanMyDude/bodyblog`

## Design Decisions

### Aesthetic: Clean modern with 3D accents
Dark theme (#0a0a0a background) with subtle borders, green/blue gradient accents, and organic/biological 3D elements. The 3D and animation effects enhance without overwhelming — the content is the focus.

### Stack: Vite + React + React Router
Chosen over vanilla HTML/JS because the interactive components (Spline SDK, Framer Motion, Evervault card effect) are React-native. Recreating them in vanilla JS would sacrifice quality. Vite builds to static files that deploy directly to GitHub Pages.

Chosen over Next.js because it's lighter weight — no SSR needed for a static blog, and simpler GitHub Pages deployment.

### Content management: posts.ts data file
All blog posts live in a single `src/data/posts.ts` file with title, slug, category, date, excerpt, and content (as JSX). No CMS, no markdown — the user provides text and it gets added to this file. Posts automatically appear on the homepage card grid and get their own URL route.

## Tech Stack

- **Vite** — build tool, dev server
- **React** — UI framework
- **TypeScript** — type safety
- **React Router** — client-side routing (`/`, `/post/:slug`)
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — scroll animations, motion values, spring physics
- **Spline SDK** (`@splinetool/react-spline`) — 3D biological scene in hero
- **shadcn/ui patterns** — Card component, `cn()` utility

## Pages

### Homepage (`/`)

**Navigation bar:** Logo ("BodyBlog") left, links (Home, Posts, Categories, About) right. Clean top bar with subtle bottom border.

**Hero section:** Split layout.
- Left side: Category label ("Exploring the Human OS"), gradient text title ("Hacking the Human OS"), tagline, two CTA buttons ("Read Latest" green filled, "Explore Topics" outlined).
- Right side: Spline 3D scene with an organic/biological model. Spotlight SVG overlay for ambient glow effect.
- Components used: `SplineScene`, `Spotlight` (Aceternity version), `Card`.

**Blog cards grid:** 3-column responsive grid of post cards.
- Each card uses the `EvervaultCard` hover effect — on mouse move, random characters are revealed through a radial gradient mask with a green-to-blue gradient glow.
- Cards display: color-coded category badge, Evervault effect zone, post title, excerpt, date.
- Clicking a card navigates to `/post/:slug`.
- Category colors: green (Neuroscience), blue (Movement), purple (Breathwork) — expandable.

**Footer:** Minimal centered text.

### Blog Post Page (`/post/:slug`)

**Navigation:** Single "← Home" button top-left. No full navbar — keeps the reading experience clean.

**Title area (ContainerScroll header):** Category badge, subtitle line, large bold post title with gradient text, date and reading time metadata. This is the `titleComponent` prop of `ContainerScroll` — it replaces the demo's "Unleash the power of Scroll Animations" text.

**Content card (ContainerScroll body):** The blog content renders inside the animated card container.
- On load: card is tilted at 20° rotateX with 3D perspective, scale 1.05
- On scroll: card rotates flat (0°), scales to 1.0, title slides up and away
- Final state: flat reading surface with full article content

**Blog content styling inside card:**
- 720px-ish max-width for readable line length
- Line-height 1.85, 14-15px body text
- Standalone emphatic lines (e.g., "This is the first truth.") rendered in green italic
- Diamond (◆) section dividers between major sections
- Green left-border callout blocks for key insights
- Section headings in white, bold
- Body text in #a3a3a3, slightly muted for comfortable dark-mode reading

## Project Structure

```
bodyblog/
├── src/
│   ├── components/ui/           # Reusable UI primitives
│   │   ├── container-scroll-animation.tsx  # ContainerScroll + Header + Card
│   │   ├── evervault-card.tsx              # EvervaultCard + CardPattern
│   │   ├── splite.tsx                      # SplineScene wrapper
│   │   ├── spotlight.tsx                   # Aceternity Spotlight SVG
│   │   └── card.tsx                        # shadcn Card
│   ├── components/              # App-level components
│   │   ├── Navbar.tsx           # Top navigation (homepage)
│   │   ├── HeroSection.tsx      # Spline 3D + Spotlight hero
│   │   ├── BlogCard.tsx         # Evervault card wrapping post data
│   │   └── BlogPostLayout.tsx   # ContainerScroll + styled content
│   ├── pages/                   # Route pages
│   │   ├── Home.tsx             # Hero + blog card grid
│   │   └── BlogPost.tsx         # Scroll-animated post page
│   ├── data/
│   │   └── posts.ts             # All blog post content & metadata
│   ├── lib/
│   │   └── utils.ts             # cn() helper (clsx + tailwind-merge)
│   ├── App.tsx                  # React Router setup
│   ├── main.tsx                 # Entry point
│   └── index.css                # Tailwind directives + global styles
├── index.html
├── tailwind.config.ts
├── vite.config.ts               # GitHub Pages base path config
├── tsconfig.json
└── package.json
```

## Data Model

```typescript
interface BlogPost {
  slug: string;           // URL-friendly identifier, e.g. "hacking-the-human-os"
  title: string;          // "Hacking the Human OS"
  subtitle: string;       // "Exploring the patterns within"
  category: string;       // "Neuroscience"
  categoryColor: string;  // "#22c55e"
  date: string;           // "March 16, 2026"
  readTime: string;       // "15 min read"
  excerpt: string;        // Short preview for card
  content: React.ReactNode; // Full post as JSX
}
```

## Routing

| Path | Page | Description |
|------|------|-------------|
| `/` | Home | Hero + blog card grid |
| `/post/:slug` | BlogPost | Scroll-animated post page |

React Router with `HashRouter` for GitHub Pages compatibility (no server-side routing needed).

## Deployment

1. Vite config sets `base: '/bodyblog/'` for GitHub Pages subpath
2. `npm run build` outputs static files to `dist/`
3. GitHub Actions workflow: on push to `main`, build and deploy to `gh-pages` branch
4. GitHub Pages serves from `gh-pages` branch

## Adding a New Blog Post

1. User provides blog text
2. Add entry to `src/data/posts.ts` with all metadata and content as JSX
3. Post automatically appears on homepage card grid and gets its own route
4. `npm run build` → push → live

## NPM Dependencies

- `react`, `react-dom`
- `react-router-dom`
- `framer-motion`
- `@splinetool/runtime`, `@splinetool/react-spline`
- `tailwindcss`, `postcss`, `autoprefixer`
- `clsx`, `tailwind-merge`
- `typescript`

## Initial Content

The first blog post "Hacking the Human OS" will be populated with the full text provided by the user — covering neuroplasticity, breath mechanics, postural asymmetry, behavioral design, and identity migration.
