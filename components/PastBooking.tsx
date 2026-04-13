import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function PastBookings() {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.card}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1501117716987-c8e2a3c7f9d4' }}
          style={styles.image}
        />
        <View style={styles.info}>
          <Text style={styles.title}>Royal Hotel</Text>
          <Text style={styles.city}>Paris, France</Text>

          <Text style={styles.details}>🗓 12 Aug - 18 Aug</Text>
          <Text style={styles.details}>🛏 2 Rooms</Text>
          <Text style={styles.details}>👤 3 Guests</Text>
          <Text style={styles.details}>⏰ Check-in: 2:00 PM</Text>

          <Text style={styles.statusDone}>Completed</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4' }}
          style={styles.image}
        />
        <View style={styles.info}>
          <Text style={styles.title}>Grand Palace</Text>
          <Text style={styles.city}>Rome, Italy</Text>

          <Text style={styles.details}>🗓 5 Sep - 10 Sep</Text>
          <Text style={styles.details}>🛏 1 Room</Text>
          <Text style={styles.details}>👤 2 Guests</Text>
          <Text style={styles.details}>⏰ Check-in: 1:00 PM</Text>

          <Text style={styles.statusDone}>Completed</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511' }}
          style={styles.image}
        />
        <View style={styles.info}>
          <Text style={styles.title}>Blue Sea Resort</Text>
          <Text style={styles.city}>Antalya, Turkey</Text>

          <Text style={styles.details}>🗓 20 Jul - 25 Jul</Text>
          <Text style={styles.details}>🛏 2 Rooms</Text>
          <Text style={styles.details}>👤 4 Guests</Text>
          <Text style={styles.details}>⏰ Check-in: 3:00 PM</Text>

          <Text style={styles.statusCancel}>Cancelled</Text>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
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
  statusDone: {
    marginTop: 8,
    color: 'green',
    fontWeight: 'bold'
  },
  statusCancel: {
    marginTop: 8,
    color: 'red',
    fontWeight: 'bold'
  }
});