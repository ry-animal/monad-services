export const MONAD_CHAIN_ID = Number(process.env.NEXT_PUBLIC_MONAD_CHAIN_ID) || 10143;
export const MONAD_EXPLORER_URL = process.env.NEXT_PUBLIC_MONAD_EXPLORER_URL || 'https://testnet-explorer.monad.xyz';

export const monadTestnet = {
  id: MONAD_CHAIN_ID,
  name: 'Monad Testnet',
  network: 'monad-testnet',
  nativeCurrency: {
    name: 'Monad',
    symbol: 'MON',
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ['https://testnet-rpc.monad.xyz'] },
    public: { http: ['https://testnet-rpc.monad.xyz'] },
  },
  blockExplorers: {
    default: { name: 'MonadScan', url: MONAD_EXPLORER_URL },
  },
  testnet: true,
} as const; 