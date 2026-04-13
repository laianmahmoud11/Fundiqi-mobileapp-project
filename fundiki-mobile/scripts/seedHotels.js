const axios = require('axios');
const { apiKey, projectId } = require('../src/config/firebaseConfigForSeed');

const hotels = [
  {
    id: 'amman-grand-hotel',
    name: 'Amman Grand Hotel',
    city: 'Amman',
    rating: '8.8',
    reviewText: 'Excellent',
    reviews: '2806 reviews',
    badge: 'Early 2025 Deal',
    nights: '2 nights',
    oldPrice: 'EUR 445',
    newPrice: 'EUR 313',
    image:
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=900&q=80',
    hasDiscount: true,
    rooms: 8,
    adultsCapacity: 4,
  },
  {
    id: 'cairo-palace-hotel',
    name: 'Cairo Palace Hotel',
    city: 'Cairo',
    rating: '9.1',
    reviewText: 'Wonderful',
    reviews: '1904 reviews',
    badge: 'Member price',
    nights: '2 nights',
    oldPrice: 'EUR 380',
    newPrice: 'EUR 290',
    image:
      'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=900&q=80',
    hasDiscount: true,
    rooms: 6,
    adultsCapacity: 3,
  },
  {
    id: 'doha-skyline-hotel',
    name: 'Doha Skyline Hotel',
    city: 'Doha',
    rating: '8.6',
    reviewText: 'Very good',
    reviews: '1540 reviews',
    badge: 'Weekend deal',
    nights: '2 nights',
    oldPrice: 'EUR 410',
    newPrice: 'EUR 325',
    image:
      'https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?auto=format&fit=crop&w=900&q=80',
    hasDiscount: true,
    rooms: 5,
    adultsCapacity: 2,
  },
  {
    id: 'riyadh-royal-stay',
    name: 'Riyadh Royal Stay',
    city: 'Riyadh',
    rating: '8.9',
    reviewText: 'Excellent',
    reviews: '1750 reviews',
    badge: 'Member price',
    nights: '2 nights',
    oldPrice: 'EUR 400',
    newPrice: 'EUR 305',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80',
    hasDiscount: true,
    rooms: 7,
    adultsCapacity: 4,
  },
  {
    id: 'abu-dhabi-bay-hotel',
    name: 'Abu Dhabi Bay Hotel',
    city: 'Abu Dhabi',
    rating: '8.4',
    reviewText: 'Very good',
    reviews: '1322 reviews',
    badge: 'Weekend deal',
    nights: '2 nights',
    oldPrice: 'EUR 355',
    newPrice: 'EUR 279',
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80',
    hasDiscount: true,
    rooms: 4,
    adultsCapacity: 2,
  },
  {
    id: 'kuwait-city-plaza',
    name: 'Kuwait City Plaza',
    city: 'Kuwait City',
    rating: '8.2',
    reviewText: 'Good',
    reviews: '980 reviews',
    badge: 'Special offer',
    nights: '2 nights',
    oldPrice: 'EUR 320',
    newPrice: 'EUR 255',
    image:
      'https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=900&q=80',
    hasDiscount: true,
    rooms: 5,
    adultsCapacity: 3,
  },
  {
    id: 'manama-harbor-hotel',
    name: 'Manama Harbor Hotel',
    city: 'Manama',
    rating: '8.7',
    reviewText: 'Excellent',
    reviews: '1215 reviews',
    badge: 'Member price',
    nights: '2 nights',
    oldPrice: 'EUR 340',
    newPrice: 'EUR 268',
    image:
      'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=900&q=80',
    hasDiscount: true,
    rooms: 4,
    adultsCapacity: 2,
  },
  {
    id: 'muscat-oasis-resort',
    name: 'Muscat Oasis Resort',
    city: 'Muscat',
    rating: '9.0',
    reviewText: 'Wonderful',
    reviews: '1678 reviews',
    badge: 'Early 2025 Deal',
    nights: '2 nights',
    oldPrice: 'EUR 390',
    newPrice: 'EUR 299',
    image:
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=80',
    hasDiscount: true,
    rooms: 6,
    adultsCapacity: 4,
  },
  {
    id: 'beirut-central-hotel',
    name: 'Beirut Central Hotel',
    city: 'Beirut',
    rating: '8.3',
    reviewText: 'Very good',
    reviews: '1107 reviews',
    badge: 'Special offer',
    nights: '2 nights',
    oldPrice: 'EUR 310',
    newPrice: 'EUR 241',
    image:
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=900&q=80',
    hasDiscount: true,
    rooms: 4,
    adultsCapacity: 2,
  },
  {
    id: 'tunis-golden-stay',
    name: 'Tunis Golden Stay',
    city: 'Tunis',
    rating: '8.5',
    reviewText: 'Excellent',
    reviews: '1432 reviews',
    badge: 'Weekend deal',
    nights: '2 nights',
    oldPrice: 'EUR 330',
    newPrice: 'EUR 257',
    image:
      'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=900&q=80',
    hasDiscount: true,
    rooms: 5,
    adultsCapacity: 3,
  },
  {
    id: 'rabat-garden-hotel',
    name: 'Rabat Garden Hotel',
    city: 'Rabat',
    rating: '8.1',
    reviewText: 'Good',
    reviews: '905 reviews',
    badge: 'Member price',
    nights: '2 nights',
    oldPrice: 'EUR 295',
    newPrice: 'EUR 229',
    image:
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=80',
    hasDiscount: true,
    rooms: 3,
    adultsCapacity: 2,
  },
  {
    id: 'baghdad-riverside-hotel',
    name: 'Baghdad Riverside Hotel',
    city: 'Baghdad',
    rating: '8.0',
    reviewText: 'Good',
    reviews: '840 reviews',
    badge: 'Special offer',
    nights: '2 nights',
    oldPrice: 'EUR 280',
    newPrice: 'EUR 215',
    image:
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=900&q=80',
    hasDiscount: true,
    rooms: 4,
    adultsCapacity: 3,
  },
];

function toFirestoreFields(hotel) {
  return {
    name: { stringValue: hotel.name },
    city: { stringValue: hotel.city },
    rating: { stringValue: hotel.rating },
    reviewText: { stringValue: hotel.reviewText },
    reviews: { stringValue: hotel.reviews },
    badge: { stringValue: hotel.badge },
    nights: { stringValue: hotel.nights },
    oldPrice: { stringValue: hotel.oldPrice },
    newPrice: { stringValue: hotel.newPrice },
    image: { stringValue: hotel.image },
    hasDiscount: { booleanValue: hotel.hasDiscount },
    rooms: { integerValue: String(hotel.rooms) },
    adultsCapacity: { integerValue: String(hotel.adultsCapacity) },
  };
}

async function seedHotels() {
  for (const hotel of hotels) {
    const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/hotels/${hotel.id}?key=${apiKey}`;

    await axios.patch(url, {
      fields: toFirestoreFields(hotel),
    });

    console.log(`Saved ${hotel.name}`);
  }

  console.log('Finished seeding hotels');
}

seedHotels().catch((error) => {
  console.error('Could not seed hotels');
  console.error(error.response?.data || error.message);
  process.exit(1);
});
