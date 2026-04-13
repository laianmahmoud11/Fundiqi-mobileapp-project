import { View, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { useEffect, useState } from 'react';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import EmptyState from '../../components/EmptyState';
import PastBookings from '../../components/PastBooking';
import ActiveBookings from '../../components/ActiveBookings';

import { Booking } from '../../types/booking';
import { getCurrentUser } from '../../services/authService';
import {
  getActiveBookings,
  getPastBookings,
  cancelBooking,
  completeBooking
} from '../../services/bookingService';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'active' | 'past'>('active');
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const [activeBookings, setActiveBookings] = useState<Booking[]>([]);
  const [pastBookings, setPastBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initializeScreen();
  }, []);

  async function initializeScreen() {
    try {
      setLoading(true);

      const user = await getCurrentUser();

      if (!user) {
        setCurrentUserId(null);
        setActiveBookings([]);
        setPastBookings([]);
        return;
      }

      setCurrentUserId(user.id);
      await loadBookings(user.id);
    } catch (error) {
      console.log('Failed to initialize screen:', error);
    } finally {
      setLoading(false);
    }
  }

  async function loadBookings(userId: string) {
    const activeData = await getActiveBookings(userId);
    const pastData = await getPastBookings(userId);

    setActiveBookings(activeData);
    setPastBookings(pastData);
  }

  async function handleCancelBooking(bookingId: string) {
    try {
      await cancelBooking(bookingId);

      if (currentUserId) {
        await loadBookings(currentUserId);
      }
    } catch (error) {
      console.log('Failed to cancel booking:', error);
      Alert.alert('Error', 'Could not cancel the booking.');
    }
  }

  async function handleCompleteBooking(bookingId: string) {
    try {
      await completeBooking(bookingId);

      if (currentUserId) {
        await loadBookings(currentUserId);
      }
    } catch (error) {
      console.log('Failed to complete booking:', error);
      Alert.alert('Error', 'Could not complete the booking.');
    }
  }

  function handleSignIn() {
    Alert.alert('Sign in', 'Connect this button to your login screen later.');
  }

  function renderLoggedOutContent() {
    return (
      <EmptyState
        title={activeTab === 'active' ? 'No active bookings' : 'No past bookings'}
        subtitle="Please sign in first to view and manage your bookings."
        buttonText="Sign in"
        onPressButton={handleSignIn}
      />
    );
  }

  function renderContent() {
    if (loading) {
      return <ActivityIndicator size="large" color="#1f4ba5" style={styles.loader} />;
    }

    if (!currentUserId) {
      return renderLoggedOutContent();
    }

    if (activeTab === 'active') {
      if (activeBookings.length === 0) {
        return (
          <EmptyState
            title="No active bookings"
            subtitle="You do not have any active bookings yet."
            buttonText="Add booking"
            onPressButton={() =>
              Alert.alert('Add booking', 'Connect this button to your hotel booking flow later.')
            }
          />
        );
      }

      return (
        <ActiveBookings
          bookings={activeBookings}
          onCancelBooking={handleCancelBooking}
          onCompleteBooking={handleCompleteBooking}
        />
      );
    }

    if (pastBookings.length === 0) {
      return (
        <EmptyState
          title="No past bookings"
          subtitle="Completed or cancelled bookings will appear here after login."
          hideButton
        />
      );
    }

    return <PastBookings bookings={pastBookings} />;
  }

  return (
    <View style={styles.container}>
      <Header />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {renderContent()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2'
  },
  loader: {
    marginTop: 40
  }
});