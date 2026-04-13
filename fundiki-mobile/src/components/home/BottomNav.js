import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Feather, Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import { styles } from '../../styles/homeStyles';

function BottomBarIcon({ item, active }) {
  const color = active ? '#1F4FFF' : '#101010';
  const size = 31;

  if (item === 'Search') {
    return <Feather name="search" size={size} color={color} />;
  }

  if (item === 'Saved') {
    return <Feather name="heart" size={size - 1} color={color} />;
  }

  if (item === 'Bookings') {
    return <SimpleLineIcons name="handbag" size={size - 1} color={color} />;
  }

  return <Ionicons name="person-circle-outline" size={size + 2} color={color} />;
}

export default function BottomNav({
  navItems,
  activeItem = 'Search',
}) {
  return (
    <View style={styles.bottomNav}>
      {navItems.map((item) => (
        <TouchableOpacity
          key={item}
          style={styles.navItem}
          activeOpacity={0.85}
        >
          <BottomBarIcon item={item} active={item === activeItem} />
          <Text
            style={[styles.navLabel, item === activeItem ? styles.navLabelActive : null]}
          >
            {item}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
