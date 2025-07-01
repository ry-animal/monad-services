import { NextResponse } from 'next/server';

// Mock activity feed data
const feed = [
  {
    id: 'tx1',
    type: 'NFT Mint',
    from: '0xabc...123',
    to: '0xdef...456',
    value: '1.0',
    timestamp: Date.now() - 1000 * 60 * 60,
    emoji: 1,
    hash: '0x111...aaa',
  },
  {
    id: 'tx2',
    type: 'Token Transfer',
    from: '0xdef...456',
    to: '0xghi...789',
    value: '250',
    timestamp: Date.now() - 1000 * 60 * 30,
    emoji: 2,
    hash: '0x222...bbb',
  },
  {
    id: 'tx3',
    type: 'Swap',
    from: '0xghi...789',
    to: '0xabc...123',
    value: '0.5',
    timestamp: Date.now() - 1000 * 60 * 10,
    emoji: 3,
    hash: '0x333...ccc',
  },
];

export async function GET() {
  return NextResponse.json(feed);
} 