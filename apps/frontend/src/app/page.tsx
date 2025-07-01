import ActivityFeed from '@/features/feed/ActivityFeed';
import PulseChart from '@/components/visualizations/PulseChart';

export default function HomePage() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
                <ActivityFeed />
            </div>
            <div>
                <PulseChart />
            </div>
        </div>
    );
} 