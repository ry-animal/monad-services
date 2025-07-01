'use client';

import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

function truncateAddress(address?: string) {
    if (!address) return '';
    return address.slice(0, 6) + '…' + address.slice(-4);
}

export default function ConnectWallet() {
    const { address, status } = useAccount();
    const { connectors, connect, status: connectStatus, error: connectError } = useConnect();
    const { disconnect } = useDisconnect();
    const [disconnecting, setDisconnecting] = useState(false);

    if (status === 'connected') {
        return (
            <div className="flex items-center gap-2 sm:gap-4">
                <span className="text-xs font-mono px-2 py-1 rounded bg-muted/50" title={address} aria-label="Wallet address">
                    {truncateAddress(address)}
                </span>
                <Button
                    variant="outline"
                    onClick={async () => {
                        setDisconnecting(true);
                        await disconnect();
                        setDisconnecting(false);
                    }}
                    aria-label="Disconnect wallet"
                    disabled={disconnecting}
                >
                    {disconnecting ? 'Disconnecting…' : 'Disconnect'}
                </Button>
            </div>
        );
    }

    return (
        <div className="flex flex-wrap gap-2 sm:gap-4 items-center">
            {connectors.map((connector) => (
                <Button
                    key={connector.id}
                    onClick={() => connect({ connector })}
                    disabled={!connector.ready || connectStatus === 'pending'}
                    aria-label={`Connect with ${connector.name}`}
                >
                    {connectStatus === 'pending' ? 'Connecting…' : connector.name}
                </Button>
            ))}
            {connectError && (
                <span className="text-destructive text-xs ml-2" role="alert">
                    {connectError.message}
                </span>
            )}
        </div>
    );
} 