import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getExplorerUrl(hash: string, type: 'tx' | 'address' = 'tx') {
  const baseUrl = process.env.NEXT_PUBLIC_MONAD_EXPLORER_URL || 'https://testnet-explorer.monad.xyz';
  return `${baseUrl}/${type}/${hash}`;
}

export function truncateHash(hash: string, start = 6, end = 4) {
  if (hash.length <= start + end) return hash;
  return `${hash.slice(0, start)}...${hash.slice(-end)}`;
}
