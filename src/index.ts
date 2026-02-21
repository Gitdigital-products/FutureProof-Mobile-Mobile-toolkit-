// 1. Components
export * from './components/SolanaBalanceCard';
export * from './components/KYCStatusCard';

// 2. Hooks
export * from './hooks/useSolanaConnection';

// 3. Utilities & Types
export * from './utils/formatters';

// 4. Constants (Infrastructure)
export const SOLANA_MAINNET_RPC = "https://api.mainnet-beta.solana.com";
export const SOLANA_DEVNET_RPC = "https://api.devnet.solana.com";

/**
 * FutureProof Toolkit Version
 */
export const VERSION = '0.1.0';
