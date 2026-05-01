# Do Nothing

Do Nothing is a satirical luxury landing page about the most premium experience possible with almost nothing to offer. The project is designed as a visual front-end showcase, with strong attention on layout, motion, typography, tone, and presentation polish.

The project exists for two reasons:

- to present a memorable polished web experience for general viewers
- to act as a front-end craft showcase through animation, responsive layout work, content presentation, and design-driven implementation

## What this project highlights

- premium editorial visual direction
- responsive pricing-card layout tuned for real desktop usage
- staged motion and scroll-based reveal behavior
- reusable content-driven UI patterns such as document popovers
- iterative front-end refinement with strong attention to details

## Tech summary

The current implementation is built with:

- Vite
- React 19
- TypeScript
- Motion
- Plain CSS
- Lucide React

## Local development

Prerequisite: Node.js 20 or newer

1. Install dependencies with `npm install`
2. Start the local server with `npm run dev`
3. Open the URL printed by Vite, usually `http://localhost:5173`

## Project structure

The codebase is organized by responsibility instead of by framework novelty. The goal is to keep visual iteration easy while preserving a clean structure for future additions.

```text
src/
  animations/   Shared Motion variants and reveal presets
  components/   Homepage sections and reusable UI pieces
  content/      Static homepage copy and structured content data
  hooks/        Reusable interaction hooks
  styles/       Theme tokens and homepage stylesheet
  App.tsx       Homepage composition
  main.tsx      React entry point
```

## Current experience

The live homepage currently includes:

- Header with navigation and inquiry action
- Hero with animated title gleam
- Pricing tiers with staggered reveal
- Heritage feature showcase with image-led layout
- Testimonial section
- Footer with document-style popovers for terms, privacy, and ethics

## Content and UI structure

Static site content lives in `src/content/homepage.ts`. This includes:

- navigation labels
- pricing tier data
- hero and feature copy
- testimonial copy
- footer document popover content
- local image references

Components focus on rendering and behavior. Static copy and structured content live outside the components so section layout work and wording changes stay easier to manage over time.

## Styling approach

- `src/styles/theme.css` contains theme tokens
- `src/styles/homepage.css` contains page styling
- `src/index.css` contains global imports and base rules

Plain CSS is used on purpose. The current direction prefers a clear stylesheet structure over mixed styling systems, which keeps the visual layer easier to inspect and evolve.

## Motion system

Shared motion presets live in `src/animations/homepageMotion.ts`. The first fold uses startup sequencing, and lower sections reveal as they enter view.

## Development notes

- The README is intentionally written at a project level, not at a function-by-function level.
- Implementation details can continue changing as the project grows.
