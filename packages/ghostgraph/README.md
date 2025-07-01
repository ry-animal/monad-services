# GhostGraph for Monad Pulse

GhostGraph is the canonical indexer for Monad Pulse. All onchain and frontend data flows use GhostGraph as the source of truth. The Graph subgraph is deprecated and only provided for reference.

## Features

- Native Monad event indexing
- Fast, flexible queries for Pulse, reactions, and wallet activity
- TypeScript client for frontend integration

## Usage

- Solidity contracts emit events defined in `events.sol`
- The GhostGraph indexer listens for these events and updates its database
- Frontend queries GhostGraph via the provided TypeScript client (`lib/ghostgraph.ts`)

## Development

- See `events.sol` for event definitions
- See `indexer.sol` for indexer logic (if onchain) or the TypeScript indexer implementation
- See `lib/ghostgraph.ts` in the frontend for client usage

## Deprecation Notice

The Graph subgraph is deprecated. Use GhostGraph for all new development.
