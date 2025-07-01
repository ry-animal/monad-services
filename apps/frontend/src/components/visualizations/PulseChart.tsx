'use client';

import { Card } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { time: '10:00', pulses: 2 },
    { time: '11:00', pulses: 5 },
    { time: '12:00', pulses: 3 },
    { time: '13:00', pulses: 7 },
];

export default function PulseChart() {
    return (
        <Card className="p-4">
            <h2 className="text-lg font-semibold mb-2">Pulse Activity</h2>
            <ResponsiveContainer width="100%" height={200}>
                <LineChart data={data}>
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="pulses" stroke="#6366f1" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </Card>
    );
} 