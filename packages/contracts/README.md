# Monad Pulse Contracts

This package contains the Reaction contract for Monad Pulse, using OpenZeppelin UUPS upgradeability and Foundry for testing.

## Structure

- `src/Reaction.sol`: UUPS upgradeable Reaction contract
- `test/Reaction.t.sol`: Foundry test for Reaction

## Dev

- Install dependencies: `forge install OpenZeppelin/openzeppelin-contracts-upgradeable foundry-rs/forge-std`
- Build: `forge build`
- Test: `forge test`

## Upgradeability

- Uses OpenZeppelin UUPS pattern
- Only owner can upgrade

## Deployment (Keystore Best Practice)

1. Create a keystore (recommended):

   ```sh
   cast wallet import monad-deployer --private-key <YOUR_PRIVATE_KEY>
   ```

   This will prompt for a password and create a keystore file in `~/.foundry/keystores/`.

2. Get your deployer address:

   ```sh
   cast wallet address --account monad-deployer
   ```

3. Fund your deployer address with Monad testnet tokens.

4. Deploy the contract:
   ```sh
   forge create src/Reaction.sol:Reaction --account monad-deployer --rpc-url https://testnet-rpc.monad.xyz --broadcast
   ```

## ABI Export (for Frontend/Subgraph)

After building:

```sh
forge build
```

The ABI will be at:

```
out/Reaction.sol/Reaction.json
```

Copy the ABI to your frontend and subgraph as needed.
