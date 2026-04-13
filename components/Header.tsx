import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>
        Fundi<Text style={styles.yellow}>k</Text>i
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 90,
    backgroundColor: '#1f4ba5',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 12
  },
  logo: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  yellow: {
    color: '#FFD700'
  }
});