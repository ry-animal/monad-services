#!/bin/bash

set -e

CONTRACT_ADDRESS="$1"
COMPILER_VERSION="$2"
CONTRACT_PATH="packages/contracts/src/Reaction.sol"
CONTRACT_NAME="Reaction"
OUT_JSON="packages/contracts/out/Reaction.sol/Reaction.json"
RPC_URL="https://testnet-rpc.monad.xyz"
SOURCIFY_URL="https://sourcify-api-monad.blockvision.org"

if [[ -z "$CONTRACT_ADDRESS" || -z "$COMPILER_VERSION" ]]; then
  echo "Usage: $0 <contract_address> <compiler_version>"
  exit 1
fi

echo "==> Cleaning and building contract"
cd packages/contracts
forge clean
forge build
cd ../..

echo "==> Extracting local deployedBytecode"
LOCAL_BYTECODE=$(jq -r .deployedBytecode.object "$OUT_JSON")

echo "==> Fetching on-chain bytecode"
CHAIN_BYTECODE=$(cast code "$CONTRACT_ADDRESS" --rpc-url "$RPC_URL")

if [[ "$LOCAL_BYTECODE" == "$CHAIN_BYTECODE" ]]; then
  echo "==> Bytecode matches! Proceeding to verification..."
else
  echo "ERROR: Local and on-chain bytecode do NOT match."
  echo "Local:  ${LOCAL_BYTECODE:0:32}..."
  echo "Chain:  ${CHAIN_BYTECODE:0:32}..."
  exit 2
fi

echo "==> Attempting forge verify-contract with Sourcify"
forge verify-contract \
  --rpc-url "$RPC_URL" \
  --verifier sourcify \
  --verifier-url "$SOURCIFY_URL" \
  --compiler-version "$COMPILER_VERSION" \
  "$CONTRACT_ADDRESS" \
  "$CONTRACT_PATH:$CONTRACT_NAME" || {
    echo "==> Verification failed. Preparing files for manual upload..."

    METADATA_PATH="packages/contracts/out/Reaction.sol/Reaction.metadata.json"
    ABI_PATH="packages/contracts/out/Reaction.sol/Reaction.abi.json"

    echo "==> Copying source, ABI, and metadata for manual upload"
    cp "$CONTRACT_PATH" ./Reaction.sol
    cp "$ABI_PATH" ./Reaction.abi.json
    cp "$METADATA_PATH" ./Reaction.metadata.json

    echo "==> Files ready for manual upload to https://sourcify.dev/#/verify"
    echo " - Reaction.sol"
    echo " - Reaction.abi.json"
    echo " - Reaction.metadata.json"
    exit 3
}

echo "==> Verification complete!" 