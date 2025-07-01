import { NextRequest } from 'next/server';
import { serializeTransaction } from '@/lib/viemSerialize';
import { REACTION_ABI, REACTION_ADDRESS } from '@/lib/contracts/reaction';

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, x-blockchain-ids, x-action-version',
  'Content-Type': 'application/json',
  'x-blockchain-ids': `eip155:${process.env.NEXT_PUBLIC_MONAD_CHAIN_ID || 10143}`,
  'x-action-version': '2.0',
};

// OPTIONS endpoint for CORS preflight
export async function OPTIONS() {
  return new Response(null, { headers });
}

// GET endpoint returns Blink metadata (UI config)
export async function GET() {
  const response = {
    type: 'action',
    icon: `${process.env.NEXT_PUBLIC_BLINK_ICON_URL || ''}`,
    label: 'React',
    title: 'React On-Chain',
    description: 'React to an event on Monad Pulse. Powered by Monad Blinks.',
    links: {
      actions: [
        {
          type: 'transaction',
          label: 'React',
          href: '/api/actions/react',
          parameters: [
            { name: 'eventId', label: 'Event ID', type: 'string' },
            { name: 'emojiId', label: 'Emoji ID', type: 'number' },
          ],
        },
      ],
    },
  };
  return new Response(JSON.stringify(response), { status: 200, headers });
}

// POST endpoint handles the actual transaction creation (stub)
export async function POST(req: NextRequest) {
  try {
    const { eventId, emojiId } = await req.json();
    if (!eventId || typeof emojiId !== 'number') {
      return new Response(JSON.stringify({ error: 'Missing eventId or emojiId' }), { status: 400, headers });
    }
    // Build the transaction data for addReaction
    const tx = {
      to: REACTION_ADDRESS,
      data: serializeTransaction({
        abi: REACTION_ABI,
        functionName: 'addReaction',
        args: [eventId, emojiId],
      }),
      chainId: Number(process.env.NEXT_PUBLIC_MONAD_CHAIN_ID) || 10143,
    };
    const response = {
      type: 'transaction',
      transaction: JSON.stringify(tx),
      message: 'React on Monad Pulse',
    };
    return new Response(JSON.stringify(response), { status: 200, headers });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500, headers });
  }
} 