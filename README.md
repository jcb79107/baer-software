# Baer Software

The website for **Baer Software**, an independent software studio. A short product listing with availability and links.

One static homepage built with Next.js App Router, TypeScript, and Tailwind CSS. No database, authentication, CMS, or backend services. System fonts keep the site fast and builds independent of font services.

## Products

- **[Linear Pointing](https://public-linear-pointing.vercel.app)** — available now. Refinement and private estimation for Linear teams, with decisions, estimates, and notes written back to Linear. [Source](https://github.com/jcb79107/linear-pointing).
- **[The Two Man](https://www.thetwoman.site)** — available now. The golf tournament website, with match results, team standings, and the playoff bracket.
- **Golf Commissioner** — in development. Tools for custom, season-long golf leagues and tournaments, informed by building The Two Man. The existing tournament app is not offered here as a commercial product.

## Local development

Use Node.js 22 or newer and npm.

```sh
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000). No environment variables are required.

## Checks and production build

```sh
npm run lint
npm run typecheck
npm run build
```

The production build exports static files to `out/`. To preview that exact output locally:

```sh
npx serve out
```

There is no application logic that needs a unit test suite. Check product links, keyboard navigation, and desktop/mobile layouts when changing the page.

## Structure

```text
src/app/page.tsx               Homepage
src/app/layout.tsx             Document, SEO, and Open Graph metadata
src/app/globals.css            Tailwind and site styles
src/app/icon.svg               Typographic favicon
src/components/product-card.tsx
src/data/products.ts           Typed product content
```

To add a product, append an entry to `src/data/products.ts`. Available products require a URL and CTA; products in development display a status without a launch link.

## Deployment

Live site: **[baer-software.vercel.app](https://baer-software.vercel.app)**.

Vercel project: `baer-software` in `jcb79107s-projects`. The GitHub repository is connected; pushes to `main` deploy to production automatically. `vercel.json` explicitly selects the Next.js preset. Vercel serves the static export without runtime services or a custom domain.

For a manual deployment from this directory:

```sh
npx vercel@latest login
npx vercel@latest link --project baer-software --scope jcb79107s-projects
npx vercel@latest --prod
```

The production address is set in `src/app/layout.tsx` for canonical and Open Graph URLs. Update it if the site moves to a custom domain.
