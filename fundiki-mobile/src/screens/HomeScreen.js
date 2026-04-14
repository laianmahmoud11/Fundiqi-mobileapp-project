import React, { useEffect, useState } from 'react';
import {
  Alert,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomNav from '../components/home/BottomNav';
import HomeHeader from '../components/home/HomeHeader';
import HomeSections from '../components/home/HomeSections';
import SearchCard from '../components/home/SearchCard';
import {
  deals,
  ideas,
  navItems,
} from '../data/homeData';
import {
  getPopularCapitalHotels,
  getWeekendDeals,
  searchHotels,
} from '../services/hotelService';
import { styles } from '../styles/homeStyles';
import { getRandomItems } from '../utils/contentHelpers';
import { buildSearchFilters } from '../utils/searchHelpers';

export default function HomeScreen() {
  const [destination, setDestination] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [weekendDeals, setWeekendDeals] = useState([]);
  const [popularHotels, setPopularHotels] = useState([]);
  const [randomDeals, setRandomDeals] = useState([]);
  const [randomIdeas, setRandomIdeas] = useState([]);

  useEffect(() => {
    async function loadHomeData() {
      try {
        const dealsData = await getWeekendDeals();
        const popularHotelsData = await getPopularCapitalHotels();

        setWeekendDeals(dealsData);
        setPopularHotels(popularHotelsData);
      } catch (error) {
        setWeekendDeals([]);
        setPopularHotels([]);
      }

      setRandomDeals(getRandomItems(deals, 2));
      setRandomIdeas(getRandomItems(ideas, 3));
    }

    loadHomeData();
  }, []);

  async function handleSearch() {
    const filters = buildSearchFilters({
      destination,
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
      </View>
    </SafeAreaView>
  );
}
