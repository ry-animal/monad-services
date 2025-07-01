# Monad Pulse Subgraph

## Setup

1. Copy the latest Reaction contract ABI to `abis/Reaction.json`.
2. Update `subgraph.yaml` if contract address changes.
3. Run codegen and build:
   ```sh
   graph codegen && graph build
   ```
4. Deploy:
   ```sh
   graph deploy --node https://api.thegraph.com/deploy/ --ipfs https://api.thegraph.com/ipfs/ <YOUR_GRAPH_USERNAME>/monad-pulse
   ```

## Extending

- To index more contracts/events, add new data sources to `subgraph.yaml` and update mappings/schema as needed.

## GhostGraph & Multi-Indexer Support

- This subgraph is designed to work alongside GhostGraph, Monad's recommended indexer.
- To add new contracts or events to GhostGraph, follow the instructions in the [GhostGraph docs](https://docs.monad.xyz/guides/indexers/ghost#setting-up-ghostgraph-indexing).
- The architecture is modular and can be extended to support multiple indexers (Unmarshal, thirdweb, Zerion, etc.) for redundancy and richer data in the future.
