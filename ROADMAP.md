# Monad Pulse – Development Roadmap

## ✅ Completed

- Monorepo structure established (apps/frontend, packages/contracts, packages/subgraph)
- Foundry project initialized in packages/contracts
- Monad testnet config added to foundry.toml
- .env.example created for PRIVATE_KEY management
- Reaction.sol contract implemented (open interaction, owner-admin)
- Full Foundry test suite for Reaction.sol
- Keystore deployment docs added (recommended for deploys)
- Subgraph/ABI export scaffolding in place
- Initial frontend ABI/types integration
- Flattened Next.js app structure, unified all routes under a single global layout, removed (main) route group.

## 🚧 In Progress

- Move all addresses, endpoints, and config to env-driven (except keystore deploys)
- GhostGraph: ensure Reaction events are indexed, update frontend to use GhostGraph for all activity/feed data
- Scaffold Blink API endpoints (`/api/actions/react`, `actions.json`) for one-click reactions
- Integrate Reown AppKit for Monad-native wallet connection
- Update all configs for correct chainId, RPC, explorer URLs

## 📝 Next Steps

- Review for any remaining dead code or unused folders, polish navigation, and update documentation to reflect new structure.
- Finalize env-driven config for all contracts, endpoints, and addresses
- Build and test Blink POST/GET endpoints with CORS/OPTIONS
- Wire up frontend to use env vars for contract address, GhostGraph, etc.
- Add more contracts/events to GhostGraph as needed
- Scaffold TG bot integration (optional, for whale alerts)
- Integrate historical data endpoints for analytics
- Write end-to-end tests for full pipeline (contract → indexer → frontend → blink)
- Polish UI, add visualizations, and prepare for mainnet

## 🚀 Future Milestones

- **Account Abstraction (AA) Wallet Support:**
  - Design for compatibility with smart contract wallets (ERC-4337, bundlers, paymasters)
  - Track Monad AA infra and WaaS providers
  - [Monad AA Docs](https://docs.monad.xyz/tooling-and-infra/account-abstraction)
- **Cross-Chain Event Indexing & UI:**
  - Architect for chain-agnostic data and UI
  - Integrate with bridges (CCIP, LayerZero, Wormhole, etc.)
  - [Cross-Chain Docs](https://docs.monad.xyz/tooling-and-infra/cross-chain)
- **Multi-Indexer & Advanced Analytics:**
  - Support multiple indexers (Unmarshal, thirdweb, Zerion, etc.)
  - Evaluate frameworks (Goldsky, Allium, Dune Echo, etc.)
  - [Common Data](https://docs.monad.xyz/tooling-and-infra/indexers/common-data), [Indexing Frameworks](https://docs.monad.xyz/tooling-and-infra/indexers/indexing-frameworks)
- **Oracle Integration:**
  - Integrate price feeds (Chainlink, Pyth, etc.) for analytics and on-chain triggers
  - [Oracles](https://docs.monad.xyz/tooling-and-infra/oracles)
- **Multi-RPC Support & Failover:**
  - Use env-driven config for all RPC endpoints
  - Support multiple providers for reliability
  - [RPC Providers](https://docs.monad.xyz/tooling-and-infra/rpc-providers)
- **Monad-Specific Error Handling:**
  - Use Monad-specific error codes and handle quirks (block range, unsupported methods)
  - [RPC Error Codes](https://docs.monad.xyz/reference/rpc-error-codes), [RPC Differences](https://docs.monad.xyz/reference/rpc-differences)

---

## References & Best Practices

- [Monad Blinks Guide](https://docs.monad.xyz/guides/blinks-guide)
- [Reown Guide](https://docs.monad.xyz/guides/reown-guide)
- [Monad Best Practices](https://docs.monad.xyz/developer-essentials/best-practices)
- [GhostGraph Indexer](https://docs.monad.xyz/guides/indexers/ghost#setting-up-ghostgraph-indexing)
- [TG Bot/Envio Indexer](https://docs.monad.xyz/guides/indexers/tg-bot-using-envio)
- [Network Info](https://docs.monad.xyz/developer-essentials/network-information)
- [Historical Data](https://docs.monad.xyz/developer-essentials/historical-data-on-monad)
- [Monad Research](https://docs.google.com/document/d/1NLTwOfCvCQ6JtSsjlleFARyKdOKB5P8ftxlI5SzrLU4/edit?usp=sharing)

---

_This file is updated as progress is made. See PRs and commits for granular details._
