import React from 'react';
import { Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from '../../styles/homeStyles';

export default function SearchCard({
  destination,
  onDestinationChange,
  datesLabel,
  guestsLabel,
  onOpenCalendar,
  onOpenGuests,
  onSearch,
}) {
  return (
    <View style={styles.searchCard}>
      <View style={styles.field}>
        <Text style={styles.fieldLabel}>Destination</Text>
        <TextInput
          value={destination}
          onChangeText={onDestinationChange}
          placeholder="Enter city, hotel, or landmark"
          placeholderTextColor="#8a94a6"
          style={styles.textInput}
        />
      </View>

      <Pressable style={styles.field} onPress={onOpenCalendar}>
        <Text style={styles.fieldLabel}>Dates</Text>
        <Text style={styles.inputText}>{datesLabel}</Text>
      </Pressable>

      <Pressable style={styles.field} onPress={onOpenGuests}>
        <Text style={styles.fieldLabel}>Guests</Text>
        <Text style={styles.inputText}>{guestsLabel}</Text>
      </Pressable>

      <TouchableOpacity
        style={styles.searchButton}
        activeOpacity={0.9}
        onPress={onSearch}
      >
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
}
