# Monad Pulse Monorepo Structure

## Top-Level Monorepo Structure

/monad-pulse
├── apps
│ └── frontend # Next.js application
├── packages
│ ├── contracts # Foundry smart contract project
│ ├── ghostgraph # Monad-native indexer
│ └── subgraph # The Graph (deprecated)
├── package.json # Monorepo root
└── turbo.json # Turborepo config

## Frontend (apps/frontend)

- Next.js 15, shadcn/ui, Tailwind, Wagmi, Viem, Recharts
- Feature-based, RSCs, App Router
- src/app/(main)/layout.tsx, page.tsx, wallet/page.tsx
- src/components/ui, shared, visualizations
- src/features/feed, etc.
- src/lib, src/providers

## Contracts (packages/contracts)

- Foundry, OpenZeppelin v5.x, UUPS upgradeable
- src/Reaction.sol, test/Reaction.t.sol

## GhostGraph (packages/ghostgraph)

- events.sol, schema.sol, indexer.sol, README
- TypeScript client in frontend

## Subgraph (packages/subgraph)

- Deprecated, for reference only
- schema.graphql, mapping.ts, subgraph.yaml, abis/Reaction.json

## Best Practices

- Use RSCs where possible
- Feature-based organization
- shadcn/ui for all UI primitives
- Tailwind for styling
- Monorepo managed with Turborepo
