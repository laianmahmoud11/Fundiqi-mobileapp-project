import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Booking } from '../types/booking';
import { getBookingStatusColor, getBookingStatusLabel } from '../services/bookingService';

type Props = {
  bookings: Booking[];
  onCancelBooking: (bookingId: string) => void;
  onCompleteBooking: (bookingId: string) => void;
};

export default function ActiveBookings({
  bookings,
  onCancelBooking,
  onCompleteBooking
}: Props) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {bookings.map((booking) => (
        <View style={styles.card} key={booking.id}>
          <Image source={{ uri: booking.image }} style={styles.image} />

          <View style={styles.info}>
            <Text style={styles.title}>{booking.hotelName}</Text>
            <Text style={styles.city}>
              {booking.city}, {booking.country}
            </Text>

            <Text style={styles.details}>
              🗓 {booking.checkInDate} - {booking.checkOutDate}
            </Text>
            <Text style={styles.details}>🛏 {booking.rooms} Rooms</Text>
            <Text style={styles.details}>👤 {booking.guests} Guests</Text>
            <Text style={styles.details}>⏰ Check-in: {booking.checkInTime}</Text>

            <Text
              style={[
                styles.status,
                { color: getBookingStatusColor(booking.status) }
              ]}
            >
              {getBookingStatusLabel(booking.status)}
            </Text>

            <View style={styles.actions}>
              <TouchableOpacity
                style={[styles.actionButton, styles.completeButton]}
                onPress={() => onCompleteBooking(booking.id)}
              >
                <Text style={styles.actionButtonText}>Complete Stay</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.actionButton, styles.cancelButton]}
                onPress={() => onCancelBooking(booking.id)}
              >
                <Text style={styles.actionButtonText}>Cancel Booking</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    padding: 15,
    paddingBottom: 50
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 4
  },
  image: {
    width: '100%',
    height: 150
  },
  info: {
    padding: 12
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  city: {
    color: 'gray',
    marginTop: 3,
    marginBottom: 5
  },
  details: {
    marginTop: 2,
    fontSize: 13
  },
  status: {
    marginTop: 8,
    fontWeight: 'bold'
  },
  actions: {
    flexDirection: 'row',
    marginTop: 12,
    gap: 10
  },
  actionButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center'
  },
  completeButton: {
    backgroundColor: '#1f4ba5'
  },
  cancelButton: {
    backgroundColor: '#d32f2f'
  },
  actionButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13
  }
});