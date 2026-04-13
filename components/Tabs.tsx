import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type Props = {
  activeTab: 'active' | 'past';
  setActiveTab: (value: 'active' | 'past') => void;
};

export default function Tabs({ activeTab, setActiveTab }: Props) {
  return (
    <View style={styles.container}>

      <TouchableOpacity
        style={activeTab === 'active' ? styles.activeTab : styles.tab}
        onPress={() => setActiveTab('active')}
      >
        <Text style={activeTab === 'active' ? styles.activeText : styles.text}>
          Active
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={activeTab === 'past' ? styles.activeTab : styles.tab}
        onPress={() => setActiveTab('past')}
      >
        <Text style={activeTab === 'past' ? styles.activeText : styles.text}>
          Past
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15
  },
  tab: {
    marginRight: 15
  },
  activeTab: {
    borderWidth: 1,
    borderColor: '#1f4ba5',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginRight: 15
  },
  activeText: {
    color: '#1f4ba5'
  },
  text: {
    color: 'black'
  }
});