import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../../styles/homeStyles';

export default function HomeHeader() {
  return (
    <View style={styles.topPanel}>
      <Text style={styles.brand}>
        Fundi<Text style={styles.brandAccent}>k</Text>i
      </Text>
      <View style={styles.staysBadge}>
        <View style={styles.badgeIcon} />
        <Text style={styles.staysText}>Stays</Text>
      </View>
    </View>
  );
}
