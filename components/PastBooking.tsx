import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Booking } from '../types/booking';
import { getBookingStatusColor, getBookingStatusLabel } from '../services/mybookingService';

type Props = {
  bookings: Booking[];
};

export default function PastBookings({ bookings }: Props) {
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
  }
});