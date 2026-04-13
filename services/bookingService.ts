import { DATA_SOURCE } from '../constants/config';
import { mockBookings } from '../data/mockBookings';
import { Booking, BookingStatus, CreateBookingPayload } from '../types/booking';

const TEAM_API_BASE_URL = 'https://your-team-api.com/api';

function sortBookingsByDate(bookings: Booking[]) {
  return [...bookings].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

async function getUserBookingsFromMock(userId: string): Promise<Booking[]> {
  const bookings = mockBookings.filter((booking) => booking.userId === userId);
  return sortBookingsByDate(bookings);
}

async function getUserBookingsFromFirebase(userId: string): Promise<Booking[]> {
  throw new Error('Firebase is not connected yet');
}

async function getUserBookingsFromTeamApi(userId: string): Promise<Booking[]> {
  const response = await fetch(`${TEAM_API_BASE_URL}/bookings/user/${userId}`);

  if (!response.ok) {
    throw new Error('Failed to fetch bookings from team API');
  }

  return response.json();
}

export async function getUserBookings(userId: string): Promise<Booking[]> {
  if (DATA_SOURCE === 'mock') {
    return getUserBookingsFromMock(userId);
  }

  if (DATA_SOURCE === 'firebase') {
    return getUserBookingsFromFirebase(userId);
  }

  return getUserBookingsFromTeamApi(userId);
}

export async function getActiveBookings(userId: string): Promise<Booking[]> {
  const bookings = await getUserBookings(userId);

  return bookings.filter(
    (booking) => booking.status === 'pending' || booking.status === 'confirmed'
  );
}

export async function getPastBookings(userId: string): Promise<Booking[]> {
  const bookings = await getUserBookings(userId);

  return bookings.filter(
    (booking) => booking.status === 'completed' || booking.status === 'cancelled'
  );
}

export async function createBooking(payload: CreateBookingPayload): Promise<Booking> {
  const newBooking: Booking = {
    id: `booking_${Date.now()}`,
    userId: payload.userId,
    hotelId: payload.hotelId,
    hotelName: payload.hotelName,
    city: payload.city,
    country: payload.country,
    image: payload.image,
    checkInDate: payload.checkInDate,
    checkOutDate: payload.checkOutDate,
    rooms: payload.rooms,
    guests: payload.guests,
    checkInTime: payload.checkInTime,
    status: payload.status || 'pending',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  if (DATA_SOURCE === 'mock') {
    return newBooking;
  }

  if (DATA_SOURCE === 'firebase') {
    throw new Error('Firebase is not connected yet');
  }

  const response = await fetch(`${TEAM_API_BASE_URL}/bookings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error('Failed to create booking');
  }

  return response.json();
}

export async function cancelBooking(bookingId: string): Promise<Booking | null> {
  if (DATA_SOURCE === 'mock') {
    const booking = mockBookings.find((item) => item.id === bookingId);

    if (!booking) {
      return null;
    }

    booking.status = 'cancelled';
    booking.updatedAt = new Date().toISOString();

    return booking;
  }

  if (DATA_SOURCE === 'firebase') {
    throw new Error('Firebase is not connected yet');
  }

  const response = await fetch(`${TEAM_API_BASE_URL}/bookings/${bookingId}/cancel`, {
    method: 'PATCH'
  });

  if (!response.ok) {
    throw new Error('Failed to cancel booking');
  }

  return response.json();
}

export async function completeBooking(bookingId: string): Promise<Booking | null> {
  if (DATA_SOURCE === 'mock') {
    const booking = mockBookings.find((item) => item.id === bookingId);

    if (!booking) {
      return null;
    }

    booking.status = 'completed';
    booking.updatedAt = new Date().toISOString();

    return booking;
  }

  if (DATA_SOURCE === 'firebase') {
    throw new Error('Firebase is not connected yet');
  }

  const response = await fetch(`${TEAM_API_BASE_URL}/bookings/${bookingId}/complete`, {
    method: 'PATCH'
  });

  if (!response.ok) {
    throw new Error('Failed to complete booking');
  }

  return response.json();
}

export function getBookingStatusLabel(status: BookingStatus) {
  switch (status) {
    case 'pending':
      return 'Pending';
    case 'confirmed':
      return 'Confirmed';
    case 'completed':
      return 'Completed';
    case 'cancelled':
      return 'Cancelled';
    default:
      return status;
  }
}

export function getBookingStatusColor(status: BookingStatus) {
  switch (status) {
    case 'pending':
      return '#d97706';
    case 'confirmed':
      return '#1f4ba5';
    case 'completed':
      return 'green';
    case 'cancelled':
      return 'red';
    default:
      return 'gray';
  }
}