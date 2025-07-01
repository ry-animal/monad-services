'use client';

import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider, createConfig, http } from 'wagmi';
import { monadTestnet } from '@/lib/chains';

const queryClient = new QueryClient();

const config = createConfig({
    chains: [monadTestnet],
    transports: {
        [monadTestnet.id]: http(),
    },
});

export default function WagmiProviders({ children }: { children: ReactNode }) {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </WagmiProvider>
    );
} 