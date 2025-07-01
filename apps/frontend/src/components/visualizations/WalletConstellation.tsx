'use client';

import { Card } from '@/components/ui/card';
import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

type Node = { id: string; label: string; x?: number; y?: number; };
type Link = { source: string; target: string; };

const nodes: Node[] = [
    { id: '0xMe', label: 'You' },
    { id: '0xA', label: 'NFT' },
    { id: '0xB', label: 'DEX' },
    { id: '0xC', label: 'Whale' },
];
const links: Link[] = [
    { source: '0xMe', target: '0xA' },
    { source: '0xMe', target: '0xB' },
    { source: '0xA', target: '0xC' },
    { source: '0xB', target: '0xC' },
];

export default function WalletConstellation() {
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        if (!svgRef.current) return;
        const width = 300;
        const height = 200;
        const svg = d3.select(svgRef.current);
        svg.selectAll('*').remove();

        // D3 force simulation
        const simulation = d3.forceSimulation<Node>(nodes)
            .force('link', d3.forceLink<Node, d3.SimulationLinkDatum<Node>>(links).id((d: Node) => d.id).distance(70))
            .force('charge', d3.forceManyBody<Node>().strength(-120))
            .force('center', d3.forceCenter(width / 2, height / 2));

        // Draw links
        const link = svg.append('g')
            .attr('stroke', '#bbb')
            .attr('stroke-width', 2)
            .selectAll('line')
            .data(links)
            .join('line');

        // Draw nodes
        const node = svg.append('g')
            .attr('stroke', '#fff')
            .attr('stroke-width', 2)
            .selectAll('circle')
            .data(nodes)
            .join('circle')
            .attr('r', 18)
            .attr('fill', (_d: Node, i: number) => i === 0 ? '#6366f1' : '#a5b4fc');

        // Draw labels
        const label = svg.append('g')
            .selectAll('text')
            .data(nodes)
            .join('text')
            .attr('text-anchor', 'middle')
            .attr('dy', 5)
            .attr('font-size', 12)
            .text((d: Node) => d.label);

        simulation.on('tick', () => {
            link
                .attr('x1', (d: any) => (d.source as Node).x)
                .attr('y1', (d: any) => (d.source as Node).y)
                .attr('x2', (d: any) => (d.target as Node).x)
                .attr('y2', (d: any) => (d.target as Node).y);
            node
                .attr('cx', (d: Node) => d.x)
                .attr('cy', (d: Node) => d.y);
            label
                .attr('x', (d: Node) => d.x)
                .attr('y', (d: Node) => d.y);
        });

        return () => simulation.stop();
    }, []);

    return (
        <Card className="p-4">
            <h2 className="text-lg font-semibold mb-2">Wallet Constellation</h2>
            <svg ref={svgRef} width={300} height={200} className="mx-auto block bg-background border" />
        </Card>
    );
} 