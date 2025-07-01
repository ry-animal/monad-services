import { fetchPulses, Pulse } from '@/lib/ghostgraph';
import FeedItem from './FeedItem';

export default async function ActivityFeed() {
    const pulses: Pulse[] = await fetchPulses();

    // TODO: Add real filter/sort logic
    return (
        <div>
            <div className="flex gap-4 mb-4">
                <select className="border rounded px-2 py-1">
                    <option value="">All Types</option>
                    <option value="NFT Mint">NFT Mint</option>
                    <option value="Token Transfer">Token Transfer</option>
                    <option value="Swap">Swap</option>
                </select>
                <select className="border rounded px-2 py-1">
                    <option value="desc">Newest First</option>
                    <option value="asc">Oldest First</option>
                </select>
            </div>
            <div className="space-y-4">
                {pulses.map((pulse) => (
                    <FeedItem key={pulse.id} pulse={pulse} />
                ))}
            </div>
        </div>
    );
} 