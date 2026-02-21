import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ShieldCheck, ShieldAlert, Clock } from 'lucide-react-native';

export type KYCStatus = 'unverified' | 'pending' | 'verified' | 'rejected';

interface KYCProps {
  status: KYCStatus;
  onPressAction?: () => void;
}

export const KYCStatusCard: React.FC<KYCProps> = ({ status, onPressAction }) => {
  const config = {
    verified: { label: 'Verified', color: '#10B981', icon: ShieldCheck, sub: 'Identity confirmed.' },
    pending: { label: 'Pending', color: '#F59E0B', icon: Clock, sub: 'Manual review in progress.' },
    rejected: { label: 'Action Required', color: '#EF4444', icon: ShieldAlert, sub: 'Verification failed.' },
    unverified: { label: 'Unverified', color: '#6B7280', icon: ShieldAlert, sub: 'Access restricted.' },
  }[status];

  return (
    <TouchableOpacity 
      style={[styles.container, { borderColor: config.color }]} 
      onPress={onPressAction}
      disabled={status === 'verified'}
    >
      <View style={styles.iconContainer}>
        <config.icon size={24} color={config.color} />
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.statusLabel, { color: config.color }]}>{config.label}</Text>
        <Text style={styles.subtext}>{config.sub}</Text>
      </View>
      {status !== 'verified' && (
        <View style={styles.actionArrow}>
          <Text style={{ color: config.color }}>→</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#111',
    borderRadius: 12,
    borderWidth: 1,
    alignItems: 'center',
  },
  iconContainer: { marginRight: 12 },
  textContainer: { flex: 1 },
  statusLabel: { fontWeight: '700', fontSize: 16 },
  subtext: { color: '#9CA3AF', fontSize: 12 },
  actionArrow: { marginLeft: 8 }
});
