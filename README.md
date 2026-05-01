# Do Nothing

Do Nothing is a polished satirical luxury landing page built with Vite, React, TypeScript, Motion, and plain CSS. The current implementation focuses on a premium visual experience with staged entrance motion, editorial typography, pricing-tier presentation, art-directed content panels, and footer document popovers.

## Stack

- Vite
- React 19
- TypeScript
- Motion
- Plain CSS
- Lucide React

## Scripts

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`
- `npm run lint`
- `npm run clean`

## Local development

Prerequisite: Node.js 20 or newer

1. Install dependencies with `npm install`
2. Start the local server with `npm run dev`
3. Open the URL printed by Vite, usually `http://localhost:5173`

## Project structure

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

## Current homepage sections

- Header with navigation and inquiry action
- Hero with animated title gleam
- Pricing tiers with staggered reveal
- Heritage feature showcase with image-led layout
- Testimonial section
- Footer with document-style popovers for terms, privacy, and ethics

## Content model

Static site content lives in `src/content/homepage.ts`. This includes:

- navigation labels
- pricing tier data
- hero and feature copy
- testimonial copy
- footer document popover content
- local image references

## Styling

- `src/styles/theme.css` contains theme tokens
- `src/styles/homepage.css` contains page styling
- `src/index.css` contains global imports and base rules

## Motion

Shared motion presets live in `src/animations/homepageMotion.ts`. The first fold uses startup sequencing, and lower sections reveal as they enter view.
