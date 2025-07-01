# Monad Pulse Frontend

This is the Next.js 15 frontend for Monad Pulse, using shadcn/ui, Tailwind, Wagmi, Viem, and Recharts. Organized by feature, with React Server Components where possible.

## Structure

- `src/app/`: App Router, layouts, pages (all routes are now flat and use a single global layout)
- `src/components/`: UI primitives (shadcn/ui), shared, visualizations
- `src/features/`: Feature-specific components (feed, etc.)
- `src/lib/`: Utilities, GhostGraph client, chain config
- `src/providers/`: Wagmi, QueryClient providers
- `public/`: Static assets

## Layout & Routing

- All pages/routes live directly under `src/app/` (e.g., `page.tsx`, `debug/page.tsx`, `wallet/page.tsx`, `tx/[txid]/page.tsx`).
- The global layout (`layout.tsx`) provides the header, navigation, footer, and providers for all routes.
- To add a new page, create a new folder and `page.tsx` under `src/app/` (e.g., `src/app/analytics/page.tsx` for `/analytics`).
- There is no longer a `(main)` route group—all routes share the same app shell.

## Tech Stack

- Next.js 15 (App Router, RSC)
- shadcn/ui + Tailwind CSS
- Wagmi + Viem (wallet, contract)
- @tanstack/react-query (client state)
- Recharts (visualizations)

## Dev

```sh
npm run dev
```

## Monorepo

See root README for monorepo structure and contracts/indexer info.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## GhostGraph Integration

All activity and feed data is sourced from GhostGraph, Monad's recommended indexer.

- Configure the GhostGraph API endpoint via `.env`:
  ```
  NEXT_PUBLIC_GHOSTGRAPH_URL=https://ghostgraph.monadpulse.io/api
  ```
- The frontend uses this endpoint for all activity feed, wallet activity, and pulse chart data.
- To add new contracts or events to GhostGraph, see the [GhostGraph docs](https://docs.monad.xyz/guides/indexers/ghost#setting-up-ghostgraph-indexing).
