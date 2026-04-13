import React from 'react';
import { Modal, Pressable, Text, TouchableOpacity, View } from 'react-native';
import { monthNames, weekdays } from '../../data/homeData';
import { styles } from '../../styles/homeStyles';
import { isSameDay, isWithinRange } from '../../utils/homeHelpers';

export default function CalendarModal({
  visible,
  onClose,
  datesLabel,
  visibleMonth,
  calendarDays,
  selectedStartDate,
  selectedEndDate,
  onMoveMonth,
  onSelectDay,
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
            <Text style={styles.modalTitle}>Choose your dates</Text>
            <Pressable onPress={onClose}>
              <Text style={styles.modalClose}>Close</Text>
            </Pressable>
          </View>

          <Text style={styles.selectionSummary}>{datesLabel}</Text>

          <View style={styles.monthSwitcher}>
            <Pressable style={styles.monthButton} onPress={() => onMoveMonth(-1)}>
              <Text style={styles.monthButtonText}>{'<'}</Text>
            </Pressable>
            <Text style={styles.monthLabel}>
              {monthNames[visibleMonth.getMonth()]} {visibleMonth.getFullYear()}
            </Text>
            <Pressable style={styles.monthButton} onPress={() => onMoveMonth(1)}>
              <Text style={styles.monthButtonText}>{'>'}</Text>
            </Pressable>
          </View>

          <View style={styles.weekdaysRow}>
            {weekdays.map((day) => (
              <Text key={day} style={styles.weekdayText}>
                {day}
              </Text>
            ))}
          </View>

          <View style={styles.calendarGrid}>
            {calendarDays.map((item) => {
              if (item.empty) {
                return <View key={item.key} style={styles.emptyDay} />;
              }

              const isStart =
                selectedStartDate && isSameDay(item.date, selectedStartDate);
              const isEnd =
                selectedEndDate && isSameDay(item.date, selectedEndDate);
              const isInRange = isWithinRange(
                item.date,
                selectedStartDate,
                selectedEndDate,
              );

              return (
                <Pressable
                  key={item.key}
                  style={[
                    styles.dayCell,
                    isInRange ? styles.dayCellInRange : null,
                    isStart || isEnd ? styles.dayCellActive : null,
                  ]}
                  onPress={() => onSelectDay(item.date)}
                >
                  <Text
                    style={[
                      styles.dayText,
                      isStart || isEnd ? styles.dayTextActive : null,
                    ]}
                  >
                    {item.day}
                  </Text>
                </Pressable>
              );
            })}
          </View>

          <TouchableOpacity
            style={styles.primaryModalButton}
            onPress={onClose}
            activeOpacity={0.9}
          >
            <Text style={styles.primaryModalButtonText}>Apply dates</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
