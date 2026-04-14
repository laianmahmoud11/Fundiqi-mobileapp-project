import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import SectionTitle from '../SectionTitle';
import { styles } from '../../styles/homeStyles';

export default function HomeSections({
  deals,
  weekendDeals,
  popularHotels,
  ideas,
}) {
  return (
    <>
      <SectionTitle title="Travel more, spend less" />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.dealsRow}
      >
        {deals.map((deal) => (
          <View key={deal.id} style={styles.dealCard}>
            <View style={styles.dealCardTop}>
              <Text style={styles.dealTitle}>{deal.title}</Text>
            </View>
            <Text style={styles.dealDescription}>{deal.description}</Text>
          </View>
        ))}
      </ScrollView>

      <SectionTitle
        title="Deals for weekend"
        subtitle="Save on stays in top Arab destinations"
      />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardsRow}
      >
        {weekendDeals.map((hotel) => (
          <View key={hotel.id} style={styles.weekendCard}>
            <Image source={{ uri: hotel.image }} style={styles.cardImage} />
            <View style={styles.weekendCardBody}>
              <Text style={styles.weekendCardTitle}>{hotel.name}</Text>
              <View style={styles.ratingRow}>
                <View style={styles.ratingBadge}>
                  <Text style={styles.ratingBadgeText}>{hotel.rating}</Text>
                </View>
                <Text style={styles.reviewText}>{hotel.reviewText}</Text>
                <Text style={styles.reviewText}>- {hotel.reviews}</Text>
              </View>
              <Text style={styles.locationText}>Location: {hotel.city}</Text>
              {hotel.badge ? (
                <View style={styles.greenBadge}>
                  <Text style={styles.greenBadgeText}>{hotel.badge}</Text>
                </View>
              ) : null}
              <View style={styles.priceRow}>
                <Text style={styles.nightsText}>{hotel.nights}:</Text>
                <Text style={styles.oldPrice}>{hotel.oldPrice}</Text>
                <Text style={styles.newPrice}>{hotel.newPrice}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <SectionTitle
        title="Popular hotels"
        subtitle="Top-rated stays across capital cities"
      />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardsRow}
      >
        {popularHotels.map((hotel) => (
          <View key={hotel.id} style={styles.attractionCard}>
            <Image source={{ uri: hotel.image }} style={styles.attractionImage} />
            <View style={styles.attractionBody}>
              <Text style={styles.attractionTitle}>{hotel.name}</Text>
              <View style={styles.attractionMeta}>
                <AntDesign
                  name="star"
                  size={18}
                  color="#FFC107"
                  style={styles.starIcon}
                />
                <Text style={styles.attractionRating}>{hotel.rating}</Text>
                <Text style={styles.attractionDot}>•</Text>
                <Text style={styles.attractionReviews}>{hotel.reviews}</Text>
              </View>
              <View style={styles.attractionPriceRow}>
                <Text style={styles.attractionPriceLabel}>Starting from</Text>
                <Text style={styles.attractionPrice}>{hotel.newPrice}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <SectionTitle
        title="Capital ideas"
        subtitle="Explore hand-picked capital stays"
      />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardsRow}
      >
        {ideas.map((idea) => (
          <View key={idea.id} style={styles.ideaCard}>
            <Image source={{ uri: idea.image }} style={styles.ideaImage} />
            <View style={styles.ideaOverlay} />
            <Text style={styles.ideaTitle}>{idea.city}</Text>
          </View>
        ))}
      </ScrollView>
    </>
  );
}
