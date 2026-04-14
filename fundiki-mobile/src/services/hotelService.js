import axios from 'axios';
import {
  firebaseConfig,
  hasValidFirebaseConfig,
  hotelsCollectionName,
} from '../config/firebase';
import { mockHotels } from '../data/mockHotels';

function normalizeHotel(hotel, index) {
  return {
    id: hotel.id || `hotel-${index}`,
    city: hotel.city || '',
    name: hotel.name || 'Hotel',
    rating: hotel.rating || '0.0',
    reviewText: hotel.reviewText || 'Good',
    reviews: hotel.reviews || '0 reviews',
    badge: hotel.badge || null,
    nights: hotel.nights || '2 nights',
    oldPrice: hotel.oldPrice || '',
    newPrice: hotel.newPrice || '',
    image: hotel.image || '',
    hasDiscount: hotel.hasDiscount === true,
    rooms: Number(hotel.rooms || 1),
    adultsCapacity: Number(hotel.adultsCapacity || 1),
  };
}

function hotelMatchesSearch(hotel, filters) {
  const { destination } = filters;
  const destinationText = destination ? destination.trim().toLowerCase() : '';

  const matchesDestination =
    !destinationText ||
    hotel.city.toLowerCase().includes(destinationText) ||
    hotel.name.toLowerCase().includes(destinationText);

  return matchesDestination;
}

async function getHotelsFromFirebase() {
  const projectId = firebaseConfig.projectId;
  const firestoreUrl = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/${hotelsCollectionName}`;
  const response = await axios.get(firestoreUrl);
  const documents = response.data.documents || [];

  return documents.map((document, index) => {
    const fields = document.fields || {};

    return normalizeHotel(
      {
        id: document.name.split('/').pop(),
        city: fields.city?.stringValue,
        name: fields.name?.stringValue,
        rating: fields.rating?.stringValue,
        reviewText: fields.reviewText?.stringValue,
        reviews: fields.reviews?.stringValue,
        badge: fields.badge?.stringValue || null,
        nights: fields.nights?.stringValue,
        oldPrice: fields.oldPrice?.stringValue,
        newPrice: fields.newPrice?.stringValue,
        image: fields.image?.stringValue,
        hasDiscount: fields.hasDiscount?.booleanValue,
        rooms: fields.rooms?.integerValue,
        adultsCapacity: fields.adultsCapacity?.integerValue,
      },
      index,
    );
  });
}

async function getHotels() {
  if (hasValidFirebaseConfig()) {
    try {
      const firebaseHotels = await getHotelsFromFirebase();

      if (firebaseHotels.length > 0) {
        return firebaseHotels;
      }
    } catch (error) {
      return mockHotels.map(normalizeHotel);
    }
  }

  return mockHotels.map(normalizeHotel);
}

export async function getWeekendDeals() {
  const hotels = await getHotels();

  return hotels.filter((hotel) => hotel.hasDiscount).slice(0, 3);
}

export async function getPopularCapitalHotels() {
  const hotels = await getHotels();

  return [...hotels]
    .sort((firstHotel, secondHotel) => {
      return Number(secondHotel.rating) - Number(firstHotel.rating);
    })
    .slice(0, 3);
}

export async function searchHotels(filters) {
  const hotels = await getHotels();
  return hotels.filter((hotel) => hotelMatchesSearch(hotel, filters));
}
