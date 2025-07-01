export type Pulse = {
  pulseId: number;
  author: string;
  contentHash: string;
  timestamp: number;
};

export type Reaction = {
  pulseId: number;
  reactor: string;
  reactionType: string;
  timestamp: number;
};

const BASE_URL = process.env.NEXT_PUBLIC_GHOSTGRAPH_URL || 'https://api.ghostlogs.xyz/gg/pub/d5e34b87-ccfd-4876-86e2-aa5b42659fea/ghostgraph';

export async function fetchPulses(): Promise<Pulse[]> {
  const res = await fetch(`${BASE_URL}/pulses`);
  if (!res.ok) throw new Error('Failed to fetch pulses');
  return res.json();
}

export async function fetchReactions(pulseId: number): Promise<Reaction[]> {
  const res = await fetch(`${BASE_URL}/pulses/${pulseId}/reactions`);
  if (!res.ok) throw new Error('Failed to fetch reactions');
  return res.json();
}

export async function fetchWalletActivity(address: string): Promise<Pulse[]> {
  const res = await fetch(`${BASE_URL}/wallets/${address}/activity`);
  if (!res.ok) throw new Error('Failed to fetch wallet activity');
  return res.json();
} 