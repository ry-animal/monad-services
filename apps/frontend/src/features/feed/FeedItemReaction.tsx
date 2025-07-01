'use client';

import { useState } from 'react';
import { useAccount } from 'wagmi';
import { Button } from '@/components/ui/button';
import EmojiPicker from './EmojiPicker';
import ReactionButton from './ReactionButton';

type FeedItemReactionProps = {
    eventId: string;
};

export default function FeedItemReaction({ eventId }: FeedItemReactionProps) {
    const [selectedEmoji, setSelectedEmoji] = useState<number | null>(null);
    const [showPicker, setShowPicker] = useState(false);
    const { status } = useAccount();

    if (status !== 'connected') {
        return (
            <Button variant="outline" disabled size="sm">
                Connect Wallet to React
            </Button>
        );
    }

    if (selectedEmoji !== null) {
        return <ReactionButton eventId={eventId} emojiId={selectedEmoji} />;
    }

    return (
        <div className="space-y-2">
            {showPicker ? (
                <EmojiPicker onSelect={setSelectedEmoji} />
            ) : (
                <Button onClick={() => setShowPicker(true)} variant="outline" size="sm">
                    React
                </Button>
            )}
        </div>
    );
} 