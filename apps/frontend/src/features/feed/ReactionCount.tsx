'use client';

import { useEffect, useState } from 'react';
import { fetchReactions } from '@/lib/ghostgraph';

type ReactionCountProps = {
    eventId: string;
};

type EmojiCount = {
    emojiId: number;
    count: number;
    emoji: string;
};

const EMOJI_MAP: Record<number, string> = {
    1: '👍',
    2: '❤️',
    3: '🔥',
    4: '🚀',
    5: '😂',
};

export default function ReactionCount({ eventId }: ReactionCountProps) {
    const [reactions, setReactions] = useState<EmojiCount[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadReactions() {
            try {
                const data = await fetchReactions(Number(eventId));

                // Group reactions by emoji ID and count them
                const emojiCounts: Record<number, number> = {};
                data.forEach((reaction) => {
                    const emojiId = Number(reaction.reactionType);
                    emojiCounts[emojiId] = (emojiCounts[emojiId] || 0) + 1;
                });

                const counts = Object.entries(emojiCounts).map(([emojiId, count]) => ({
                    emojiId: Number(emojiId),
                    count,
                    emoji: EMOJI_MAP[Number(emojiId)] || '❓',
                }));

                setReactions(counts);
            } catch (error) {
                // Silently fail for now, as reactions are optional
                console.warn('Failed to load reactions:', error);
            } finally {
                setLoading(false);
            }
        }

        loadReactions();
    }, [eventId]);

    if (loading) {
        return <div className="text-xs text-gray-400">Loading reactions...</div>;
    }

    if (reactions.length === 0) {
        return null;
    }

    return (
        <div className="flex gap-2 text-xs">
            {reactions.map((reaction) => (
                <span key={reaction.emojiId} className="text-gray-600">
                    {reaction.emoji} {reaction.count}
                </span>
            ))}
        </div>
    );
} 