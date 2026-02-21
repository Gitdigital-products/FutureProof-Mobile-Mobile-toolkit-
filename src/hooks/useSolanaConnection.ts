import { createSolanaRpc, Rpc } from '@solana/kit';
import { useMemo } from 'react';

// Default to Mainnet-Beta for production, but allows devnet overrides
const DEFAULT_RPC = "https://api.mainnet-beta.solana.com";

export const useSolanaConnection = (customEndpoint?: string) => {
  const rpc = useMemo(() => {
    const endpoint = customEndpoint || DEFAULT_RPC;
    return createSolanaRpc(endpoint);
  }, [customEndpoint]);

  /**
   * Helper to fetch latest blockhash for transaction building
   */
  const getLatestBlockhash = async () => {
    const { value } = await rpc.getLatestBlockhash().send();
    return value;
  };

  return { 
    rpc, 
    getLatestBlockhash,
    network: customEndpoint?.includes('devnet') ? 'devnet' : 'mainnet'
  };
};
