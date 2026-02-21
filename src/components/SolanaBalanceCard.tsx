import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useSolanaConnection } from '../hooks/useSolanaConnection';
import { formatSOL } from '../utils/formatters';

interface BalanceProps {
  address: string;
  refreshInterval?: number; // In milliseconds
}

export const SolanaBalanceCard: React.FC<BalanceProps> = ({ 
  address, 
  refreshInterval = 30000 
}) => {
  const { rpc } = useSolanaConnection();
  const [balance, setBalance] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchBalance = async () => {
    try {
      const lamports = await rpc.getBalance(address).send();
      setBalance(Number(lamports) / 1_000_000_000);
    } catch (error) {
      console.error("Failed to fetch balance:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBalance();
    const interval = setInterval(fetchBalance, refreshInterval);
    return () => clearInterval(interval);
  }, [address]);

  return (
    <View style={styles.card}>
      <Text style={styles.label}>SOL Balance</Text>
      {loading ? (
        <ActivityIndicator color="#9945FF" />
      ) : (
        <Text style={styles.amount}>{balance !== null ? formatSOL(balance) : '0.00'}</Text>
      )}
      <Text style={styles.address} numberOfLines={1} ellipsizeMode="middle">
        {address}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: '#1A1A1A',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#333',
  },
  label: { color: '#888', fontSize: 12, marginBottom: 4 },
  amount: { color: '#FFF', fontSize: 24, fontWeight: 'bold' },
  address: { color: '#666', fontSize: 10, marginTop: 8 }
});
