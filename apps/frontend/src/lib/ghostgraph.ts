import { getMonadRpcErrorMessage } from './rpcErrorHandler';
import { fetchGhostGraph } from './ghostgraph';

export type Pulse = {
  id: string;
  type: string;
  from: string;
  to: string;
  value: string;
  timestamp: number;
  emoji: number;
  hash: string;
};

export type Reaction = {
  pulseId: number;
  reactor: string;
  reactionType: string;
  timestamp: number;
};

const BASE_URL = process.env.NEXT_PUBLIC_GHOSTGRAPH_URL || 'https://ghostgraph.monadpulse.io/api';

export async function fetchPulses(limit = 20): Promise<Pulse[]> {
  const query = `{
    pulses(limit: ${limit}) {
      items {
        id
        author
        contentHash
        timestamp
        reactionCount
      }
    }
  }`;
  const result = await fetchGhostGraph<{ data: { pulses: { items: Pulse[] } } }>(query);
  return result.data.pulses.items;
}

export async function fetchReactions(pulseId: number): Promise<Reaction[]> {
  try {
    const res = await fetch(`${BASE_URL}/pulses/${pulseId}/reactions`);
    if (!res.ok) throw new Error('Failed to fetch reactions');
    return res.json();
  } catch (err) {
    throw new Error(getMonadRpcErrorMessage(err));
  }
}

export async function fetchWalletActivity(address: string): Promise<Pulse[]> {
    const res = await fetch(`${BASE_URL}/wallets/${address}/activity`);
    if (!res.ok) throw new Error('Failed to fetch wallet activity');
    return res.json();
}

export async function fetchGhostGraph<T = unknown>(query: string, variables?: Record<string, unknown>): Promise<T> {
  const endpoint = process.env.NEXT_PUBLIC_GHOSTGRAPH_URL;
  if (!endpoint) throw new Error('GhostGraph endpoint not set');
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
  });
  if (!res.ok) throw new Error('GhostGraph query failed');
  return res.json();
}

export function logGhostGraphEndpoint() {
  // eslint-disable-next-line no-console
  console.log('GhostGraph endpoint:', process.env.NEXT_PUBLIC_GHOSTGRAPH_URL);
} 