type MonadErrorPattern = {
  pattern: string | RegExp;
  userMessage: string;
};

const MONAD_RPC_ERRORS: Record<number, MonadErrorPattern[]> = {
  [-32603]: [
    { pattern: /Execution reverted/, userMessage: 'Transaction reverted. Please check your input or try again.' },
    { pattern: /Internal error/, userMessage: 'Internal RPC error. Please try again later.' },
    { pattern: /Transaction decoding error/, userMessage: 'Transaction could not be decoded. Please check your input.' },
  ],
  [-32602]: [
    { pattern: /Invalid params/, userMessage: 'Invalid parameters. Please check your input.' },
    { pattern: /Invalid block range/, userMessage: 'Block range too large. Monad only supports 100 blocks per query. See https://docs.monad.xyz/reference/rpc-differences' },
  ],
  [-32601]: [
    { pattern: /Method not found/, userMessage: 'RPC method not found or not supported by Monad.' },
    { pattern: /Method not supported/, userMessage: 'This RPC method is not yet supported by Monad.' },
    { pattern: /Parse error/, userMessage: 'Malformed request. Please try again.' },
    { pattern: /Invalid request/, userMessage: 'Invalid request. Please try again.' },
  ],
};

export function getMonadRpcErrorMessage(err: any): string {
  if (!err) return 'Unknown error';
  const code = err.code ?? err?.cause?.code;
  const message = err.message ?? err?.cause?.message ?? '';
  const patterns = MONAD_RPC_ERRORS[code];
  if (patterns) {
    for (const { pattern, userMessage } of patterns) {
      if (typeof pattern === 'string' ? message.includes(pattern) : pattern.test(message)) {
        return userMessage;
      }
    }
  }
  return message || 'An unexpected error occurred.';
} 