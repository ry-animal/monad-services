'use client';

import { Button } from '@/components/ui/button';
import { useWriteContract, useAccount, useWaitForTransactionReceipt } from 'wagmi';
import { REACTION_ABI, REACTION_ADDRESS } from '@/lib/contracts/reaction';
import { getExplorerUrl, truncateHash } from '@/lib/utils';
import { useState } from 'react';
import { toast } from 'sonner';

type ReactionButtonProps = {
    eventId: string;
    emojiId: number;
};

export default function ReactionButton({ eventId, emojiId }: ReactionButtonProps) {
    const [error, setError] = useState<string | null>(null);
    const { writeContractAsync } = useWriteContract();
    const { status } = useAccount();
    const [txHash, setTxHash] = useState<string | null>(null);

    const { isLoading: isConfirming } = useWaitForTransactionReceipt({
        hash: txHash as `0x${string}`,
    });

    async function handleReact() {
        setError(null);
        try {
            toast.loading('Confirming transaction...', { id: 'reaction' });

            const hash = await writeContractAsync({
                address: REACTION_ADDRESS as `0x${string}`,
                abi: REACTION_ABI,
                functionName: 'addReaction',
                args: [eventId as `0x${string}`, emojiId],
            });

            setTxHash(hash);

            toast.success('Reaction added!', {
                id: 'reaction',
                description: `Transaction: ${truncateHash(hash)}`,
                action: {
                    label: 'View on Explorer',
                    onClick: () => window.open(getExplorerUrl(hash), '_blank'),
                },
            });
        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : 'Error';
            setError(message);
            toast.error('Failed to react', {
                id: 'reaction',
                description: message,
            });
        }
    }

    if (status !== 'connected') {
        return (
            <Button variant="outline" disabled>
                Connect Wallet to React
            </Button>
        );
    }

    return (
        <div>
            <Button onClick={handleReact} variant="default" disabled={isConfirming}>
                {isConfirming ? 'Confirming...' : 'React'}
            </Button>
            {error && <div className="text-xs text-red-500 mt-1">{error}</div>}
        </div>
    );
} 