# Baer Software

The website for **Baer Software**, an independent software studio. A short product listing with availability and links.

One static homepage built with Next.js App Router, TypeScript, and Tailwind CSS. No database, authentication, CMS, or backend services. System fonts keep the site fast and builds independent of font services.

## Products

- **[Linear Pointing](https://public-linear-pointing.vercel.app)** — available now. Refinement and private estimation for Linear teams, with decisions, estimates, and notes written back to Linear. [Source](https://github.com/jcb79107/linear-pointing).
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

Deploy as a new Vercel project named `baer-software` using the Next.js preset. Vercel serves the static export; no runtime services or custom domain are needed.

The Vercel CLI’s saved login required renewal during initial setup, so deployment was not performed. From this directory, run:

```sh
npx vercel@latest login
npx vercel@latest link
npx vercel@latest --prod
```

Select your personal Vercel scope and create a **new** project named `baer-software` when prompted. Accept the detected Next.js settings. Do not link to an existing product project. Alternatively, import `jcb79107/baer-software` in the Vercel dashboard to connect GitHub and enable deployments from `main`.

The public site uses only relative internal links and does not assume a custom domain. Add a canonical URL to the metadata once the permanent production address is known.
