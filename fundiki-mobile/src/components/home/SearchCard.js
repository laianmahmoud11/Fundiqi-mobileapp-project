import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../../styles/homeStyles';

export default function SearchCard({
  destination,
  onDestinationChange,
  onSearch,
}) {
  return (
    <View style={styles.searchCard}>
      <View style={styles.searchRow}>
        <View style={styles.searchField}>
          <Text style={styles.fieldLabel}>Destination</Text>
          <TextInput
            value={destination}
            onChangeText={onDestinationChange}
            placeholder="Enter city, hotel, or landmark"
            placeholderTextColor="#8a94a6"
            style={styles.textInput}
          />
        </View>

        <TouchableOpacity
          style={styles.searchButtonInline}
          activeOpacity={0.9}
          onPress={onSearch}
        >
          <Text style={styles.searchIcon}>⌕</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
