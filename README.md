# Monad Pulse Monorepo

A modern, full-stack dApp for Monad Testnet. Built with Next.js 15, shadcn/ui, Tailwind, Wagmi, Viem, Foundry, and GhostGraph. Monorepo managed with Turborepo.

## Structure

- `apps/frontend`: Next.js 15 app, shadcn/ui, Tailwind, Wagmi, Viem, Recharts
- `packages/contracts`: Foundry smart contracts (UUPS upgradeable, OpenZeppelin v5.x)
- `packages/ghostgraph`: Monad-native indexer (GhostGraph events, schema, stub indexer)
- `packages/subgraph`: (Deprecated) The Graph subgraph for legacy/reference

## Stack

- React Server Components (RSC)
- shadcn/ui + Tailwind CSS
- Wagmi + Viem (wallet, contract)
- @tanstack/react-query (client state)
- Recharts (visualizations)
- Foundry + OpenZeppelin (contracts)
- GhostGraph (indexer)
- Turborepo (monorepo)

## Dev

- `npm install` (at root)
- `npm run dev` (run all packages)
- See each package for details

## Reference

- See `MONOREPO_STRUCTURE.md` for detailed structure
- See `@impl-plan.mdc` for implementation plan

## Monorepo Structure

- `packages/contracts` — Solidity contracts, tests, scripts
- `packages/frontend` — Next.js 15 frontend, feature-based
- `packages/subgraph` — The Graph subgraph (deprecated)
- `packages/ghostgraph` — GhostGraph indexer (recommended)

See ROADMAP.md for planned features and integration steps.

## Indexing: GhostGraph (Recommended)

- Uses [GhostGraph](https://docs.monad.xyz/guides/indexers/ghost) for real-time, EVM-native event indexing on Monad Testnet.
- See `packages/ghostgraph/README.md` for setup and deployment.
- The Graph (`packages/subgraph/`) is deprecated but left for reference.

## Deployment

### Contracts

- See `packages/contracts/README.md` for build, test, and deploy instructions (Foundry).

### Frontend

- See `packages/frontend/README.md` for local dev and Vercel deployment.
- Requires a `.env` with your GhostGraph endpoint and contract addresses.

### GhostGraph Indexer

- See `packages/ghostgraph/README.md` for setup, schema, and deployment.
- Follows Monad's official [GhostGraph guide](https://docs.monad.xyz/guides/indexers/ghost).

### The Graph (Deprecated)

- `packages/subgraph/` contains a legacy subgraph for The Graph protocol. No longer maintained.

---

For more, see the PRD and ROADMAP files.
