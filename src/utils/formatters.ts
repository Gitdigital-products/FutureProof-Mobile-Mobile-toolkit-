/**
 * Formats a number to a standard Solana display format (e.g., 4 decimal places).
 */
export const formatSOL = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 4,
  }).format(amount) + ' SOL';
};
