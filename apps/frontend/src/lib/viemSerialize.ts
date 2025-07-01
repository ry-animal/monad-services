import { encodeFunctionData, Abi } from 'viem';

/**
 * Serializes a contract function call for use in Blink POST handler.
 * @param abi - Contract ABI (cast to Abi for viem)
 * @param functionName - Name of the function to call
 * @param args - Arguments for the function (cast to readonly unknown[])
 * @returns Encoded data string
 */
export function serializeTransaction({ abi, functionName, args }: { abi: unknown; functionName: string; args: unknown[] }) {
  // Cast is safe for runtime ABI usage
  return encodeFunctionData({ abi: abi as Abi, functionName, args: args as readonly unknown[] });
} 