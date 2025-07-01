import { Pulse } from '@/lib/ghostgraph';
import { Card } from '@/components/ui/card';
import FeedItemReaction from './FeedItemReaction';
import ReactionCount from './ReactionCount';

type FeedItemProps = {
    pulse: Pulse;
};

export default function FeedItem({ pulse }: FeedItemProps) {
    return (
        <Card className="p-4">
            <div className="font-bold">{pulse.type}</div>
            <div className="text-sm text-gray-500">From: {pulse.from} → {pulse.to}</div>
            <div className="text-sm text-gray-500">Value: {pulse.value}</div>
            <div className="text-sm text-gray-500">Emoji: {pulse.emoji}</div>
            <div className="text-xs text-gray-400">Hash: {pulse.hash}</div>
            <div className="text-xs text-gray-400">{new Date(pulse.timestamp).toLocaleString()}</div>

            <div className="mt-3 space-y-2">
                <ReactionCount eventId={pulse.id} />
                <FeedItemReaction eventId={pulse.id} />
            </div>
        </Card>
    );
} 