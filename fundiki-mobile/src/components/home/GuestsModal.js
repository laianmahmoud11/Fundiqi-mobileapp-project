import React from 'react';
import { Modal, Pressable, Text, TouchableOpacity, View } from 'react-native';
import CounterRow from '../CounterRow';
import { styles } from '../../styles/homeStyles';

export default function GuestsModal({
  visible,
  onClose,
  rooms,
  adults,
  children,
  onDecreaseRooms,
  onIncreaseRooms,
  onDecreaseAdults,
  onIncreaseAdults,
  onDecreaseChildren,
  onIncreaseChildren,
}) {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      <View style={styles.modalBackdrop}>
        <View style={styles.modalCard}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Guests and rooms</Text>
            <Pressable onPress={onClose}>
              <Text style={styles.modalClose}>Close</Text>
            </Pressable>
          </View>

          <CounterRow
            label="Rooms"
            description="How many rooms do you need?"
            value={rooms}
            onDecrease={onDecreaseRooms}
            onIncrease={onIncreaseRooms}
            disableDecrease={rooms <= 1}
          />

          <CounterRow
            label="Adults"
            description="Adults staying in the booking"
            value={adults}
            onDecrease={onDecreaseAdults}
            onIncrease={onIncreaseAdults}
            disableDecrease={adults <= 1}
          />

          <CounterRow
            label="Children"
            description="Children traveling with you"
            value={children}
            onDecrease={onDecreaseChildren}
            onIncrease={onIncreaseChildren}
            disableDecrease={children <= 0}
          />

          <TouchableOpacity
            style={styles.primaryModalButton}
            onPress={onClose}
            activeOpacity={0.9}
          >
            <Text style={styles.primaryModalButtonText}>Apply guests</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
