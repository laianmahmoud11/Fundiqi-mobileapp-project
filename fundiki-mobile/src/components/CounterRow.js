import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from '../styles/homeStyles';

export default function CounterRow({
  label,
  description,
  value,
  onDecrease,
  onIncrease,
  disableDecrease,
}) {
  return (
    <View style={styles.counterRow}>
      <View style={styles.counterTextWrap}>
        <Text style={styles.counterLabel}>{label}</Text>
        <Text style={styles.counterDescription}>{description}</Text>
      </View>

      <View style={styles.counterControls}>
        <Pressable
          onPress={onDecrease}
          style={[
            styles.counterButton,
            disableDecrease ? styles.counterButtonDisabled : null,
          ]}
          disabled={disableDecrease}
        >
          <Text style={styles.counterButtonText}>-</Text>
        </Pressable>

        <Text style={styles.counterValue}>{value}</Text>

        <Pressable onPress={onIncrease} style={styles.counterButton}>
          <Text style={styles.counterButtonText}>+</Text>
        </Pressable>
      </View>
    </View>
  );
}
