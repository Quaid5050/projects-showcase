import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { OrderStatus, STATUS_CONFIG } from '../../constants/statusConfig';

interface StatusBadgeProps {
  status: OrderStatus;
  size?: 'sm' | 'md';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, size = 'md' }) => {
  const config = STATUS_CONFIG[status];
  if (!config) return null;

  return (
    <View
      style={[
        styles.badge,
        { backgroundColor: config.bg },
        size === 'sm' && styles.small,
      ]}
    >
      <Text
        style={[
          styles.text,
          { color: config.color },
          size === 'sm' && styles.smallText,
        ]}
      >
        {config.label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  small: {
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  text: {
    fontSize: 12,
    fontWeight: '600',
  },
  smallText: {
    fontSize: 11,
  },
});
