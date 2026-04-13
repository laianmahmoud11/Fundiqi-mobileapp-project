import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function EmptyState() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/854/854878.png' }}
        style={styles.image}
      />

      <Text style={styles.title}>No bookings yet</Text>

      <Text style={styles.subtitle}>
        Sign in or create an account to get started.
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>

      <Text style={styles.link}>Import booking</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10
  },
  subtitle: {
    color: 'gray',
    textAlign: 'center',
    marginBottom: 20
  },
  button: {
    backgroundColor: '#1f4ba5',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 6,
    marginBottom: 15
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  },
  link: {
    color: '#1f4ba5'
  }
});