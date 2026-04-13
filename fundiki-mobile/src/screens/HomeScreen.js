import React, { useMemo, useState } from 'react';
import {
  Alert,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomNav from '../components/home/BottomNav';
import CalendarModal from '../components/home/CalendarModal';
import GuestsModal from '../components/home/GuestsModal';
import HomeHeader from '../components/home/HomeHeader';
import HomeSections from '../components/home/HomeSections';
import SearchCard from '../components/home/SearchCard';
import {
  deals,
  ideas,
  navItems,
} from '../data/homeData';
import { searchHotels } from '../services/hotelService';
import { usePopularHotels, useWeekendDeals } from '../hooks/useHotels';
import { styles } from '../styles/homeStyles';
import { getRandomItems } from '../utils/contentHelpers';
import {
  buildGuestsLabel,
  formatDateRange,
  generateCalendarDays,
} from '../utils/homeHelpers';
import { buildSearchFilters } from '../utils/searchHelpers';

export default function HomeScreen() {
  const [destination, setDestination] = useState('');
  const [isCalendarVisible, setCalendarVisible] = useState(false);
  const [isGuestsVisible, setGuestsVisible] = useState(false);
  const [hasGuestSelection, setHasGuestSelection] = useState(false);
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [visibleMonth, setVisibleMonth] = useState(new Date());
  const [isSearching, setIsSearching] = useState(false);

  const calendarDays = generateCalendarDays(visibleMonth);
  const guestsLabel = buildGuestsLabel(rooms, adults, children);
  const datesLabel = formatDateRange(selectedStartDate, selectedEndDate);
  const { data: weekendDeals = [] } = useWeekendDeals();
  const { data: popularHotels = [] } = usePopularHotels();
  const randomDeals = useMemo(() => getRandomItems(deals, 2), []);
  const randomIdeas = useMemo(() => getRandomItems(ideas, 3), []);

  function handleDayPress(pressedDate) {
    if (
      !selectedStartDate ||
      (selectedStartDate && selectedEndDate) ||
      pressedDate < selectedStartDate
    ) {
      setSelectedStartDate(pressedDate);
      setSelectedEndDate(null);
      return;
    }

    setSelectedEndDate(pressedDate);
  }

  function moveMonth(direction) {
    setVisibleMonth((currentMonth) => {
      const nextMonth = new Date(currentMonth);
      nextMonth.setMonth(currentMonth.getMonth() + direction);
      return new Date(nextMonth.getFullYear(), nextMonth.getMonth(), 1);
    });
  }

  function changeRooms(updateValue) {
    setHasGuestSelection(true);
    setRooms(updateValue);
  }

  function changeAdults(updateValue) {
    setHasGuestSelection(true);
    setAdults(updateValue);
  }

  function changeChildren(updateValue) {
    setHasGuestSelection(true);
    setChildren(updateValue);
  }

  async function handleSearch() {
    const filters = buildSearchFilters({
      destination,
      startDate: selectedStartDate,
      endDate: selectedEndDate,
      rooms,
      adults,
      children,
      includeGuests: hasGuestSelection,
    });

    try {
      setIsSearching(true);
      const results = await searchHotels(filters);

      Alert.alert(
        'Search completed',
        `Found ${results.length} hotel(s). Later, these results can be shown on Mohammad's page.`,
      );
    } catch (error) {
      Alert.alert(
        'Connection error',
        'Make sure Firebase is set up correctly, then try again.',
      );
    } finally {
      setIsSearching(false);
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#1f49a7" />

      <View style={styles.screen}>
        <HomeHeader />

        <ScrollView
          style={styles.content}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          <SearchCard
            destination={destination}
            onDestinationChange={setDestination}
            datesLabel={datesLabel}
            guestsLabel={guestsLabel}
            onOpenCalendar={() => setCalendarVisible(true)}
            onOpenGuests={() => setGuestsVisible(true)}
            onSearch={isSearching ? null : handleSearch}
          />

          <HomeSections
            deals={randomDeals}
            weekendDeals={weekendDeals}
            popularHotels={popularHotels}
            ideas={randomIdeas}
          />
        </ScrollView>

        <BottomNav
          navItems={navItems}
          activeItem="Search"
        />

        <CalendarModal
          visible={isCalendarVisible}
          onClose={() => setCalendarVisible(false)}
          datesLabel={datesLabel}
          visibleMonth={visibleMonth}
          calendarDays={calendarDays}
          selectedStartDate={selectedStartDate}
          selectedEndDate={selectedEndDate}
          onMoveMonth={moveMonth}
          onSelectDay={handleDayPress}
        />

        <GuestsModal
          visible={isGuestsVisible}
          onClose={() => setGuestsVisible(false)}
          rooms={rooms}
          adults={adults}
          children={children}
          onDecreaseRooms={() =>
            changeRooms((current) => Math.max(1, current - 1))
          }
          onIncreaseRooms={() => changeRooms((current) => current + 1)}
          onDecreaseAdults={() =>
            changeAdults((current) => Math.max(1, current - 1))
          }
          onIncreaseAdults={() => changeAdults((current) => current + 1)}
          onDecreaseChildren={() =>
            changeChildren((current) => Math.max(0, current - 1))
          }
          onIncreaseChildren={() => changeChildren((current) => current + 1)}
        />
      </View>
    </SafeAreaView>
  );
}
