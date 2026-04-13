import { View, StyleSheet } from 'react-native';
import { useState } from 'react';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import EmptyState from '../../components/EmptyState';
import PastBookings from '../../components/PastBooking';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'active' | 'past'>('active');

  return (
    <View style={styles.container}>
      <Header />

      <Tabs 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {activeTab === 'active' ? (
        <EmptyState />
      ) : (
        <PastBookings />
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2'
  }
});